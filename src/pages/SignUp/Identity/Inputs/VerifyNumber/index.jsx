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
import { sendPhoneNumberVerify } from '@/api/authApi';
import { useOutletContext } from 'react-router-dom';
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function VerifyNumber({ allow, handleAllow }) {
  const [verifyNumber, setVerifyNumber] = useState('');
  const [allowButton, setAllowButton] = useState(undefined);
  const timerTime = 600;
  const { time, start, stop, reset } = useTimer(timerTime);
  const instruction = [
    '인증이 완료되었습니다',
    '필수 정보입니다',
    '인증번호가 일치하지 않습니다',
    '최대 인증 시도 횟수(5회)에 도달했습니다. 인증을 처음부터 다시 시도해주세요.',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, setIsFocused } = useInputValid(undefined);
  const { dataToSend } = useOutletContext();

  useEffect(() => {
    if (allow[2]) stop();
    else if (allow[0] && allow[1]) start();
    else reset();
  }, [allow, start, stop, reset]);

  const handleVerifyNumber = async (e) => {
    const verifyNumber = e.target.value;
    setVerifyNumber(verifyNumber);
    setAllowButton(!!verifyNumber);
  };

  const handleActiveButton = async () => {
    try {
      const response = await sendPhoneNumberVerify({
        phoneNumber: dataToSend.phoneNumber,
        code: verifyNumber,
      });
      if (response.status === 200) {
        handleAllow(2, true);
        setInstructionIndex(0);
      }
    } catch (error) {
      if (error.response.data.statusCode === 429) {
        handleAllow(2, false);
        setInstructionIndex(3);
      } else {
        handleAllow(2, false);
        setInstructionIndex(2);
      }
    }
  };

  return (
    <>
      {allow[0] && allow[1] && (
        <InputSection $margin='37px' title='인증번호*'>
          <InfoWrapper>
            <InputWrapper
              $isFocused={isFocused}
              $isValid={allowButton && (allow[2] === undefined || allow[2])}
            >
              <InputBox
                type='text'
                placeholder='인증번호를 입력해주세요'
                value={verifyNumber}
                onChange={handleVerifyNumber}
                disabled={allow[2]}
                onFocus={() => {
                  setIsFocused(true);
                  if (allowButton === undefined) {
                    setAllowButton(false);
                    setInstructionIndex(1);
                  }
                }}
                onBlur={() => {
                  setIsFocused(false);
                  if (!allowButton && !verifyNumber) {
                    setAllowButton(undefined);
                    setInstructionIndex(undefined);
                  }
                }}
                onKeyDown={(e) => {
                  preventEnterKey(e);
                }}
              />
              <Clock time={time} />
            </InputWrapper>
            {!allowButton ? (
              <InactiveButton>인증확인</InactiveButton>
            ) : allow[2] ? (
              <DisabledButton>인증번호 발송</DisabledButton>
            ) : (
              <ActiveButton onClick={handleActiveButton}>인증확인</ActiveButton>
            )}
          </InfoWrapper>
          {(!allowButton || allow[2] === false) && (
            <Negative text={instruction[instructionIndex]} />
          )}
          {allow[2] && <Positive text={instruction[instructionIndex]} />}
        </InputSection>
      )}
    </>
  );
}

export default VerifyNumber;
