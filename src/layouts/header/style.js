import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 111px;
  width: 1128px;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 68px;
  width: 164px;
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