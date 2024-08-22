import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle, inactiveBoxStyle } from '@/styles/commonStyle';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  margin-top: 49px;
`;

export const InputWrapper = styled.form`
  ${defaultBorderBoxStyle};
  width: 456px;
  height: 44px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const InputBox = styled(Input)`
  padding-left: 21px;
  padding-right: 21px;
  width: 456px;
  height: 40px;
  border-radius: 4px;

  &:placeholder {
    font-size: 24px;
    font-weight: ${props => props.theme.typo.weight.regular};
    color: #9B9B9B;
  }
`;

export const SectionWrapper = styled.div`
  height: 72px;
  margin-top: 20px;
`
export const Info = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  color: #8D8D8D;
`

export const Button = styled.button`
  ${inactiveBoxStyle};
  width: 100px;
  height: 44px;
  margin-top: 5px;
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};  
  margin-left: 21px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 456px;

  &:last-of-type {
    margin-bottom: 10px;
  }
`