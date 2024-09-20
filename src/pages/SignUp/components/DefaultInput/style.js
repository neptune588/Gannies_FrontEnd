import styled from 'styled-components';

import Input from '@/components/Input';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';
import { inputBorderStyle } from '@/styles/commonStyle/input';

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 456px;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: ${(props) => inputBorderStyle(props)};
`;

export const InputBox = styled(Input)`
  padding-left: 16px;
  padding-right: 16px;
  width: 448px;
  height: 40px;
  border-radius: 4px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;
