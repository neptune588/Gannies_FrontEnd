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
import Modal from '@/pages/SignUp/Department/Inputs/Document/Modal';

function Document({ allow, handleAllow, file, setFile }) {
  const inputRef = useRef();
  const fileTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 1048576;
  const [valid, setValid] = useState(undefined);
  const [modalState, setModalState] = useState('');

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (fileTypes.includes(file.type) && file.size <= maxSize) {
        setFile(file);
        setValid(true);
        handleAllow(1, true);
      } else {
        setValid(false);
        handleAllow(1, false);
      }
    }
  };

  const deleteFile = (e) => {
    e.stopPropagation();
    setFile('');
    handleAllow(1, false);
  };

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      {allow[0] && (
        <InputSection $margin='37px' title='인증서류 업로드*'>
          {file.name ? (
            <ActiveInputBox onClick={handleBoxClick}>
              <Clip />
              <div>{file.name}</div>
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
          <Instruction text='*졸업증명서, 재학증면서만 가능 (최대 1MB 이내)' />
          <Instruction text='*JPG / JPEG / PNG / GIF (이미지만)' />
          {valid === false && (
            <Negative text='파일 형식 또는 크기를 확인해주세요' />
          )}
          {file && (
            <button onClick={() => setModalState(true)}>미리보기</button>
          )}
          {file && modalState && (
            <Modal file={file} setModalState={setModalState} />
          )}
        </InputSection>
      )}
    </>
  );
}

export default Document;
