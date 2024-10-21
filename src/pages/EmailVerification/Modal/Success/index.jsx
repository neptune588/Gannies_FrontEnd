import ModalContainer from '@/components/ModalContainer';
import success from '@/assets/images/mail_success.png';

import {
  CloseIcon,
  Image,
  ModalBox,
} from '@/pages/EmailVerification/Modal/style';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={goToHome} />
        <Image src={success} alt='warn' />
        <h4>이메일 인증 성공</h4>
        <h6>이메일 인증이 성공적으로 완료되었습니다</h6>
        <button onClick={goToHome}>확인</button>
      </ModalBox>
    </ModalContainer>
  );
}

export default Success;
