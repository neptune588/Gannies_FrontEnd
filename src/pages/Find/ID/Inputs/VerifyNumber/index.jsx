import { useEffect, useState } from 'react';

import Clock from '@/components/Icons/Clock';
import InputSection from '@/pages/SignUp/components/InputSection';
import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import {
  InputBox,
  InputWrapper,
  InfoWrapper,
  ActiveButton,
  InactiveButton,
  DisabledButton,
} from '@/pages/SignUp/Identity/Inputs/VerifyNumber/style';
import { useTimer } from '@/hooks/useTimer';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

function VerifyNumber({ phoneNumber, allow, handleAllow }) {
  const [verifyNumber, setVerifyNumber] = useState('');
  const [buttonAllow, setButtonAllow] = useState(false);
  const [instructionState, setInstructionState] = useState(undefined);
  const timerTime = 180;
  const { time, start, stop, reset } = useTimer(timerTime);

  useEffect(() => {
    if (allow[2]) stop();
    else if (allow[0] && allow[1]) start();
    else reset;
  }, [allow, start, stop, reset]);

  const handleVerifyNumber = (e) => {
    const verifyNumber = e.target.value;
    setVerifyNumber(verifyNumber);
    setButtonAllow(!!verifyNumber);
  };

  const handleActiveButton = async () => {
    try {
      // const response = await axios.post('/auth/phone-verification', { phoneNumber, code: verifyNumber});
      if (verifyNumber === '000000') {
        handleAllow(2, true);
        setInstructionState(true);
        console.log(phoneNumber, verifyNumber);
      } else {
        handleAllow(2, false);
        setInstructionState(false);
      }
    } catch (error) {
      alert('error');
    }
  };

  return (
    <>
      {allow[0] && allow[1] && (
        <InputSection $margin='37px' title='인증번호*'>
          <InfoWrapper>
            <InputWrapper>
              <InputBox
                type='text'
                placeholder='인증번호를 입력해주세요'
                value={verifyNumber}
                onChange={handleVerifyNumber}
                disabled={allow[2]}
              />
              <Clock time={time} />
            </InputWrapper>
            {!buttonAllow ? (
              <InactiveButton>인증확인</InactiveButton>
            ) : allow[2] ? (
              <DisabledButton>인증번호 발송</DisabledButton>
            ) : (
              <ActiveButton onClick={handleActiveButton}>인증확인</ActiveButton>
            )}
          </InfoWrapper>
          {instructionState !== undefined && instructionState === false && (
            <Negative text='인증번호가 일치하지 않습니다' />
          )}
          {instructionState !== undefined && instructionState === true && (
            <Positive text='인증이 완료되었습니다' />
          )}
        </InputSection>
      )}
    </>
  );
}

export default VerifyNumber;
