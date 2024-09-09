import styled from 'styled-components';

import {
  inactiveColorBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.$margin || '0px'};
  height: 48px;
`;

export const ActiveButton = styled(Link)`
  ${primaryColorBoxStyle};
  height: 48px;
  ${medium_400}
  width: 360px;
  ${centerAlignStyle};
`;

export const InactiveButton = styled(ActiveButton)`
  ${inactiveColorBoxStyle};
`;
