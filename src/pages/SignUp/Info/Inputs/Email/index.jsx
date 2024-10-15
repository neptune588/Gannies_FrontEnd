import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { checkEmailDuplicate } from '@/api/authApi';
import { useInputBorder } from '@/hooks/useInputBorder';

function Email({ allow, handleAllow }) {
  const [email, setEmail] = useState('');
  const { handleDataToSend } = useOutletContext();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validate = (email) => regex.test(email);
  const instruction = [
    '사용 가능한 이메일입니다',
    '필수 정보입니다',
    '유효하지 않은 이메일 형식입니다',
    '중복된 이메일입니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(2);
  const {
    isFocused,
    isValid,
    handleIsFocused,
    handleIsValid,
    handleInputBlur,
  } = useInputBorder(undefined, validate);
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const prevEmailRef = useRef(email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isValid && !checkDuplicate) {
          const response = await checkEmailDuplicate({ email });
          if (response.status === 201) {
            setCheckDuplicate(true);
            if (!response.data.available) {
              setInstructionIndex(3);
              handleAllow(1, false);
            } else {
              handleAllow(1, true);
            }
          }
        }
      } catch (error) {
        alert('이메일 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    };
    if (!isValid) handleAllow(1, false);
    fetchData();
  }, [isValid, checkDuplicate]);

  const handleEmail = async (e) => {
    const email = e.target.value;
    setEmail(email);
    handleDataToSend('email', email);
  };

  const handleInstruction = () => {
    if (!email) {
      setInstructionIndex(1);
    } else {
      setInstructionIndex(2);
    }
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
        $isFocused={isFocused}
        $isValid={allow[1] || isValid === undefined}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBlur(email);
          if (email !== prevEmailRef.current) {
            handleInstruction();
            setCheckDuplicate(false);
            prevEmailRef.current = email;
          }
          if (!email) {
            handleInstruction();
            handleIsValid(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      />
      {allow[1] ? (
        <Positive text={instruction[0]} />
      ) : (
        <>
          {isValid !== undefined && (
            <Negative text={instruction[instructionIndex]} />
          )}
        </>
      )}
    </InputSection>
  );
}

export default Email;
