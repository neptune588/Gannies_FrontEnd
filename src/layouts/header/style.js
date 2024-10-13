import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';
import { InputBox } from '@/components/Input/style';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 111px;
  width: 1128px;
  ${medium_400}

  > span {
    cursor: default;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const SearchBox = styled.div`
  width: 482px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.colors.gray[40]};
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
  margin-left: 162px;
  > img {
    width: 24px;
    height: 24px;
  }
`;

export const Logo = styled.div`
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
  padding: 10px 8px;
  margin-left: auto;
  margin-right: 20px;
`;

export const SignUpButton = styled(Link)`
  ${primaryColorBoxStyle};
  cursor: pointer;
  padding: 10px 8px;
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;

export const Input = styled(InputBox)`
  width: 398px;
  height: 32px;
  margin-left: 15px;
`;

export const LogoutButton = styled(Link)`
  ${medium_400}
  cursor: pointer;
  padding: 12px 5px;
  margin-left: auto;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.primary};
`;

export const MypageButton = styled(Link)`
  ${medium_400}
  cursor: pointer;
  padding: 12px 5px;
  margin-left: 10px;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.primary};
`;
