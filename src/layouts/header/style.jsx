import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 111px;
  width: 1128px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #007aff;
  cursor: pointer;
`;


export const LogoImage = styled.img`
  height: 68px;
  width: 164px;
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
  margin-right: 20px;
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