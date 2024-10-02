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
import { userDelete } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '@/store/auth';
import { useDispatch } from 'react-redux';

function IsWithdrawal({ setOpenModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWithDrawal = async (e) => {
    e.preventDefault();

    try {
      const response = await userDelete();
      if (response.status === 200) {
        setOpenModal(false);
        dispatch(setLogout());
        navigate('/');
      }
    } catch (error) {
      console.error('An error occurred during withdrawal handling:', error);
    }
  };

  return (
    <ModalContainer>
      <WithdrawModalBox>
        <CloseIcon onClick={() => setOpenModal(false)} />
        <Image src={warn} alt='warn' />
        <h4>정말 탈퇴를 하시겠습니까?</h4>
        <h6>탈퇴 시, 계정은 삭제되며 복구되지 않습니다.</h6>
        <ButtonWrapper>
          <CancelButton
            to='/mypage/profile/change-password'
            onClick={() => setOpenModal(false)}
          >
            취소
          </CancelButton>
          <WithdrawButton
            to='/mypage/profile/change-password'
            onClick={handleWithDrawal}
          >
            탈퇴
          </WithdrawButton>
        </ButtonWrapper>
      </WithdrawModalBox>
    </ModalContainer>
  );
}

export default IsWithdrawal;
