import styled from 'styled-components';

import { ellipsisStyle, modalCloseButtonStyle } from '@/styles/commonStyle/etc';
import {
  adminPageModalTitleStyle,
  adminPageModalInnerDataTitleStyle,
} from '@/styles/commonStyle/text';
import { adminPageModalInnerDataBoxStyle } from '@/styles/commonStyle/box';

const ModalWrapper = styled.div`
  position: relative;
  width: 745px;
  padding: 55px 55px 75px 55px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 24px;
  z-index: 10;
`;

const ModalTitle = styled.h2`
  ${adminPageModalTitleStyle}
  margin-left: -5px;
  margin-bottom: 45px;
`;

const OnlyExtension = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DataAreaTop = styled(OnlyExtension)`
  margin-bottom: 40px;
  padding-bottom: 60px;
  border-bottom: 2px solid
    ${({ theme: { colors } }) => {
      return colors.gray['40'];
    }};
`;

const DataAreaBottom = styled(OnlyExtension)``;

const DataBox = styled.div`
  flex: 0 0 auto;
  ${ellipsisStyle}
  width: calc((745px - 110px - 20px) / 2);
  margin: 0 20px 25px 0;
  &:nth-child(2n) {
    margin-right: 0;
  }

  > p {
    ${adminPageModalInnerDataTitleStyle}
  }
  > div {
    ${adminPageModalInnerDataBoxStyle}
  }
`;

const TopAreaLastDataBox = styled.div`
  width: 100%;
  > p {
    ${adminPageModalInnerDataTitleStyle}
  }

  > div {
    ${adminPageModalInnerDataBoxStyle}
    overflow: ${({ $activeCategory }) => {
      return $activeCategory === '댓글' && 'auto';
    }};
    height: ${({ $activeCategory }) => {
      return $activeCategory === '댓글' && '140px';
    }};
  }
`;

const BottomAreaLastDataBox = styled.div`
  width: 100%;
  > p {
    ${adminPageModalInnerDataTitleStyle}
  }

  > div {
    ${adminPageModalInnerDataBoxStyle}
  }
`;

const ModalCloseButton = styled.img`
  ${modalCloseButtonStyle}
  width: 24px;
  height: 24px;
  top: 40px;
  right: 40px;
`;

export {
  ModalWrapper,
  ModalTitle,
  DataAreaTop,
  DataAreaBottom,
  DataBox,
  TopAreaLastDataBox,
  BottomAreaLastDataBox,
  ModalCloseButton,
};
