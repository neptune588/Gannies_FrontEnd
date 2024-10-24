import { useState, useEffect, useRef } from 'react';

import useEventHandler from '@/hooks/useEventHandler';

import { getPresignedUrl, s3ImageUpload } from '@/api/authApi';
import { errorAlert } from '@/utils/sweetAlert';

export default function useTinyMceImageUpload({
  initialTitle,
  initialContent,
}) {
  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);

  const [previewImage, setPreviewImage] = useState('');
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
    const typeCondition =
      type === 'image/gif' ||
      type === 'image/jpg' ||
      type === 'image/jpeg' ||
      type === 'image/png';

    if (!typeCondition) {
      return 'image/jpeg';
    }

    return type;
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

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleImageUploadRequest = async (e) => {
    //console.log('업로드 발동');
    const uploadFile = e.target.files[0];

    if (!uploadFile.type.startsWith('image/')) {
      errorAlert('이미지 파일만 업로드 가능합니다!');
      return;
    }

    try {
      const formData = new FormData();

      const res = await getPresignedUrl({
        fileType: uploadFile.type,
      });

      const { url: presignedUrl, fields } = res.data;

      formData.append('Content-Type', uploadFile.type);

      for (let key in fields) {
        formData.append(key, fields[key]);
      }
      formData.append('file', uploadFile);

      await s3ImageUpload(presignedUrl, formData);
      setPreviewImage(`${presignedUrl}${fields['key']}`);
    } catch (error) {
      errorAlert('이미지 업로드에 실패 하였습니다!');
    }
  };

  /*   const pastImageS3Upload = async (blob) => {
    const file = new File([blob], `image.${blob.type.split('/').at(-1)}`, {
      type: blob.type,
    });

    try {
      const res = await getPresignedUrl({
        fileType: file.type,
      });
      
      if()
    } catch (error) {
      errorAlert('url 받기 실패');
      return;
    }

    try {
      const formData = new FormData();

      const { url: presignedUrl, fields } = res.data;
      formData.append('Content-Type', file.type);

      for (let key in fields) {
        formData.append(key, fields[key]);
      }
      formData.append('file', file);

      await s3ImageUpload(presignedUrl, formData);
      return `${presignedUrl}${fields['key']}`;
    } catch (error) {
      errorAlert('s3 업로드 실패');
      return;
    }
  }; */

  const handleImagePaste = async (plugin, args) => {
    //args.preventDefault();
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
    //2. 이미지가 맞으면 src 형식 확인
    //3.
    if (images.length > 0) {
      for (let image of images) {
        const isBlob = image.src.startsWith('blob:');
        const isBase64 = image.src.startsWith('data:');

        if (isBlob) {
          try {
            const response = await fetch(image.src);
            const blob = await response.blob();

            const file = blobObjectToFileObjectConvert({
              blob,
              filename: filenameConvert(blob.type),
            });
          } catch (error) {
            errorAlert('올바른 형식의 image가 아닙니다.');
          }

          if (isBase64) {
          }
        }
        //setPreviewImage(image.src);
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

  /*   const handleImagePaste = async (editor) => {
    editor.on('paste', (e) => {
      e.preventDefault();
      const clipboardData = e.clipboardData;

      //들어올수 있는 파일 종류
      const clipboardText = clipboardData.getData('text/plain');
      //파일 객체가아닌 image url 기본적으로 2개이상일때
      const clipboardImageTags = clipboardData.getData('text/html');
      //이미지가 1개만복사될땐 파일형태로 들어옴
      const clipboardFiles = clipboardData.files;

      const parser = new DOMParser();
      const doc = parser.parseFromString(clipboardImageTags, 'text/html');
      const images = doc.querySelectorAll('img');

      const totalNodes = parser.parseFromString(
        editorRef.current.getContent(),
        'text/html'
      );
      const totalImages = totalNodes.querySelectorAll('img');

      //검증
      if (clipboardText && textContentLength > 5000) {
        return;
      }

      if (images && totalImages.length >= 1) {
        errorAlert('이미지는 최대 50개 까지만 본문에 실을 수 있습니다.');
        clipboardData.setData('text/html', '');
        return;
      }
      if (clipboardFiles[0]) {
      }

      if (images.length > 0) {
      }

      //2개 이상의 이미지일때는 clipboardText & clipboardFiles에 안 들어감.
      console.log('clipboardText: ', clipboardText);
      console.log('clipboardFiles: ', clipboardFiles[0]);
      console.log('pasteImageNode: ', images);
      console.log('totalImage: ', totalImages.length);
    });
  }; */

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
    urlExtraction,
    textContentLengthCalc,
    handleImageUploadClick,
    handleImageUploadRequest,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
  };
}
