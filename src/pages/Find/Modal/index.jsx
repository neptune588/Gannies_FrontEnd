import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';

import { Image, ModalBox } from '@/pages/Find/Modal/style';
import { LeftButton } from '@/pages/Find/ID/Success/style';

function Modal({ openModal }) {
  return (
    <ModalContainer>
      <ModalBox>
        <Image src={warn} alt='warn' />
        <h4>인증 정보 불일치 또는 불가</h4>
        <h6>일치하는 회원 정보를 찾을 수 없습니다.</h6>
        <h6>입력하신 정보를 확인해주세요.</h6>
        <LeftButton onClick={openModal}>확인</LeftButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
