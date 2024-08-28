import {
  defaultBorderBoxStyle,
  placeholderTextStyle
} from '@/styles/commonStyle';

import styled from 'styled-components';
import Input from '@/components/Input';
import Eye from '@/components/Icons/Eye';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;

  > form {
    ${defaultBorderBoxStyle};
    width: 400px;
    height: 44px;
    display: flex;
    align-items: center;  
    margin-top: 26px;
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

export const Icon = styled(Eye)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;