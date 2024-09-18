import { useState } from 'react';

import Negative from '@/components/Instruction/Negative';

import {
  InputBox,
  Wrapper,
  EyeIcon,
  EyeSlashIcon,
  InputWrapper,
} from '@/pages/SignIn/Inputs/style';
import { useInputBorder } from '@/hooks/useInputBorder';

function Inputs({ email, setEmail, password, setPassword, loginError }) {
  const [showPassword, setShowPassword] = useState(false);
  const { isFocused: isFocusedEmail, handleIsFocused: handleIsFocusedEmail } =
    useInputBorder(undefined);
  const {
    isFocused: isFocusedPassword,
    handleIsFocused: handleIsFocusedPassword,
  } = useInputBorder(undefined);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <InputWrapper $isFocused={isFocusedEmail}>
        <InputBox
          type='text'
          placeholder='이메일'
          value={email}
          onChange={handleEmail}
          onFocus={() => handleIsFocusedEmail(true)}
          onBlur={() => {
            handleIsFocusedEmail(false);
          }}
        />
      </InputWrapper>
      <InputWrapper $isFocused={isFocusedPassword}>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호'
          value={password}
          onChange={handlePassword}
          onFocus={() => handleIsFocusedPassword(true)}
          onBlur={() => {
            handleIsFocusedPassword(false);
          }}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      <div>
        {loginError && (
          <Negative text='일치하는 회원 정보가 없습니다. 입력하신 정보를 확인해주세요.' />
        )}
      </div>
    </Wrapper>
  );
}

export default Inputs;
