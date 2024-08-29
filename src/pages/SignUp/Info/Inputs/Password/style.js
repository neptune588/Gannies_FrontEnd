import Input from '@/components/Input';
import styled, { css } from 'styled-components';

import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';


export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 456px;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const InputBox = styled(Input)`
  padding-left: 16px;
  margin-right: 16px;
  width: 406px;
  height: 40px;
  border-radius: 4px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;

export const IconStyle = css`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;  
`;

export const EyeIcon = styled(Eye)`
  ${IconStyle};
`;

export const EyeSlashIcon = styled(EyeSlash)`
  ${IconStyle};  
`;
