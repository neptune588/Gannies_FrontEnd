import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import {
  pageArrowWrapperStyle,
  pageNumberWrapperStyle,
} from '@/styles/commonStyle/wrapper';

const ArrowBox = styled.div`
  ${pageArrowWrapperStyle}
`;

const ArrowButton = styled.div`
  ${defaultBorderBoxStyle}
  ${centerAlignStyle}
  width: 32px;
  height: 32px;
  cursor: pointer;
  user-select: none;
  > img {
    width: 18px;
    height: 18px;
  }
`;

const PageNumberBox = styled.ul`
  ${pageNumberWrapperStyle}
`;

export { ArrowBox, ArrowButton, PageNumberBox };
