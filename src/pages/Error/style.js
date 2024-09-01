import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import {
  h3_700,
  medium_400,
  medium_500,
} from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  > img {
    position: absolute;
    top: 226px;
    width: 600px;
    z-index: -1;
  }

  > h2 {
    margin-top: 343px;
    color: ${(props) => props.theme.colors.gray[100]};
    ${h3_700}
    margin-bottom: 59px;
  }

  > h4 {
    color: ${(props) => props.theme.colors.gray[100]};
    ${medium_500}
    line-height: 24px;
  }
`;

export const Button = styled(Link)`
  ${primaryColorBoxStyle};
  width: 171px;
  height: 48px;
  margin-top: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${medium_400}
`;
