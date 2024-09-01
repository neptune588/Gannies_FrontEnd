import styled from 'styled-components';

import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { Link } from 'react-router-dom';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  width: 434px;
  justify-content: center;
`;

export const LeftButton = styled(Link)`
  ${primaryBorderBoxStyle};
  ${centerAlignStyle};
  ${medium_400}
  width: 205px;
  height: 48px;
  margin-right: 24px;
`;

export const RightButton = styled(Link)`
  ${primaryColorBoxStyle};
  ${centerAlignStyle};
  ${medium_400}
  width: 205px;
  height: 48px;  
`;

export const MiddleButton = styled(Link)`
  ${primaryColorBoxStyle};
  ${centerAlignStyle};
  ${medium_400}
  width: 360px;
  height: 48px;  
`;
