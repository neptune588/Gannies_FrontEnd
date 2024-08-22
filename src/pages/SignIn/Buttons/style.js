import styled from 'styled-components';

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

export const LoginButton = styled.button`
  width: 360px;
  height: 48px;
  background-color: ${props => props.theme.colors.gray[20]};
  color: ${props => props.theme.colors.gray[60]};
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.regular};
  border-radius: 4px;
  margin-top: 35px;
`;