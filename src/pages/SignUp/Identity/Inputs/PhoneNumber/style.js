import styled, { css } from 'styled-components';

import Input from '@/components/Input';

import {
  defaultBorderBoxStyle,
  disabledColorBoxStyle,
  inactiveColorBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { small_400, xsmall_500 } from '@/styles/commonStyle/localTextStyle';

export const InputBox = styled(Input)`
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  width: 205px;
  height: 40px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;

export const ButtonStyle = css`
  width: 112px;
  height: 48px;
  margin-top: 10px;
  ${xsmall_500}
  margin-left: 11px;
`;
export const ActiveButton = styled.button`
  ${primaryColorBoxStyle};
  ${ButtonStyle};
`;

export const DisabledButton = styled(ActiveButton)`
  ${disabledColorBoxStyle};
  cursor: default;
`;

export const InactiveButton = styled(ActiveButton)`
  ${inactiveColorBoxStyle};
  cursor: default;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;
  position: relative;

  > form {
    ${defaultBorderBoxStyle};
    width: 213px;
    height: 48px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 15px;
  }

  > select {
    width: 108px;
    height: 48px;
    padding-left: 17px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray[40]};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
    ${small_400}
    cursor: pointer;
    margin-top: 10px;
    appearance: none;

    &:focus {
      outline: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 47px;
  height: 48px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[40]};
  ${centerAlignStyle};
  position: absolute;
  z-index: -1;
  left: 61px;
  top: 10px;
`;
