import { primaryBorderBoxStyle, primaryColorBoxStyle } from '@/styles/commonStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 111px;
  width: 1128px;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  height: 68px;
  width: 164px;

  img {
    height: 100%;
    width: 100%;
  }  
`;

export const LoginButton = styled(Link)`
  ${primaryBorderBoxStyle};
  cursor: pointer;
  font-size: ${props => props.theme.typo.size.md};
  padding: 12px 8px;
  margin-left: auto;
  margin-right: 20px;
`;

export const SignUpButton = styled(Link)`
  ${primaryColorBoxStyle};
  font-size: ${props => props.theme.typo.size.md};
  cursor: pointer;
  padding: 12px 8px;
  border: 1px solid ${props => props.theme.colors.primary};

  &:focus {
    outline: none;
  }  
`;