import React from 'react';
import { Container, Logo, LogoImage, Menu, MenuItem } from '../styles/Header';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

const LoginButton = styled.button`
  font-size: ${props => props.theme.typo.size.md};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.primary};
  margin-left: auto;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  font-size: ${props => props.theme.typo.size.md};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.primary};

  &:focus {
    outline: none;
  }  
`;

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