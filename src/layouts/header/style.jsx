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

export const LoginButton = styled.button`
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

export const SignUpButton = styled.button`
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