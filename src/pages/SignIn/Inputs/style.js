import styled, { css } from 'styled-components';

import Input from '@/components/Input';
import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { placeholderTextStyle } from '@/styles/commonStyle/text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 1128px;

  > form {
    ${defaultBorderBoxStyle};
    width: 400px;
    height: 44px;
    display: flex;
    align-items: center;
    margin-top: 26px;
  }

  > div {
    width: 400px;
  }
`;

export const InputBox = styled(Input)`
  margin-left: 16px;
  margin-right: 42px;
  width: 344px;
  height: 36px;

  &:last-of-type {
    margin-right: 12px;
  }

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
