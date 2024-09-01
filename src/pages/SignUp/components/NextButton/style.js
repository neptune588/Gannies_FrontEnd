import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  inactiveColorBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { medium_400 } from '@/styles/commonStyle/localTextStyle';

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.$margin || '0px'};
  height: 48px;
`;

export const ActiveButton = styled(Link)`
  ${primaryColorBoxStyle};
  width: 360px;
  height: 48px;
  ${medium_400}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InactiveButton = styled(ActiveButton)`
  ${inactiveColorBoxStyle};
`;
