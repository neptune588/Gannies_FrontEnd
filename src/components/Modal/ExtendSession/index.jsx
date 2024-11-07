import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';

import {
  CloseIcon,
  Image,
  CancelButton,
  WithdrawButton,
  ButtonWrapper,
  WithdrawModalBox,
} from '@/components/Modal/style';
import { getSessionStatus, userSignOut } from '@/api/authApi';
import { useTimer } from '@/hooks/useTimer';
import { timeToString } from '@/utils/timeToString';
import { useEffect } from 'react';
import { useSocket } from '@/hooks/useSocket';
import useLoginCheck from '@/hooks/useLoginCheck';

function ExtendSession() {
  const { time, start, reset } = useTimer(30 * 60);
  const { handleSessionExtend } = useSocket();
  const { logout } = useLoginCheck();

  useEffect(() => {
    start();

    return () => reset();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const resSessionStatus = await getSessionStatus();
      const { expires } = resSessionStatus.data;
      if (expires) {
        logout();
        return;
      }
      const response = await userSignOut();
      if (response.status === 200) {
        logout();
      } else {
        alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('로그아웃 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <ModalContainer>
      <WithdrawModalBox>
        <CloseIcon onClick={handleLogout} />
        <Image src={warn} alt='warn' />
        <h4>세션을 연장하시겠습니까?</h4>
        <h5>남은 시간: {timeToString(time)}</h5>
        <ButtonWrapper>
          <CancelButton onClick={handleLogout}>취소</CancelButton>
          <WithdrawButton onClick={handleSessionExtend}>연장</WithdrawButton>
        </ButtonWrapper>
      </WithdrawModalBox>
    </ModalContainer>
  );
}

export default ExtendSession;
