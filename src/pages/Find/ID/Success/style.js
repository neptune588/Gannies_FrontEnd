import styled from 'styled-components';

import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { Link } from 'react-router-dom';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  width: 434px;
  justify-content: center;
`;

export const LeftButton = styled(Link)`
  ${primaryBorderBoxStyle};
  ${centerAlignStyle};
  font-size: ${(props) => props.theme.typo.size.md};
  width: 205px;
  height: 48px;
  margin-right: 24px;
`;

export const RightButton = styled(Link)`
  ${primaryColorBoxStyle};
  ${centerAlignStyle};
  font-size: ${(props) => props.theme.typo.size.md};
  width: 205px;
  height: 48px;  
`;

export const MiddleButton = styled(Link)`
  ${primaryColorBoxStyle};
  ${centerAlignStyle};
  font-size: ${(props) => props.theme.typo.size.md};
  width: 360px;
  height: 48px;  
`;
