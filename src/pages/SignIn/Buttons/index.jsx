import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NextButton from '@/pages/SignUp/components/NextButton';

import {
  Wrapper,
  FindButton,
  SignUpButton,
} from '@/pages/SignIn/Buttons/style';
import { userSignIn } from '@/api/authApi';

import { setLogin } from '@/store/auth';
import { handleModal } from '@/store/modalState';
import { useSocket } from '@/hooks/useSocket';
import { getSocket } from '@/utils/socket';

function Buttons({
  email,
  password,
  setLoginError,
  setIsLoading,
  setText,
  autoLogin,
  setAutoLogin,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loadingTimer;

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const setModal = (
    isSuspended,
    isTempPasswordSignIn,
    rejected,
    membershipStatus,
    rejectedReason,
    suspensionDuration,
    suspensionEndDate,
    suspensionReason
  ) => {
    dispatch(
      handleModal({
        field: 'isApproval',
        value: { status: membershipStatus === 'email_verified' && !rejected },
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
  };

  const loadingTimeout = () => {
    loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 8);
  };

  const { connectSocket, handleSessionExpiryWarning } = useSocket();

  const handleLogin = async () => {
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
