import { primaryBorderBoxStyle, primaryColorBoxStyle } from '@/styles/commonStyle';
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
  ${primaryBorderBoxStyle};
  cursor: pointer;
  font-size: ${props => props.theme.typo.size.md};
  padding: 12px 8px;
  margin-left: auto;
  margin-right: 20px;
`;

export const SignUpButton = styled.button`
  ${primaryColorBoxStyle};
  font-size: ${props => props.theme.typo.size.md};
  cursor: pointer;
  padding: 12px 8px;
  border: 1px solid ${props => props.theme.colors.primary};

  &:focus {
    outline: none;
  }  
`;