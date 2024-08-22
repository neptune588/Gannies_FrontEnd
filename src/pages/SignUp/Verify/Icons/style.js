import styled from 'styled-components';

export const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 360px;
		height: 88px;
		margin-top: 32px;
`;

export const IconsWrapper = styled.div`
		display: flex;
		width: 360px;
		height: 68px;
		align-items: center;
		justify-content: space-between;		
`;

export const Icon = styled.img`
		width: 60px;
		height: 60px;
`;

export const Arrow = styled.img`
		width: 24px;
		height: 24px;
`;


export const FontWrapper = styled.div`
		display: flex;
		width: 348px;
		height: 68px;
		align-items: center;
		justify-content: space-between;		
		margin: auto;
`;

export const Font = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
	 font-weight: ${props => props.theme.typo.weight.semiBold};
  margin-top: 4px;
  color: ${props => props.theme.colors.primary};		
`;

export const FontInactive = styled(Font)`
  color: ${props => props.theme.colors.gray[50]};
`;