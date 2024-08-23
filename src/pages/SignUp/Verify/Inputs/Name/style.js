import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle } from '@/styles/commonStyle';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  margin-top: 48px;
`;

export const SectionWrapper = styled.div`
  margin-top: 32px;
`

export const Info = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  color: #8D8D8D;
`

export const Must = styled(Info)`
  position: absolute;
  margin-left: 392px;
  margin-top: 5px;
`;

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

  &:placeholder {
    font-size: 24px;
    font-weight: ${props => props.theme.typo.weight.regular};
    color: #9B9B9B;
  }
`;