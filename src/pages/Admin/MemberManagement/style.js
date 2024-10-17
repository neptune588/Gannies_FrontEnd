import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { xsmall_700 } from '@/styles/commonStyle/localTextStyle';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const OptionListBox = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 25px;
  right: 35px;
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
  color: ${({ $status, theme: { colors } }) => {
    if ($status === '해당없음') {
      return colors.gray['50'];
    } else if ($status === '정지') {
      return colors.primary;
    } else {
      return colors.negative;
    }
  }};

  border-radius: 4px;
  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.secondary;
    }};
  }
`;

const OptionListOpenButton = styled.button`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: ${({ $status }) => {
    return $status === '탈퇴' && 'auto';
  }};
  color: ${({ $status, theme: { colors } }) => {
    if ($status === '해당없음') {
      return colors.gray['50'];
    } else if ($status === '정지') {
      return colors.primary;
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

export { SearchBox, OptionListBox, OptionList, OptionListOpenButton };
