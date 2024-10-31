import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import Resizer from 'react-image-file-resizer';

import useEventHandler from '@/hooks/useEventHandler';

import { getPresignedUrl, s3Upload, deleteS3Url } from '@/api/authApi';
import { errorAlert, questionAlert, confirmAlert } from '@/utils/sweetAlert';

export default function useTinyMceUpload({
  initialTitle,
  initialContent,
  initialFiles,
}) {
  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);
  const uploadedFilesRef = useRef();
  const fileUploadButtonRef = useRef(null);
  const imageCompressionOptions = {
    maxSizeMB: 1, // 최대 파일 크기 (MB)
    maxWidthOrHeight: 1920, // 최대 너비 또는 높이
    initialQuality: 0.7,
    useWebWorker: true, // 웹 워커 사용 여부
  };
  const acceptImageTypes = [
    'image/gif',
    'image/png',
    'image/jpg',
    'image/jpeg',
  ];

  const imageWidthStandard = 860;
  const imageCompressStandardSize = 1;
  const imageUploadMaxSize = 5;
  const fileUploadMaxLength = 50;
  const uploadMaxSize = 500;

  const [previewImage, setPreviewImage] = useState({});
  const [isUpload, setIsUpload] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [cumSize, setCumSize] = useState({ prevSize: 0, currentSize: 0 });
  const cumSizeRef = useRef(cumSize);

  const [uploadedFiles, setUploadedFiles] = useState({ files: [], images: [] });
  const { changeValue: titleValue, handleChange: handleTitleValueChange } =
    useEventHandler({
      changeDefaultValue: initialTitle,
    });
  const { changeValue: editorValue, handleChange: handleEditorValueChange } =
    useEventHandler({
      changeDefaultValue: initialContent,
    });

  //paramter로 들어온 content가 text가 맞는지 체크하기 위한 convert
  const totalTextConvert = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    //브라우저 호환성 때문에 ||
    return tempDiv.textContent || tempDiv.innerText;
  };

  const {
    changeValue: textContentLength,
    handleChange: textContentLengthCalc,
  } = useEventHandler({
    changeDefaultValue: (() => {
      const totalText = totalTextConvert(initialContent);
      return totalText.length > 0 ? totalText.length : 0;
    })(),
  });

  const currentSizeCalc = (size) => {
    //소숫점 2번째자리 까지 표기
    return (size / (1024 * 1024)).toFixed(2);
  };

  //fileObjectname convert
  const filenameConvert = (mimeType) => {
    const imageExtensions = {
      'image/png': 'image.png',
      'image/jpg': 'image.jpg',
      'image/jpeg': 'image.jpeg',
      'image/gif': 'image.gif',
      'image/bmp': 'image.bmp',
      'image/tiff': 'image.tiff',
      'image/webp': 'image.webp',
      'image/heif': 'image.heif',
      'image/svg+xml': 'image.svg',
    };

    return imageExtensions[mimeType];
  };

  //전체 image갯수를 체크하기 위한 convert
  const totalImageConvert = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      editorRef.current.getContent(),
      'text/html'
    );

    return doc.querySelectorAll('img');
  };

  //지원되는 확장자 형식으로 바꾸기 위한 convert
  const imageTypeConvert = (type) => {
    //console.log('step: type convert', type);
    if (!acceptImageTypes.includes(type)) {
      return 'image/jpeg';
    }

    return type;
  };

  const getImageSize = (src) => {
    const img = new Image();
    img.src = src;

    return new Promise((res, rej) => {
      img.onload = () => {
        res({ width: img.naturalWidth, height: img.naturalHeight });
      };

      img.onerror = () => {
        rej(new Error('image failed to load'));
      };
    });
  };

  const imageResize = ({ file, imgWidth, imgHeight }) => {
    const heightRatioCalc = imgWidth / imgHeight;
    const resizeWidth = imageWidthStandard * 0.8;
    //픽셀은 소숫점허용x
    const resizeHeight = Math.round(resizeWidth * heightRatioCalc);

    //console.log('step: resize', file.type);
    return new Promise((res) => {
      Resizer.imageFileResizer(
        file,
        resizeWidth,
        resizeHeight, // 원하는 높이
        imageTypeConvert(file.type).split('/').at(-1), // 포맷 (JPEG, PNG, WEBP 등)
        100, // 품질 (0-100)
        0, // 회전 각도 (0-360)
        (result) => {
          res(result);
        },
        'file' // 반환 형식 (base64, file, blob 등)
      );
    });
  };

  //base64URL -> blob 변경하기 위한 convert
  const base64UrlFileObjectConvert = (base64Url) => {
    // BASE64 URL에서 메타데이터를 제거하고, BASE64 문자열만 추출
    const arr = base64Url.split(',');
    const mimeType = arr[0].match(/:(.*?);/)[1]; // MIME 타입 추출
    const filename = filenameConvert(mimeType);
    const base64String = arr[1]; // BASE64 문자열 추출

    // BASE64 문자열을 바이너리로 변환
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    return {
      blob: byteArray,
      filename,
    };
  };

  //blob -> 파일 객체 변환을 위한 convert
  const blobObjectToFileObjectConvert = ({ blob, filename }) => {
    const file = new File([blob], filename, {
      type: imageTypeConvert(blob.type),
    });
    return file;
  };

  const s3UploadRequest = async (file) => {
    //업로드, 붙여넣기 두곳에서 쓰이기 때문에 호출 단에서 오류 정의하는게 나을듯
    const formData = new FormData();
    const res = await getPresignedUrl({
      fileType: file.type,
    });

    const { url: presignedUrl, fields } = res.data;

    formData.append('Content-Type', file.type);
    for (let key in fields) {
      formData.append(key, fields[key]);
    }
    formData.append('file', file);

    await s3Upload(presignedUrl, formData, {
      onUploadProgress: (progressEvent) => {
        setUploadedFiles((prev) => {
          uploadedFilesRef.current = {
            ...prev,
            files: prev.files.map((innerFile, idx) => {
              if (idx === prev.files.length - 1) {
                return {
                  ...innerFile,
                  progress: (progressEvent.loaded / progressEvent.total) * 100,
                  isLoading: true,
                };
              } else {
                return innerFile;
              }
            }),
          };
          return uploadedFilesRef.current;
        });
      },
    });
    //console.log(presignedUrl, fields['key'], file.type);
    return { presignedUrl, s3Url: `${presignedUrl}${fields['key']}` };
  };

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleFileUploadClick = () => {
    fileUploadButtonRef.current.value = '';
    fileUploadButtonRef.current && fileUploadButtonRef.current.click();
  };

  const handleFileUpload = async (e) => {
    if (isFileUpload) {
      return;
    }

    const uploadFile = e.target.files[0];
    const totalImages = totalImageConvert();
    const uploadFileSize = currentSizeCalc(uploadFile.size);

    if (
      totalImages.length + uploadedFiles.files.length + 1 >
      fileUploadMaxLength
    ) {
      errorAlert(
        '첨부, 붙여넣기 할 수 있는 파일 밑 이미지는 최대 50개 입니다!'
      );
      return;
    }

    if (uploadFileSize > uploadMaxSize) {
      errorAlert('파일은 10MB를 초과하여 업로드 할 수 없습니다.');
      return;
    }

    try {
      setIsFileUpload(true);
      setUploadedFiles((prev) => {
        uploadedFilesRef.current = {
          ...prev,
          files: [
            ...prev.files,
            {
              type: 'file',
              fileName: uploadFile.name,
              fileSize: parseFloat(uploadFileSize).toFixed(2),
              isLoading: true,
              progress: 0,
            },
          ],
        };
        return uploadedFilesRef.current;
      });

      const { presignedUrl, s3Url } = await s3UploadRequest(uploadFile);

      setUploadedFiles((prev) => {
        uploadedFilesRef.current = {
          ...prev,
          files: prev.files.map((innerFile, idx) => {
            if (idx === prev.files.length - 1) {
              return {
                ...innerFile,
                presignedUrl,
                s3Url,
                isLoading: false,
              };
            } else {
              return innerFile;
            }
          }),
        };
        return uploadedFilesRef.current;
      });
    } catch (error) {
      setUploadedFiles((prev) => {
        uploadedFilesRef.current = {
          ...prev,
          files: prev.files.map((innerFile, idx) => {
            if (idx === prev.files.length - 1) {
              return {
                ...innerFile,
                isFailed: true,
                isLoading: false,
                progress: 100,
              };
            } else {
              return innerFile;
            }
          }),
        };
        return uploadedFilesRef.current;
      });
    } finally {
      setIsFileUpload(false);
    }
  };

  const handleUploadFileDelete = async (deleteFileIdx) => {
    const isFileDelete = await questionAlert({
      title: '파일 삭제',
      text: '파일을 삭제 하시겠습니까?',
    });

    if (isFileDelete) {
      const deleteFile = uploadedFiles.files[deleteFileIdx];

      if (!deleteFile) {
        errorAlert('파일을 찾을 수 없습니다.');
        return;
      }

      try {
        await deleteS3Url(encodeURIComponent(deleteFile.s3Url));
        setUploadedFiles((prev) => {
          const arrSplice = [...prev.files];
          arrSplice.splice(deleteFileIdx, 1);
          uploadedFilesRef.current = {
            ...prev,
            files: arrSplice,
          };
          return uploadedFilesRef.current;
        });
        confirmAlert('파일이 삭제 되었습니다!');
      } catch (error) {
        //console.error(error);
        errorAlert(error.message);
      }
    }
  };

  const handleImageUpload = async (e) => {
    // 1. 이미지가 에디터 width 넘어가면 이미지 리사이즈 (에디터의 80% 크기)
    // 2. 이미지가 1mb 이상이면 압축 -> 퀄 70%

    if (isUpload) {
      return;
    }

    let uploadFile = e.target.files[0];
    const totalImages = totalImageConvert();
    const totalFiles = uploadedFiles.files;
    let sizeConvertToMegaByte;

    //image -> 단일업로드
    if (totalImages.length + totalFiles.length + 1 > fileUploadMaxLength) {
      errorAlert(
        '첨부, 붙여넣기 할 수 있는 파일 밑 이미지는 최대 50개 입니다!'
      );
      return;
    }

    if (!uploadFile.type.startsWith('image/')) {
      errorAlert('이미지 파일을 업로드 해주세요!');
      return;
    }

    if (!acceptImageTypes.includes(uploadFile.type)) {
      errorAlert('지원하지 않는 이미지 형식/파일입니다!');
      return;
    }

    //업로드 성공 시 -> content 업데이트
    //업로드 실패 시 -> alert 띄우고 업데이트x
    let imgWidth;
    let imgHeight;
    let convertUrl;

    try {
      setIsUpload(true);
      try {
        convertUrl = URL.createObjectURL(uploadFile);
        const size = await getImageSize(convertUrl);

        imgWidth = size.width;
        imgHeight = size.height;
      } catch (error) {
        imgWidth = null;
        imgHeight = null;
        //console.error(error);
      } finally {
        URL.revokeObjectURL(convertUrl);
      }

      if (imgWidth && imgWidth > imageWidthStandard) {
        try {
          uploadFile = await imageResize({
            file: uploadFile,
            imgWidth,
            imgHeight,
          });
        } catch (error) {
          console.error(error);
        }
      }

      if (currentSizeCalc(uploadFile.size) >= imageCompressStandardSize) {
        const compression = await imageCompression(
          uploadFile,
          imageCompressionOptions
        );

        uploadFile = blobObjectToFileObjectConvert({
          blob: compression,
          filename: compression.type,
        });
      }

      sizeConvertToMegaByte = currentSizeCalc(uploadFile.size);

      if (sizeConvertToMegaByte > imageUploadMaxSize) {
        errorAlert('이미지는 5MB를 초과하여 업로드 할 수 없습니다.');
        return;
      }

      if (sizeConvertToMegaByte + cumSize > uploadMaxSize) {
        errorAlert('업로드 가능한 최대 용량을 넘어섰습니다.');
        return;
      }

      const { presignedUrl, s3Url } = await s3UploadRequest(uploadFile);
      setPreviewImage({ src: s3Url, alt: '업로드 된 이미지' });
      setCumSize((prev) => {
        cumSizeRef.current = {
          prevSize: prev.prevSize,
          currentSize: (
            parseFloat(prev.prevSize) + parseFloat(sizeConvertToMegaByte)
          ).toFixed(2),
        };
        return cumSizeRef.current;
      });

      setUploadedFiles((prev) => {
        uploadedFilesRef.current = {
          ...prev,
          images: [
            ...prev.images,
            {
              type: 'image',
              presignedUrl,
              s3Url,
              fileSize: parseFloat(sizeConvertToMegaByte).toFixed(2),
            },
          ],
        };
        return uploadedFilesRef.current;
      });
    } catch (error) {
      errorAlert(error.message);
    } finally {
      setIsUpload(false);
    }
  };

  const handleImagePaste = async (plugin, args) => {
    args.preventDefault();
    const content = args.content;

    //1) TEXT 5000자 넘는지 검증
    const textCheck = totalTextConvert(content);
    if (textCheck && textCheck.length + textContentLength > 5000) {
      errorAlert('최대 글자를 초과하여 붙여 넣을 수 없습니다!');
      return;
    }

    //2) IMAGES
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const images = doc.querySelectorAll('img');
    const totalImages = totalImageConvert();
    const totalFiles = uploadedFiles.files;

    //console.log('image 갯수: ', images.length + totalImages.length);
    //console.log(images);

    //IMAGE 갯수 CHECK
    if (
      images.length + totalImages.length + totalFiles.length >
      fileUploadMaxLength
    ) {
      errorAlert(
        '첨부, 붙여넣기 할 수 있는 파일 밑 이미지는 최대 50개 입니다!'
      );
      return;
    }

    //1. 이미지가 맞냐?
    if (images.length > 0) {
      for (let image of images) {
        //2. 이미지가 맞으면 src 형식 확인
        //3. 이미지의 SIZE 확인
        //4. 조건에 맞게 압축 후 업로드
        let blob;
        let filename;
        let file;
        let imgWidth;
        let imgHeight;
        let sizeConvertToMegaByte;

        const isBase64 = image.src.startsWith('data:');
        const base64DataPattern = /^data:([^;]+);base64,(.+)$/;
        //배열 or NULL
        const matchArr = image.src.match(base64DataPattern);

        try {
          const size = await getImageSize(image.src);
          imgWidth = size.width;
          imgHeight = size.height;
        } catch (error) {
          imgWidth = null;
          imgHeight = null;

          //console.error(error);
        }

        if (isBase64 && matchArr) {
          const convertedBlob = base64UrlFileObjectConvert(image.src);
          blob = convertedBlob.blob;
          filename = convertedBlob.filename;
        }

        try {
          //올바르지 않은 url이거나 네트워크 오류인경우 not image
          const res = await fetch(image.src);
          blob = await res.blob();
          filename = filenameConvert(blob.type);

          //image 압축과정
          file = blobObjectToFileObjectConvert({
            blob,
            filename,
          });

          if (imgWidth && imgWidth > imageWidthStandard) {
            try {
              //resize 성공했을때만 재 할당
              file = await imageResize({ file, imgWidth, imgHeight });
            } catch (error) {
              console.error(error);
            }
          }

          if (currentSizeCalc(file.size) >= imageCompressStandardSize) {
            const compression = await imageCompression(
              file,
              imageCompressionOptions
            );
            file = blobObjectToFileObjectConvert({
              blob: compression,
              filename: compression.type,
            });
          }

          sizeConvertToMegaByte = currentSizeCalc(file.size);

          if (sizeConvertToMegaByte > imageUploadMaxSize) {
            errorAlert('이미지는 5MB를 초과하여 업로드 할 수 없습니다.');
            return;
          }

          if (sizeConvertToMegaByte + cumSize > uploadMaxSize) {
            errorAlert('업로드 가능한 최대 용량을 넘어섰습니다.');
            return;
          }

          const { presignedUrl, s3Url } = await s3UploadRequest(file);
          image.src = s3Url;
          image.alt = image.alt ? image.alt : '복사 된 이미지';
          setCumSize((prev) => {
            cumSizeRef.current = {
              prevSize: prev.prevSize,
              currentSize: (
                parseFloat(prev.prevSize) + parseFloat(sizeConvertToMegaByte)
              ).toFixed(2),
            };
            return cumSizeRef.current;
          });
          setUploadedFiles((prev) => {
            uploadedFilesRef.current = {
              ...prev,
              images: [
                ...prev.images,
                {
                  type: 'image',
                  presignedUrl,
                  s3Url,
                  fileSize: parseFloat(sizeConvertToMegaByte).toFixed(2),
                },
              ],
            };
            return uploadedFilesRef.current;
          });
        } catch (error) {
          errorAlert('이미지를 불러오는 데 실패 하였습니다.');
          image.src = '';
          image.alt = '알수없는 이미지';
        } finally {
          setPreviewImage({ src: image.src, alt: image.alt });
        }
      }
    }
  };

  const handleKeydown = async (e) => {
    const evnentStopKey = (e.key === 'z' && e.ctrlKey) || e.key === 'Backspace';
    if (evnentStopKey) {
      e.preventDefault();
    }

    const selectNodes = editorRef.current.selection.getContent({
      format: 'html',
    });

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = selectNodes;
    const images = tempDiv.querySelectorAll('img');
    if (images.length > 0) {
      for (let image of images) {
        const { fileSize } = uploadedFilesRef.current.find(
          (file) => file.src === image.src
        );
        setCumSize((prev) => {
          const sumSize = (parseFloat(prev) - parseFloat(fileSize)).toFixed(2);
          //0.00이면 0으로 표기
          cumSizeRef.current = sumSize === 0 ? 0 : sumSize;
          return cumSizeRef.current;
        });
      }
    }
  };

  const imageFileUrlsUpdated = async () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorValue, 'text/html');
    const images = doc.querySelectorAll('img');

    //1. image src 순회
    //2. uploadedFiles에 존재하는 object의 src가 image src와 하나도 일치하지 않는 경우
    //3. 즉  object src o image src x (이미지가 삭제 된 경우)인 경우 해당 object src 삭제 요청 밑 해당 오브젝트 제거
    //4. 그렇게 해서 남은 object의 src만 배열에 담기
    const deleteImageSearch = uploadedFiles.images.map((file, idx) =>
      (async () => {
        const imageNodes = Array.from(images);
        const isImageSrcContainedInFile = imageNodes.find(
          (image) => image.src === file.s3Url
        );

        if (!isImageSrcContainedInFile) {
          await deleteS3Url(encodeURIComponent(file.s3Url));
          setUploadedFiles((prev) => {
            const arrSplice = [...prev.images];
            arrSplice.splice(idx, 1);
            uploadedFilesRef.current = {
              ...prev,
              images: arrSplice,
            };
            return uploadedFilesRef.current;
          });
        }
      })()
    );

    await axios.all(deleteImageSearch);
  };

  const urlExtraction = () => {
    return [...uploadedFiles.files, ...uploadedFiles.images].map(
      (file) => file.s3Url
    );
  };

  useEffect(() => {
    if (initialFiles && initialFiles?.length > 0) {
      console.log(initialFiles);
    }
  }, []);

  useEffect(() => {
    if (editorRef.current && Object.keys(previewImage).length !== 0) {
      editorRef.current.insertContent(
        `<img src="${previewImage.src}" alt="${previewImage.alt}"/>`
      );
      setPreviewImage({});
    }
  }, [previewImage]);

  /*   삭제가 되는 경우
1. 요소를 클릭하고 아무 키나 keydown했을때 
2. 커서 위치에서 백스페이스를 눌렀을때
3. 요소들을 드래그하고 아무키나 눌렀을때 */

  return {
    titleValue,
    editorValue,
    editorRef,
    imageButtonRef,
    fileUploadButtonRef,
    textContentLength,
    isUpload,
    cumSize,
    uploadedFiles,
    urlExtraction,
    imageFileUrlsUpdated,
    textContentLengthCalc,
    handleImageUploadClick,
    handleFileUploadClick,
    handleImageUpload,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
    handleKeydown,
    handleFileUpload,
    handleUploadFileDelete,
  };
}
