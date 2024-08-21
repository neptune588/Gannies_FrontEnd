import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.span`
  margin: auto;
  font-size: 28px;
	font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.primary};
`;

export const InputWrapper = styled.form`
	width: 400px;
	height: 44px;
	border: 1px solid #C6C6C6;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:focus {
		outline: none;
	}
`;

export const Input = styled.input`
	width: 368px;
	border: none;

	&:focus {
		outline: none;
	}	

	&:placeholder {
		font-weight: ${props => props.theme.typo.weight.regular};
		font-size: ${props => props.theme.typo.size.xs}
	}		
`