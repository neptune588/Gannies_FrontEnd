import {
  Wrapper,
  Logo,
  LoginButton,
  SignUpButton,
} from '@/layouts/Header/style';

import logo from '@/assets/images/logo.png';

function Header() {

  return (
    <Wrapper>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <LoginButton to="/sign-in">로그인</LoginButton>
      <SignUpButton to="/sign-up/identity">회원가입</SignUpButton>
    </Wrapper>
  );
}

export default Header;
