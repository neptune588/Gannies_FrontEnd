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
import { inputBorderStyle } from '@/styles/commonStyle/input';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox = styled(Input)`
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  width: 335px;
  height: 40px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;

export const SectionWrapper = styled.div`
  margin-top: 37px;
`;
export const Info = styled.span`
  color: #9b9b9b;
  ${xsmall_500}
`;

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 350px;
  border: ${(props) => inputBorderStyle(props)};
`;

export const Button = styled.button`
  width: 96px;
  height: 48px;
  margin-top: 10px;
  ${xsmall_500}
  margin-left: 10px;
`;

export const ActiveButton = styled(Button)`
  ${primaryColorBoxStyle};
`;

export const DisabledButton = styled(Button)`
  ${disabledColorBoxStyle};
  cursor: default;
`;

export const InactiveButton = styled(Button)`
  ${inactiveColorBoxStyle};
  cursor: default;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;
`;
