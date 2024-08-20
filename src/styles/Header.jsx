import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  height: 111px;
  cursor: pointer;
  width: 1128px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #007aff;
`;


export const LogoImage = styled.img`
  height: 44px;
  width: 223px;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.div`
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007aff;
  }
`;