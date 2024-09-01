import styled from 'styled-components';

import { modalCloseAreaStyle } from '@/styles/commonStyle/etc';
import { ellipsisStyle } from '@/styles/commonStyle/etc';
import { h3_600 } from '@/styles/commonStyle/localTextStyle';
import { adminPageModalDataBoxStyle } from '@/styles/commonStyle/box';

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
  ${h3_600}
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};
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
  ${adminPageModalDataBoxStyle}
  ${ellipsisStyle}
  width: calc((745px - 110px - 20px) / 2);
  margin: 0 20px 25px 0;
  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const TopAreaLastDataBox = styled.div`
  width: 100%;
  ${adminPageModalDataBoxStyle}

  > div {
    overflow-y: ${({ $activeCategory }) => {
      return $activeCategory === '댓글' && 'scroll';
    }};
    height: ${({ $activeCategory }) => {
      return $activeCategory === '댓글' && '140px';
    }};
  }
`;

const BottomAreaLastDataBox = styled.div`
  width: 100%;
  ${adminPageModalDataBoxStyle}
`;

const ModalCloseButton = styled.img`
  position: absolute;
  width: 24px;
  heghit: 24px;
  top: 40px;
  right: 40px;
  cursor: pointer;
  user-select: none;
`;

const ModalCloseArea = styled.div`
  ${modalCloseAreaStyle}
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
  ModalCloseArea,
};
