import styled from 'styled-components';
import Input from '@/components/Input';

import {
  defaultBorderBoxStyle,
  disabledColorBoxStyle,
  inactiveColorBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { xsmall_500 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 213px;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
`;

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

export const SectionWrapper = styled.div`
  margin-top: 37px;
`;

export const Button = styled.button`
  width: 112px;
  height: 48px;
  margin-top: 10px;
  ${xsmall_500}
  margin-left: 11px;
`;
export const ActiveButton = styled(Button)`
  ${primaryColorBoxStyle};
`;

export const DisabledButton = styled(Button)`
  ${disabledColorBoxStyle};
`;

export const InactiveButton = styled(Button)`
  ${inactiveColorBoxStyle};
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;
`;

export const Select = styled.select`
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
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.gray[80]};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typo.size.md};
`;
