import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { xsmall_700, h1_600 } from '@/styles/commonStyle/localTextStyle';

const PrimaryColor = styled.a`
  color: ${({ theme: { colors } }) => {
    return colors.primary;
  }};

  &:hover {
    color: #2d6ab7;
  }
`;

const OptionListBox = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 25px;
  right: 50px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 5px;
  z-index: 10;
`;

const OptionList = styled.li`
  ${centerAlignStyle}
  ${xsmall_700}
  user-select: none;
  cursor: pointer;
  padding: 8px;

  color: ${({ $order, theme: { colors } }) => {
    if ($order === '승인완료') {
      return colors.gray['50'];
    } else {
      return colors.negative;
    }
  }};
  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
  }
  border-radius: 4px;
`;

const OptionListOpenButton = styled.button`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${({ $status, theme: { colors } }) => {
    if ($status === '승인대기') {
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

export { PrimaryColor, OptionListBox, OptionList, OptionListOpenButton };
