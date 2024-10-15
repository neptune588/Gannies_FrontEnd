import { useEffect, useState } from 'react';

import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';
import InputSection from '@/pages/SignUp/components/InputSection';
import Negative from '@/components/Instruction/Negative';

import {
  InputBox,
  InputWrapper,
  EyeIcon,
  EyeSlashIcon,
} from '@/pages/SignUp/Info/Inputs/Password/style';
import { useOutletContext } from 'react-router-dom';
import { useInputBorder } from '@/hooks/useInputBorder';

function Password({ handleAllow }) {
  const [password, setPassword] = useState('');
  const { handleDataToSend } = useOutletContext();
  const [showPassword, setShowPassword] = useState(false);
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$^&*?_])[A-Za-z\d!@#$^&*?_]{8,16}$/;
  const validate = (password) => regex.test(password) && password.length >= 8;
  const instruction = [
    '사용 가능한 비밀번호입니다',
    '필수 정보입니다',
    '유효하지 않은 비밀번호 형식입니다',
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
    handleInstruction();
    handleAllow(2, isValid ? true : false);
  }, [isValid]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e) => {
    const password = e.target.value.slice(0, 16);
    setPassword(password);
    handleDataToSend('password', password);
  };

  const handleInstruction = () => {
    if (!password) {
      setInstructionIndex(1);
    } else {
      setInstructionIndex(2);
    }
  };

  return (
    <InputSection $margin='37px' title='비밀번호*'>
      <InputWrapper $isFocused={isFocused} $isValid={isValid}>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={handlePassword}
          onFocus={() => handleIsFocused(true)}
          onBlur={() => {
            handleIsFocused(false);
            handleInputBlur(password);
            handleInstruction();
            if (!password) {
              handleIsValid(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      {isValid ? (
        <Positive text={instruction[0]} />
      ) : (
        <>
          <Instruction text='*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함한 8-16자' />
          <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
          {isValid === false && (
            <Negative text={instruction[instructionIndex]} />
          )}
        </>
      )}
    </InputSection>
  );
}

export default Password;
