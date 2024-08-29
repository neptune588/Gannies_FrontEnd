import styled from 'styled-components';

import {
  adminPageListHeaderStyle,
  adminPageListStyle,
  adminPageContentStyle,
} from '@/styles/commonStyle/etc';
import { ellipsisStyle } from '@/styles/commonStyle/etc';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

const ListHeader = styled.div`
  ${adminPageListHeaderStyle}
  > p {
    ${adminPageContentStyle}

    &:last-child {
      display: flex;
      align-items: center;
      > img {
        width: 18px
        height: 18px;
        margin-left: 5px;
      }
    }
  }
`;

const ReportList = styled.li`
  ${adminPageListStyle}
  > p {
    ${adminPageContentStyle}
    ${ellipsisStyle}
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.bold;
    }};
  }
`;

const ProcessBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${({ $processingStatus, theme: { colors } }) => {
    if ($processingStatus === '처리 중') {
      return colors.gray['90'];
    } else if ($processingStatus === '처리완료') {
      return colors.gray['50'];
    } else {
      return colors.negative;
    }
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
  > img {
    width: 18px;
    height: 18px;
    transition: all 0.1s;
    rotate: ${({ $modalState }) => {
      return $modalState ? '180deg' : '0';
    }};
    margin-left: 5px;
  }
`;

const ProcessModal = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 25px;
  left: -12px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 0 9.5px;
  z-index: 10;
`;

const ProcessList = styled.li`
  ${centerAlignStyle}
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
    return colors.gray['50'];
  }};

  user-select: none;
  cursor: pointer;
  font-size: ${({ theme: { typo } }) => {
    return typo.size.xs;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.bold;
  }};
  padding: 10px 0;
  &:nth-child(1n) {
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
  }
  &:nth-child(2n) {
    color: ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
  }
  &:nth-child(3n) {
    color: ${({ theme: { colors } }) => {
      return colors.negative;
    }};
  }
`;

export { ListHeader, ReportList, ProcessBox, ProcessModal, ProcessList };
