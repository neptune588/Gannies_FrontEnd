import styled from 'styled-components';

import { authDefaultTextStyle } from '@/styles/commonStyle/text';
import {
  authEmailColorBoxStyle,
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';

import { Link } from 'react-router-dom';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

import { small_400, h3_600, medium_400 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > h3 {
    color: ${(props) => props.theme.colors.gray[100]};
    ${h3_600}
    margin-top: 31px;
  }

  > p {
    ${authDefaultTextStyle};

    &:first-of-type {
      margin-top: 31px;
    }

    &:last-of-type {
      margin-top: 8px;
    }
  }

  > span {
    color: ${(props) => props.theme.colors.gray[60]};
    ${small_400}
    margin-top: 38px;
  }

  > img {
    width: 100px;
    height: 100px;
    margin-top: 60px;  
  }
`;

export const EmailBox = styled.div`
  ${authEmailColorBoxStyle};
  margin-top: 38px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  width: 434px;
  justify-content: space-between;
  ${medium_400}
`;

export const LeftButton = styled(Link)`
  ${primaryBorderBoxStyle};
  ${centerAlignStyle};
  width: 205px;
  height: 48px;
`;

export const RightButton = styled.button`
  ${primaryColorBoxStyle};
  width: 205px;
  height: 48px;  
`;
