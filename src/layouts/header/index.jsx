import React from 'react';
import { Container, Logo, LogoImage, LoginButton, SignUpButton} from './style';
import logo from '../../assets/images/logo.png';

function Header() {

  return (
    <Container>
        <Logo>
            <LogoImage src={logo}></LogoImage>
        </Logo>
        <LoginButton>로그인</LoginButton>
        <SignUpButton>회원가입</SignUpButton>    
   </Container>
  );
}

export default Header;