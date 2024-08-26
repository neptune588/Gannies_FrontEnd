import {
 CloseIcon,
 Image,
 ModalBox
} from '@/pages/SignUp/Success/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';
import { Button } from '@/pages/SignIn/Buttons/Modal/style';

function Modal({closeModal}) {

  return (
    <ModalContainer>
    <ModalBox>
     <CloseIcon onClick={closeModal} />
        <Image src={warn} alt="warn"/>
        <h4>비밀번호 변경 안내</h4>
        <h6>임시로 발급된 비밀번호로 로그인하셨습니다.</h6>
        <h6>비밀번호 변경으로 이동하여 원하시는 비밀번호로</h6>
        <h6>변경해주세요</h6>
        <Button />
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
