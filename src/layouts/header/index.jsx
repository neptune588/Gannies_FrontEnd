import {
  Wrapper,
  Logo,
  LoginButton,
  SignUpButton,
} from '@/layouts/header/style';
import logo from '@/assets/images/logo.png';

function Header() {
  return (
    <Wrapper>
      <Logo src={logo}></Logo>
      <LoginButton>로그인</LoginButton>
      <SignUpButton>회원가입</SignUpButton>
    </Wrapper>
  );
}

export default Header;
