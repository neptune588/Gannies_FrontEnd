import {
  ActiveInputBox,
  InactiveInputBox,
  InputBox
} from '@/pages/SignUp/Department/Inputs/Document/style';

import { useState } from 'react';

import Upload from '@/components/Icons/Upload';
import InputSection from '@/pages/SignUp/components/InputSection';
import Instruction from '@/components/Instruction';
import Clip from '@/components/Icons/Clip';
import Close from '@/components/Icons/Close';

function Document() {

  const [fileName, setFileName] = useState('');

  const ChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  
  const DeleteFile = () => {
    setFileName('');
  };
  
  return (
    <InputSection $margin="37px" title="인증서류 업로드*">
      <label htmlFor="file">
        {
          fileName ?
            <ActiveInputBox>
              <Clip />
              <div>{fileName}</div>
              <Close onClick={DeleteFile} />
            </ActiveInputBox>
            :
            <InactiveInputBox>
              <span>파일업로드하기</span>
              <Upload />
            </InactiveInputBox>
        }
        <InputBox type="file" name="file" id="file" onChange={ChangeFile} />
      </label>
      <Instruction text="*졸업증명서, 재학증면서만 가능 (최대 1MB 이내)" />
      <Instruction text="*JPG / JPEG / PNG / GIF (이미지만)"/>
    </InputSection>
  );
}

export default Document;