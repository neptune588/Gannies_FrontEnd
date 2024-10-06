import styled from 'styled-components';

import { xsmall_500, body } from '@/styles/commonStyle/localTextStyle';
import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';

const CommentInputBox = styled.textarea`
  ${body}
  width: 100%;
  height: 100px;
  padding: 22px 18px;
  margin-bottom: 15px;
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['40'];
    }} !important;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

const DisabledInputBox = styled.div`
  ${body}
  width: 100%;
  height: 100px;
  padding: 22px 18px;
  margin-bottom: 15px;
  cursor: pointer;
  user-select: none;
  border: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['50'];
    }};
  border-radius: 4px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['20'];
  }};
`;

const ButtonDefaultStyle = styled.button`
  ${xsmall_500}
  display: block;
  width: 110px;
  height: 50px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled(ButtonDefaultStyle)`
  ${primaryBorderBoxStyle}
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  margin-right: 10px;
`;

const ConfirmButton = styled(ButtonDefaultStyle)`
  ${primaryColorBoxStyle}
  background-color: ${({ $isDisabled, theme: { colors } }) => {
    return $isDisabled ? colors.gray['20'] : colors.primary;
  }};
  &:hover {
    background-color: ${({ $isDisabled }) => {
      return $isDisabled ? null : '#2d6ab7';
    }};
  }
`;

export {
  CommentInputBox,
  DisabledInputBox,
  ButtonBox,
  CancelButton,
  ConfirmButton,
};
