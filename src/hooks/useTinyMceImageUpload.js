import { useState, useEffect, useRef } from 'react';

import useEventHandler from '@/hooks/useEventHandler';

import { getPresignedUrl, s3ImageUpload } from '@/api/authApi';

export default function useTinyMceImageUpload({
  initialTitle,
  initialContent,
}) {
  const editorRef = useRef(null);
  const imageButtonRef = useRef(null);

  const { changeValue: titleValue, handleChange: handleTitleValueChange } =
    useEventHandler({
      changeDefaultValue: initialTitle,
    });

  const { changeValue: editorValue, handleChange: handleEditorValueChange } =
    useEventHandler({
      changeDefaultValue: initialContent,
    });

  const [previewImage, setPreviewImage] = useState('');

  const handleImageUploadClick = () => {
    imageButtonRef.current.value = '';
    imageButtonRef.current && imageButtonRef.current.click();
  };

  const handleImageUploadRequest = async (e) => {
    //console.log('업로드 발동');
    const uploadFile = e.target.files[0];

    if (!uploadFile.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다!');
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
      alert('이미지 업로드에 실패 하였습니다!');
      console.error('업로드 error:', error);
    }
  };

  const pastImageS3Upload = async (blob) => {
    const file = new File([blob], `image.${blob.type.split('/').at(-1)}`, {
      type: blob.type,
    });

    let res;
    try {
      res = await getPresignedUrl({
        fileType: file.type,
      });
    } catch (error) {
      console.error('url 받기 실패');
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
      console.error('s3 업로드 실패');
      return;
    }
  };

  const handleImagePaste = async (plugin, args) => {
    //1. 붙여넣기한 이미지는 어차피 각각 자기네들의 서버에 저장되어있는 src라
    //따로 업로드를 안해도 될것같다.
    //2. blob이 붙은건 캡쳐이미지라는건데 그것만 서버에 업로드하는 작업을 거쳐주면 될듯
    const content = args.content;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const images = doc.querySelectorAll('img');

    if (images.length > 0) {
      args.preventDefault();
      for (let image of images) {
        const isBlob = image.src.includes('blob:');
        if (isBlob) {
          const response = await fetch(image.src);
          const blob = await response.blob();

          //성공 시 s3 url // 실패 시 변화 x

          const s3Url = await pastImageS3Upload(blob);

          s3Url &&
            (() => {
              image.src = s3Url;
            })();
        }
        setPreviewImage(image.src);
      }
    }
  };

  const imageExtensionCheck = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorValue, 'text/html');
    const htmlEl = doc.body.querySelectorAll('img');
    const imageExtensions = [
      'jpg',
      'jpeg',
      'png',
      'gif',
      'bmp',
      'tiff',
      'webp',
      'heif',
      'svg',
    ];

    const types = [];

    htmlEl.forEach((imgEl) => {
      imageExtensions.forEach((extesion) => {
        const type1 = imgEl.src.includes(`.${extesion}`);
        const type2 = imgEl.src.includes(`/${extesion}`);

        if (type1 || type2) {
          types.push(`image/${extesion}`);
        }
      });
    });

    return types;
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
    imageExtensionCheck,
    handleImageUploadClick,
    handleImageUploadRequest,
    handleImagePaste,
    handleTitleValueChange,
    handleEditorValueChange,
  };
}
