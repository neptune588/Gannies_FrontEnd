import styled from 'styled-components';
import Input from '@/components/Input';
import { defaultBorderBoxStyle, inactiveBoxStyle } from '@/styles/commonStyle';
import Eye from '@/components/Icons/Eye';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  margin-top: 43px;
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

export const Icon = styled(Eye)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;  

  &:last-of-type {
    display: black;
    margin-right: auto;
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
export const Time = styled(Info)`
  font-size: ${props => props.theme.typo.size.xs};  
  font-weight: ${props => props.theme.typo.weight.semiBold}; 
  color: #9B9B9B;   
  margin-left: 9px;
  margin-right: 13px;
`;

export const InputWrapperPhoneNumber = styled.form`
  ${defaultBorderBoxStyle};
  width: 205px;
  height: 44px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 15px;
`;

export const InputWrapperVerifyNumber = styled(InputWrapperPhoneNumber)`
  width: 335px;
  margin-left: 0; 
`;

export const InputBoxPhoneNumber = styled(InputBox)`
  width: 203px;
  height: 40px;
`;

export const InputBoxVerifyNumber = styled(InputBox)`
  width: 335px;
  height: 40px;
`;

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

export const Select = styled.select`
  width: 115px;
  height: 44px;
  padding-left: 22px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[40]};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typo.size.md};
  cursor: pointer;
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.gray[80]};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typo.size.md};
`;

export const Completed = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};
  color: ${props => props.theme.colors.primary};  
`