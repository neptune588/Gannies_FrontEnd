import styled from 'styled-components';

import {
  defaultBorderBoxStyle,
  primaryBorderBoxStyle,
} from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { small_400 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  width: 448px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InactiveButton = styled.button`
  ${defaultBorderBoxStyle};
  ${placeholderTextStyle};
  width: 220px;
  height: 48px;
`;

export const ActiveButton = styled.button`
  ${primaryBorderBoxStyle};
  width: 220px;
  height: 48px;
  ${small_400}
`;
