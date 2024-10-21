import ModalContainer from '@/components/ModalContainer';
import fail from '@/assets/images/mail_fail.png';

import {
  CloseIcon,
  Image,
  ModalBox,
} from '@/pages/EmailVerification/Modal/style';
import { useNavigate } from 'react-router-dom';

function Fail() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <ModalContainer>
      <ModalBox>
        <CloseIcon onClick={goToHome} />
        <Image src={fail} alt='fail' />
        <h5>이메일 인증 실패</h5>
        <h6>이메일 인증 요청에 실패하였습니다</h6>
        <button onClick={goToHome}>확인</button>
      </ModalBox>
    </ModalContainer>
  );
}

export default Fail;
