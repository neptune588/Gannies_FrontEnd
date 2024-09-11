import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NextButton from '@/pages/SignUp/components/NextButton';

import {
  Wrapper,
  FindButton,
  SignUpButton,
} from '@/pages/SignIn/Buttons/style';
// import axios from 'axios';

function Buttons({ email, password, setLoginError }) {
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const login = async () => {
    try {
      // const response = await axios.post('/auth/sign-in', { email, password });
      if (email === 'abc' && password === 'abc') {
        navigate('/');
      } else {
        setLoginError(true);
      }
    } catch (error) {
      // setLoginError(true);
    }
  };
  return (
    <Wrapper>
      <div>
        <button onClick={handleAutoLogin}>
          <input type='checkbox' checked={autoLogin} readOnly />
          <span>자동로그인</span>
        </button>
        <FindButton to='/find/id'>아이디 / 비밀번호 찾기</FindButton>
      </div>
      <NextButton $margin='47px' text='로그인' onClick={login} />
      <span>
        아직 회원이 아니신가요?&nbsp;&nbsp;
        <SignUpButton to='/sign-up/identity'>회원가입</SignUpButton>
      </span>
    </Wrapper>
  );
}

export default Buttons;
