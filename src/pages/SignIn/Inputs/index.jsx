import { useState } from 'react';

import Negative from '@/components/Instruction/Negative';

import {
  InputBox,
  Wrapper,
  EyeIcon,
  EyeSlashIcon,
} from '@/pages/SignIn/Inputs/style';

function Inputs({ email, setEmail, password, setPassword, loginError }) {
  const [showPassword, setShowPassword] = useState(false);

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
      <form>
        <InputBox
          type='text'
          placeholder='이메일'
          value={email}
          onChange={handleEmail}
        />
      </form>
      <form>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호'
          value={password}
          onChange={handlePassword}
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </form>
      <div>
        {loginError && (
          <Negative text='이메일과 비밀번호를 정확히 입력해 주세요' />
        )}
      </div>
    </Wrapper>
  );
}

export default Inputs;
