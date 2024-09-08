import React, { useState, useRef } from 'react';

import Upload from '@/components/Icons/Upload';
import InputSection from '@/pages/SignUp/components/InputSection';
import Instruction from '@/components/Instruction';
import Clip from '@/components/Icons/Clip';
import Close from '@/components/Icons/Close';
import Negative from '@/components/Instruction/Negative';

import {
  ActiveInputBox,
  InactiveInputBox,
  InputBox,
} from '@/pages/SignUp/Department/Inputs/Document/style';

function Document({ setAllow }) {
  const [fileName, setFileName] = useState('');
  const inputRef = useRef();
  const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  const maxSize = 1048576; // 1MB in bytes
  const [valid, setValid] = useState(undefined);

  const uploadFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (fileTypes.includes(file.type) && file.size <= maxSize) {
        setFileName(file.name);
        setValid(true);
        setAllow((prev) => {
          const newAllow = [...prev];
          newAllow[1] = true;
          return newAllow;
        });
      } else {
        setValid(false);
        setAllow((prev) => {
          const newAllow = [...prev];
          newAllow[1] = false;
          return newAllow;
        });
      }
    }
  };

  const deleteFile = (e) => {
    e.stopPropagation();
    setFileName('');
    setAllow((prev) => {
      const newAllow = [...prev];
      newAllow[1] = false;
      return newAllow;
    });
  };

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <InputSection $margin='37px' title='인증서류 업로드*'>
      {fileName ? (
        <ActiveInputBox onClick={handleBoxClick}>
          <Clip />
          <div>{fileName}</div>
          <Close onClick={deleteFile} />
        </ActiveInputBox>
      ) : (
        <InactiveInputBox onClick={handleBoxClick}>
          <span>파일업로드하기</span>
          <Upload />
        </InactiveInputBox>
      )}
      <InputBox
        type='file'
        name='file'
        id='file'
        accept='.png, .jpeg, .jpg, .gif'
        onChange={uploadFile}
        ref={inputRef}
      />
      <Instruction text='*졸업증명서, 재학증면서만 가능 (최대 1MB 이내)' />
      <Instruction text='*JPG / JPEG / PNG / GIF (이미지만)' />
      {valid === false && (
        <Negative text='파일 형식 또는 크기를 확인해주세요' />
      )}
    </InputSection>
  );
}

export default Document;
