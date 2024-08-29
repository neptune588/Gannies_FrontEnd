import {
  CloseIcon,
  Image,
  ModalBox
} from '@/pages/Find/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';

function Modal({openModal}) {

  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={openModal} />
        <Image src={warn} alt="warn"/>
        <h4>인증정보 불일치 또는 불가</h4>
        <h6>일치하는 회원 정보가 없습니다.</h6>
        <h6>입력하신 정보를 확인해주세요.</h6>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
