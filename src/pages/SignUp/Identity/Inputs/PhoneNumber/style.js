import styled, { css } from 'styled-components';

import Input from '@/components/Input';

import {
  defaultBorderBoxStyle,
  disabledColorBoxStyle,
  inactiveColorBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';

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
  font-size: ${(props) => props.theme.typo.size.xs};
  font-weight: ${(props) => props.theme.typo.weight.medium};
  margin-left: 11px;
`;
export const ActiveButton = styled.button`
  ${primaryColorBoxStyle};
  ${ButtonStyle};
`;

export const DisabledButton = styled(ActiveButton)`
  ${disabledColorBoxStyle};
`;

export const InactiveButton = styled(ActiveButton)`
  ${inactiveColorBoxStyle};
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;

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
    padding-left: 22px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray[40]};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.typo.size.md};
    cursor: pointer;
    margin-top: 10px;

    &:focus {
      outline: none;
    }  
  }  
`;