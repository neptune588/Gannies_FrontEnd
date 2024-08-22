import styled from 'styled-components';

export const Wrapper = styled.div`
		display: flex;
		align-items: center;
  flex-direction: column;
		margin-top: 53px;
`;

export const Font = styled.span`
  font-size: 28px;
	 font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 14px;
`;

export const Description = styled.span`
	 font-size: ${props => props.theme.typo.size.xs};
	 font-weight: ${props => props.theme.typo.weight.medium};
  color: ${props => props.theme.colors.gray[60]};
`