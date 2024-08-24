import styled from 'styled-components';

export const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 360px;
		margin-top: 32px;
		height: 160px;
		// padding-bottom: 78px;
`;

export const IconsWrapper = styled.div`
		display: flex;
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
		justify-content: space-between;		
		margin-left: auto;
		margin-right: auto;
`;

export const FontActive = styled.span`
  font-size: ${props => props.theme.typo.size.xs};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.primary};  
  margin-top: 8px;	
`;

export const FontInactive = styled(FontActive)`
  color: ${props => props.theme.colors.gray[50]};
`;