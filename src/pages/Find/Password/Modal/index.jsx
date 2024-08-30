import {
  Image,
  ModalBox
} from '@/pages/Find/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';
import { LeftButton } from '@/pages/SignUp/Success/style';

function Modal({openModal}) {

  return (
    <ModalContainer>
      <ModalBox>
        <Image src={warn} alt="warn"/>
        <h4>인증 정보 불일치 또는 불가</h4>
        <h6>일치하는 회원 정보를 찾을 수 없습니다.</h6>
        <LeftButton onClick={openModal}>확인</LeftButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
