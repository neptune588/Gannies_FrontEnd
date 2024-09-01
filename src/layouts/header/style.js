import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 111px;
  width: 1128px;
  ${medium_400}  
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
  padding: 12px 8px;
  margin-left: auto;
  margin-right: 20px;
`;

export const SignUpButton = styled(Link)`
  ${primaryColorBoxStyle};
  cursor: pointer;
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;
