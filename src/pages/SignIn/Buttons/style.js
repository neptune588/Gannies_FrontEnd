import { instructionTextStyle } from '@/styles/commonStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  margin-top: 21px;
`;

export const LoginOptionsWrapper = styled.div`
  width: 400px;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const AutoLoginButton = styled.button`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

export const Description = styled.span`
  color: ${props => props.theme.colors.gray[70]};  
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.medium};  
`

export const FindButton = styled(Description)`
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Instruction = styled.span`
  ${instructionTextStyle};
  margin-top: 17px;
`;

export const InstructionPrimary = styled(Link)`
  ${instructionTextStyle};
  color: ${props => props.theme.colors.primary};
`;

export const ButtonWrapper = styled.div`
  margin-top: 47px;
`;