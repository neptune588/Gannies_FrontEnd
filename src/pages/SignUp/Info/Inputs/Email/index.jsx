import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { checkEmailDuplicate } from '@/api/authApi';
import { useInputBorder } from '@/hooks/useInputBorder';

function Email({ handleAllow }) {
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

  useEffect(() => {
    const fetchData = async () => {
      if (isValid) {
        try {
          const response = await checkEmailDuplicate(email);
          if (response.data.statusCode === 400) {
            setInstructionIndex(3);
          } else {
            handleAllow(1, isValid ? true : false);
          }
        } catch (error) {
          console.error('Error checking email duplicate:', error);
        }
      }
    };

    handleInstruction();
    fetchData();
  }, [isValid]);

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
        $isValid={isValid}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBlur(email);
          handleInstruction();
          if (!email) {
            handleIsValid(false);
          }
        }}
      />
      {isValid ? (
        <Positive text={instruction[0]} />
      ) : isValid === false ? (
        <Negative text={instruction[instructionIndex]} />
      ) : null}
    </InputSection>
  );
}

export default Email;
