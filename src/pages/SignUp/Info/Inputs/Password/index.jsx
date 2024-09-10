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

function Password({ handleAllow }) {
  const [password, setPassword] = useState('');
  const { handleDataToSend } = useOutletContext();
  const [passwordValid, setPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e) => {
    const password = e.target.value.slice(0, 16);
    setPassword(password);
    handleDataToSend('password', password);

    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$^&*?_])[A-Za-z\d!@#$^&*?_]{8,16}$/;
    const state = regex.test(password) && password.length >= 8;

    setPasswordValid(state);
    handleAllow(2, state);
  };

  return (
    <InputSection $margin='37px' title='비밀번호*'>
      <InputWrapper>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={handlePassword}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      {password.length > 0 && passwordValid ? (
        <Positive text='사용가능한 비밀번호입니다' />
      ) : password.length > 0 ? (
        <>
          <Instruction text='*최소 8자에서 16자의 비밀번호를 입력해주세요' />
          <Instruction text='*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함해주세요' />
          <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
          <Negative text='비밀번호를 조건에 맞게 다시 입력해주세요' />
        </>
      ) : (
        <>
          <Instruction text='*최소 8자에서 16자의 비밀번호를 입력해주세요' />
          <Instruction text='*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함해주세요' />
          <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
        </>
      )}
    </InputSection>
  );
}

export default Password;
