import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';

import {
  CloseIcon,
  Image,
  ModifyPasswordButton,
  ModalBox,
} from '@/components/Modal/style';
import { useDispatch } from 'react-redux';
import { handleModal, initialState } from '@/store/modalState';

function IsTempPassword() {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(
      handleModal({
        field: 'isTempPassword',
        value: initialState.isTempPassword,
      })
    );
  };

  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={closeModal} />
        <Image src={warn} alt='warn' />
        <h4>비밀번호 변경 안내</h4>
        <h6>임시로 발급된 비밀번호로 로그인하셨습니다.</h6>
        <h6>마이 페이지로 이동하여 비밀번호를 변경해주세요.</h6>
        <ModifyPasswordButton
          to='/mypage/profile/change-password'
          onClick={closeModal}
        >
          비밀번호 변경하기
        </ModifyPasswordButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default IsTempPassword;
