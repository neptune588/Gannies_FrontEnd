import {
 CloseIcon,
 Image,
 ModalBox
} from '@/pages/SignUp/Success/Modal/style';

import ModalContainer from '@/components/ModalContainer';
import warn from '@/assets/images/warn.png';

function Modal({closeModal}) {

  return (
    <ModalContainer>
    <ModalBox>
     <CloseIcon onClick={closeModal} />
        <Image src={warn} alt="warn"/>
        <h4>회원가입 승인 중</h4>
        <h6>현재 회원님께서 신청하신 회원 가입이 진행 중입니다.</h6>
        <h6>승인 절차를 거치는 대로 회원님께 알려드리겠습니다.</h6>
        <p>*승인이 완료될 때까지 다음과 같은 제한이 있음을 양해 부탁드립니다.</p>
        <span>게시글 작성 불가, 게시글 상세 내용 열람 불가</span>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
