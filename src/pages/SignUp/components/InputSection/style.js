import styled from 'styled-components';
import { instructionTextStyle } from '@/styles/commonStyle';

export const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  margin-top: ${props => props.$margin || '0px'};
`;

export const SectionWrapper = styled.div`
  
`

export const Info = styled.span`
  ${instructionTextStyle};
`