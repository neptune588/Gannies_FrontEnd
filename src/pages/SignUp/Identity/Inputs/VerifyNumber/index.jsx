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
import { useInputBorder } from '@/hooks/useInputBorder';
import { sendPhoneNumberVerify } from '@/api/authApi';
import { useOutletContext } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

function VerifyNumber({ allow, handleAllow }) {
  const [verifyNumber, setVerifyNumber] = useState('');
  const [buttonAllow, setButtonAllow] = useState(false);
  const timerTime = 180;
  const { time, start, stop, reset } = useTimer(timerTime);
  const instruction = ['필수 정보입니다', '인증번호가 일치하지 않습니다'];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, handleIsFocused } = useInputBorder(undefined);
  const { dataToSend } = useOutletContext();

  useEffect(() => {
    if (allow[2]) stop();
    else if (allow[0] && allow[1]) start();
    else reset();
  }, [allow, start, stop, reset]);

  const handleVerifyNumber = (e) => {
    const verifyNumber = e.target.value;
    setVerifyNumber(verifyNumber);
    setButtonAllow(!!verifyNumber);
  };

  const handleInstruction = () => {
    if (!verifyNumber) {
      setInstructionIndex(0);
    }
  };

  const handleActiveButton = async () => {
    try {
      const response = await sendPhoneNumberVerify({
        phoneNumber: dataToSend.phoneNumber,
        code: '000000',
      });
      console.log(verifyNumber);
      console.log(response);
    } catch (error) {
      alert('error');
    }
    if (verifyNumber === '000000') {
      handleAllow(2, true);
    } else {
      handleAllow(2, false);
      setInstructionIndex(1);
    }
  };

  return (
    <>
      {allow[0] && allow[1] && (
        <InputSection $margin='37px' title='인증번호*'>
          <InfoWrapper>
            <InputWrapper
              $isFocused={isFocused}
              $isValid={instructionIndex === undefined || allow[2]}
            >
              <InputBox
                type='text'
                placeholder='인증번호를 입력해주세요'
                value={verifyNumber}
                onChange={handleVerifyNumber}
                disabled={allow[2]}
                onFocus={() => handleIsFocused(true)}
                onBlur={() => {
                  handleIsFocused(false);
                  handleInstruction();
                }}
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
          {allow[2] === false && (
            <Negative text={instruction[instructionIndex]} />
          )}
          {allow[2] && <Positive text='인증이 완료되었습니다' />}
        </InputSection>
      )}
    </>
  );
}

export default VerifyNumber;
