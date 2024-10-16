import styled from 'styled-components';

import { h1_600, xsmall_700 } from '@/styles/commonStyle/localTextStyle';
import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

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

const DummyClickBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 146px);
  height: 100%;
  cursor: pointer;
`;

const OptionListBox = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 25px;
  right: 75px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 0 9.5px;
  z-index: 10;
`;

const OptionList = styled.li`
  ${centerAlignStyle}
  ${xsmall_700}
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
    return colors.gray['50'];
  }};
  user-select: none;
  cursor: pointer;
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

const OptionListOpenButton = styled.button`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${({ $status, theme: { colors } }) => {
    if ($status === 'pending') {
      return colors.gray['90'];
    } else if ($status === 'completed') {
      return colors.gray['50'];
    } else {
      return colors.negative;
    }
  }};

  > img {
    width: 18px;
    height: 18px;
    rotate: ${({ $modalState }) => {
      return $modalState ? '180deg' : '0deg';
    }};
    margin-left: 5px;
  }
`;

export {
  TitleCategory,
  DummyClickBox,
  OptionListBox,
  OptionList,
  OptionListOpenButton,
};
