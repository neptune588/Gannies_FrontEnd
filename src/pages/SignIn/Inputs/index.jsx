import { useEffect, useRef, useState } from 'react';

import Negative from '@/components/Instruction/Negative';

import {
  InputBox,
  Wrapper,
  EyeIcon,
  EyeSlashIcon,
  InputWrapper,
} from '@/pages/SignIn/Inputs/style';
import { useInputBorder } from '@/hooks/useInputBorder';
import { userSignIn } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '@/store/auth';
import { getSocket } from '@/utils/socket';
import { setModal } from '@/store/modalsControl';
import { useSocket } from '@/hooks/useSocket';
function Inputs({
  email,
  setEmail,
  password,
  setPassword,
  loginError,
  setLoginError,
  text,
  setText,
  setIsLoading,
  autoLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { isFocused: isFocusedEmail, handleIsFocused: handleIsFocusedEmail } =
    useInputBorder(undefined);
  const {
    isFocused: isFocusedPassword,
    handleIsFocused: handleIsFocusedPassword,
  } = useInputBorder(undefined);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  let loadingTimer;
  const { connectSocket, handleSessionExpiryWarning } = useSocket();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loadingTimeout = () => {
    loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        setText('이메일을 입력해주세요.');
        setLoginError(true);
        return;
      } else if (!password) {
        setText('비밀번호를 입력해주세요.');
        setLoginError(true);
        return;
      }

      loadingTimeout();
      const response = await userSignIn(
        { email: email, password: password },
        autoLogin ? { params: { autoLogin } } : {}
      );
      const newSocket = await connectSocket(3);

      newSocket.on('sessionExpiryWarning', handleSessionExpiryWarning);
      newSocket.on('notification', (message) =>
        console.log('서버로부터 받은 알림:', message)
      );

      const {
        isSuspended,
        isTempPasswordSignIn,
        userId,
        nickname,
        rejected,
        membershipStatus,
        rejectedReason,
        suspensionDuration,
        suspensionEndDate,
        suspensionReason,
      } = response.data.user;
      dispatch(
        setLogin({
          nickname,
          userId,
        })
      );
      setModal(
        isSuspended,
        isTempPasswordSignIn,
        rejected,
        membershipStatus,
        rejectedReason,
        suspensionDuration,
        suspensionEndDate,
        suspensionReason
      );
      clearTimeout(loadingTimer);
      navigate('/');
    } catch (error) {
      clearTimeout(loadingTimer);
      setIsLoading(false);
      setLoginError(true);

      if (!error.response) {
        alert('서버에 연결할 수 없습니다.');
      } else if (error.response.status === 400) {
        setText('이메일 또는 비밀번호를 다시 확인해주세요.');
      } else {
        alert('로그인 요청 중 에러가 발생하였습니다.');
      }

      const socket = getSocket();
      if (socket) {
        socket.disconnect();
      }
    }
  };

  return (
    <Wrapper>
      <InputWrapper $isFocused={isFocusedEmail} onSubmit={handleSubmit}>
        <InputBox
          type='text'
          placeholder='이메일'
          value={email}
          onChange={handleEmail}
          onFocus={() => {
            handleIsFocusedEmail(true);
            setShowAutoComplete(true);
          }}
          onBlur={() => {
            handleIsFocusedEmail(false);
          }}
          ref={emailRef}
          autoComplete={showAutoComplete ? 'email' : 'off'}
          name='email'
          required
        />
      </InputWrapper>
      <InputWrapper $isFocused={isFocusedPassword} onSubmit={handleSubmit}>
        <InputBox
          type={showPassword ? 'text' : 'password'}
          placeholder='비밀번호'
          value={password}
          onChange={handlePassword}
          onFocus={() => handleIsFocusedPassword(true)}
          onBlur={() => {
            handleIsFocusedPassword(false);
          }}
          autoComplete='current-password'
          name='password'
          required
        />
        {showPassword ? (
          <EyeIcon onClick={handleShowPassword} />
        ) : (
          <EyeSlashIcon onClick={handleShowPassword} />
        )}
      </InputWrapper>
      <div>{loginError && <Negative text={text} />}</div>
    </Wrapper>
  );
}

export default Inputs;
