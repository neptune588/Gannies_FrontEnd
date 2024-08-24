import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle, instructionTextStyle, placeholderTextStyle } from '@/styles/commonStyle';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
`;

export const SectionWrapper = styled.div`
  
`

export const Instruction = styled.span`
  ${instructionTextStyle};
`

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
  padding-right: 16px;
  width: 456px;
  height: 46px;
  border-radius: 4px;

  &::placeholder {
    ${placeholderTextStyle};
  }
`;