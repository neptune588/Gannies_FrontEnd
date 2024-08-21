import {
  Wrapper,
  Logo,
  LoginButton,
  SignUpButton,
} from '@/layouts/Header/style';
import logo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const onClickLoginButton = () => {
    navigate('/Login');
  };

  return (
    <Wrapper>
      <Logo src={logo}></Logo>
      <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
      <SignUpButton>회원가입</SignUpButton>
    </Wrapper>
  );
}

export default Header;
