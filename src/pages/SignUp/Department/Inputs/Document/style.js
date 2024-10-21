import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { small_400 } from '@/styles/commonStyle/localTextStyle';

export const InactiveInputBox = styled.div`
  ${defaultBorderBoxStyle};
  ${placeholderTextStyle};
  width: 448px;
  height: 48px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  > span {
    margin-right: 13px;
  }
`;

export const ActiveInputBox = styled.div`
  ${defaultBorderBoxStyle};
  ${small_400}
  color: ${(props) => props.theme.colors.primary};
  width: 448px;
  height: 48px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  padding-left: 21px;
  padding-right: 14px;

  > div {
    margin-left: 9px;
    margin-right: 9px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: normal;
  }
`;

export const InputBox = styled.input`
  display: none;
`;
