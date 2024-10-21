import { useState } from 'react';

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
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function Password({ allow, handleAllow }) {
  const [password, setPassword] = useState('');
  const { handleDataToSend } = useOutletContext();
  const [showPassword, setShowPassword] = useState(false);
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$^&*?_])[A-Za-z\d!@#$^&*?_]{8,16}$/;
  const validate = (password) => regex.test(password);
  const instruction = [
    '사용 가능한 비밀번호입니다',
    '필수 정보입니다',
    '유효하지 않은 비밀번호 형식입니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, focusIfEmpty, blurIfEmpty, setIsFocused, checkIsValid } =
    useInputValid(undefined, validate);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = async (e) => {
    const password = e.target.value;
    setPassword(password);
    handleDataToSend('password', password);
    const allow = await checkIsValid(password);
    setInstructionIndex(allow);

    handleAllow(2, allow === 0 ? true : false);
  };

  return (
    <InputSection $margin='37px' title='비밀번호*'>
      <InputWrapper $isFocused={isFocused} $isValid={allow[2]}>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={handlePassword}
          onFocus={() => {
            setIsFocused(true);
            if (allow[2] === undefined) {
              const instructionIndex = focusIfEmpty(2, handleAllow);
              setInstructionIndex(instructionIndex);
            }
          }}
          onBlur={() => {
            setIsFocused(false);
            if (!allow[2] && !password) {
              const instructionIndex = blurIfEmpty(2, handleAllow);
              setInstructionIndex(instructionIndex);
            }
          }}
          onKeyDown={(e) => {
            preventEnterKey(e);
          }}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      {allow[2] ? (
        <Positive text={instruction[instructionIndex]} />
      ) : (
        <>
          <Instruction text='*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함한 8-16자' />
          <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
          <Negative text={instruction[instructionIndex]} />
        </>
      )}
    </InputSection>
  );
}

export default Password;
