import styled from 'styled-components';

import {
  adminPageHeaderRowStyle,
  adminPageCellStyle,
  adminPageRowStyle,
} from '@/styles/commonStyle/etc';

import { ellipsisStyle, centerAlignStyle } from '@/styles/commonStyle/etc';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { xsmall_700, h1_600 } from '@/styles/commonStyle/localTextStyle';

const TitleCategorySection = styled.section`
  display: flex;
  align-items: center;
  padding: 115px 0 0 25px;
  margin-bottom: 100px;
`;

const TitleCategory = styled.h2`
  margin-right: 65px;
  color: ${({ $currenntActiveCategory, $ownCategory, theme: { colors } }) => {
    return $currenntActiveCategory === $ownCategory
      ? colors.gray['100']
      : colors.gray['50'];
  }};
  ${h1_600}
  cursor: pointer;
  user-select: none;
`;

const ListLength = styled.p`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
  margin: 0 0 35px 20px;
`;

const ListWrapper = styled.div`
  min-height: 830px;
  padding: 45px 42px 12px 42px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 24px;
`;

const DataList = styled.tr`
  ${adminPageRowStyle}
`;

const DataCell = styled.td`
  ${ellipsisStyle}
  ${adminPageCellStyle}
  position: relative;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  ${xsmall_700}

  &:last-child {
    overflow: visible;
  }
`;

const ProcessBox = styled.button`
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
  ${xsmall_700}
`;

const Arrow = styled.img`
  width: 18px;
  height: 18px;
  transition: all 0.1s;
  rotate: ${({ $modalState }) => {
    return $modalState ? '180deg' : '0';
  }};
  margin-left: 5px;
`;

const ProcessModal = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 28px;
  right: 65px;
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
  ${xsmall_700}
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
    border-bottom: none;
  }
`;

export {
  TitleCategorySection,
  TitleCategory,
  ListWrapper,
  DataList,
  DataCell,
  ProcessBox,
  Arrow,
  ProcessModal,
  ProcessList,
  ListLength,
};
