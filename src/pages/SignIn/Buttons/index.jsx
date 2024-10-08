import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NextButton from '@/pages/SignUp/components/NextButton';

import {
  Wrapper,
  FindButton,
  SignUpButton,
} from '@/pages/SignIn/Buttons/style';
import { userSignIn } from '@/api/authApi';
// import { handleModal } from '@/store/modalState';
// import axios from 'axios';

import { setLogin } from '@/store/auth';
import { handleModal } from '@/store/modalState';

function Buttons({ email, password, setLoginError, setIsLoading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [autoLogin, setAutoLogin] = useState(false);

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await userSignIn({ email: email, password: password });
      console.log(response);
      const {
        isSuspended,
        isTempPasswordSignIn,
        userId,
        rejected,
        rejectedReason,
        membershipStatus,
      } = response.data.user;
      dispatch(
        setLogin({
          isSuspended,
          userId,
          rejected,
          membershipStatus,
          rejectedReason,
        })
      );
      dispatch(
        handleModal({ field: 'isTempPassword', value: isTempPasswordSignIn })
      );
      dispatch(handleModal({ field: 'rejected', value: rejected }));
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      setLoginError(true);
    }
  };
  return (
    <>
      <Wrapper>
        <div>
          <button onClick={handleAutoLogin}>
            <input type='checkbox' checked={autoLogin} readOnly />
            <span>자동로그인</span>
          </button>
          <FindButton to='/find/id'>아이디 / 비밀번호 찾기</FindButton>
        </div>
        <NextButton $margin='47px' text='로그인' onClick={handleLogin} />
        <span>
          아직 회원이 아니신가요?&nbsp;&nbsp;
          <SignUpButton to='/sign-up/identity'>회원가입</SignUpButton>
        </span>
      </Wrapper>
    </>
  );
}

export default Buttons;
