import styled from 'styled-components';

export const Wrapper = styled.div`
		display: flex;
		justify-content: center;
		margin-top: 100px;
`;

export const Font = styled.span`
  font-size: 28px;
	 font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.primary};
`;