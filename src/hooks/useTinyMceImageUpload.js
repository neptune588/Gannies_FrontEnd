import { useState, useEffect, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import Resizer from 'react-image-file-resizer';

import useEventHandler from '@/hooks/useEventHandler';

import { getPresignedUrl, s3ImageUpload } from '@/api/authApi';
import { errorAlert } from '@/utils/sweetAlert';

export default function useTinyMceImageUpload({
  initialTitle,
  initialContent,
}) {
  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);

  const imageCompressionOptions = {
    maxSizeMB: 1, // 최대 파일 크기 (MB)
    maxWidthOrHeight: 1920, // 최대 너비 또는 높이
    useWebWorker: true, // 웹 워커 사용 여부
  };
  const imageWidthStandard = 860;
  const acceptImageTypes = [
    'image/gif',
    'image/png',
    'image/jpg',
    'image/jpeg',
  ];

  const [previewImage, setPreviewImage] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const { changeValue: titleValue, handleChange: handleTitleValueChange } =
    useEventHandler({
      changeDefaultValue: initialTitle,
    });
  const { changeValue: editorValue, handleChange: handleEditorValueChange } =
    useEventHandler({
      changeDefaultValue: initialContent,
    });
  const {
    changeValue: textContentLength,
    handleChange: textContentLengthCalc,
  } = useEventHandler({
    changeDefaultValue: 0,
  });

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

  //paramter로 들어온 content가 text가 맞는지 체크하기 위한 convert
  const totalTextConvert = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    //브라우저 호환성 때문에 ||
    return tempDiv.textContent || tempDiv.innerText;
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

    return new Promise((res, rej) => {
      Resizer.imageFileResizer(
        file,
        resizeWidth,
        resizeHeight, // 원하는 높이
        file.type, // 포맷 (JPEG, PNG, WEBP 등)
        70, // 품질 (0-100)
        0, // 회전 각도 (0-360)
        (result) => {
          res(result);
        },
        'file', // 반환 형식 (base64, file, blob 등)
        () => {
          rej(new Error('resize failed'));
        }
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

    await s3ImageUpload(presignedUrl, formData);
    return `${presignedUrl}${fields['key']}`;
  };

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleImageUpload = async (e) => {
    if (isUpload) {
      return;
    }

    let uploadFile = e.target.files[0];

    if (!uploadFile.type.startsWith('image/')) {
      errorAlert('이미지 파일만 업로드 가능합니다!');
      return;
    }

    //console.log(uploadFile.type);

    if (!acceptImageTypes.includes(uploadFile.type)) {
      errorAlert('지원하지 않는 이미지 파일입니다!');
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

      const compression = await imageCompression(
        uploadFile,
        imageCompressionOptions
      );

      const compressedFile = blobObjectToFileObjectConvert({
        blob: compression,
        filename: compression.type,
      });

      const s3Url = await s3UploadRequest(compressedFile);
      setPreviewImage(s3Url);
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

    //console.log('image 갯수: ', images.length + totalImages.length);
    //console.log(images);

    //IMAGE 갯수 CHECK
    if (images.length + totalImages.length > 50) {
      errorAlert('첨부, 붙여넣기 할 수 있는 이미지는 최대 50장 입니다!');
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

          const compression = await imageCompression(
            file,
            imageCompressionOptions
          );
          const compressedFile = blobObjectToFileObjectConvert({
            blob: compression,
            filename: compression.type,
          });

          const s3Url = await s3UploadRequest(compressedFile);
          image.src = s3Url;
        } catch (error) {
          image.src = '';
        } finally {
          setPreviewImage(image.src);
        }
      }
    }
  };

  const urlExtraction = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorValue, 'text/html');
    const images = doc.querySelectorAll('img');

    const urls = [];
    images.forEach((image) => {
      urls.push(image.src);
    });

    return urls;
  };

  useEffect(() => {
    if (editorRef.current && previewImage !== '') {
      editorRef.current.insertContent(`<img src="${previewImage}" />`);
      setPreviewImage('');
    }
  }, [previewImage]);

  return {
    titleValue,
    editorValue,
    editorRef,
    imageButtonRef,
    previewImage,
    textContentLength,
    isUpload,
    urlExtraction,
    textContentLengthCalc,
    handleImageUploadClick,
    handleImageUpload,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
  };
}
