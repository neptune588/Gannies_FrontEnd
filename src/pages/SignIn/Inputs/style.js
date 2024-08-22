import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle } from '@/styles/commonStyle';
import Eye from '@/components/Icons/Eye';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
	margin-top: 35px;
`;

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 400px;
  height: 44px;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-top: 18px;
  }
`;

export const InputBox = styled(Input)`
  margin-left: 16px;
  margin-right: 42px;
  width: 344px;
  height: 40px;
  &:last-of-type {
    margin-right: 12px;
  }

  &:placeholder {
    font-size: 24px;
    font-weight: ${props => props.theme.typo.weight.regular};
    color: #9B9B9B;
  }
`;

export const Icon = styled(Eye)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;  
`;