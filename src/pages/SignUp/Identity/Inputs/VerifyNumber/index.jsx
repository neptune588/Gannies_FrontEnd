import {
  InputBox,
  InputWrapper,
  InfoWrapper,
  ActiveButton,
  InactiveButton,
  DisabledButton
} from '@/pages/SignUp/Identity/Inputs/VerifyNumber/style';

import Clock from '@/components/Icons/Clock';
import InputSection from '@/pages/SignUp/components/InputSection';
import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';
import { useState } from 'react';

function VerifyNumber({ allow, setAllow, setVisible }) {

  const [verifyNumber, setVerifyNumber] = useState('');
  const [buttonAllow, setButtonAllow] = useState(false);
  const [instructionState, setInstructionState] = useState(undefined);

  const handleVerifyNumber = (e) => {
    setVerifyNumber(e.target.value);
    
    e.target.value ? setButtonAllow(true) : setButtonAllow(false); 
  }
  
  const handleActiveButton = () => {
    if (verifyNumber === '000000') {
      setAllow((prev) => {
          const newAllow = [...prev];
          newAllow[2] = true;
          return newAllow;
        }
      );
      if (setVisible) {
        setVisible((prev) => {
          const newVisible = [...prev];
          newVisible[2] = true;
          return newVisible;
        });
      }
      setInstructionState(true);
    }
    else {
      setInstructionState(false);    
    }
  }

  return (
    <InputSection $margin="37px" title="인증번호*">
      <InfoWrapper>
          <InputWrapper>
            <InputBox 
              type="text" 
              placeholder='인증번호를 입력해주세요' 
              value={verifyNumber} 
              onChange={handleVerifyNumber} 
              disabled={allow[2]} 
            />  
            <Clock time={0} />
        </InputWrapper>
        {
          !buttonAllow ? 
          <InactiveButton>인증확인</InactiveButton> : 
          allow[2] ? 
          <DisabledButton>인증번호 발송</DisabledButton> : 
          <ActiveButton onClick={handleActiveButton}>인증확인</ActiveButton>
        }
      </InfoWrapper>
      {instructionState !== undefined && instructionState === false && <Negative text="인증번호가 일치하지 않습니다" />}
      {instructionState !== undefined && instructionState === true && <Positive text="인증이 완료되었습니다"/>}
    </InputSection>
  );
}

export default VerifyNumber;