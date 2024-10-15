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
import { handleModal } from '@/store/modalState';
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

  useEffect(() => {
    emailRef.current && emailRef.current.focus();
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

      setIsLoading(true);
      const response = await userSignIn({ email: email, password: password });
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
      dispatch(
        handleModal({
          field: 'isApproval',
          value: { status: membershipStatus === 'email_verified' },
        })
      );
      dispatch(
        handleModal({
          field: 'isTempPassword',
          value: { status: isTempPasswordSignIn },
        })
      );
      dispatch(
        handleModal({
          field: 'isSuspended',
          value: {
            status: isSuspended,
            duration: suspensionDuration,
            endDate: suspensionEndDate,
            reason: suspensionReason,
          },
        })
      );
      dispatch(
        handleModal({
          field: 'rejected',
          value: { status: rejected, reason: rejectedReason },
        })
      );
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      setLoginError(true);
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
          onFocus={() => handleIsFocusedEmail(true)}
          onBlur={() => {
            handleIsFocusedEmail(false);
          }}
          ref={emailRef}
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
