import styled from 'styled-components';
import { defaultBorderBoxStyle, placeholderTextStyle, primaryBorderBoxStyle } from '@/styles/commonStyle';

export const ButtonWrapper = styled.div`
  width: 448px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InactiveButton = styled.button`
  ${defaultBorderBoxStyle};
  ${placeholderTextStyle};  
  width: 220px;
  height: 48px;
`;
  
export const ActiveButton = styled.button`
  ${primaryBorderBoxStyle};
  width: 220px;
  height: 48px;
  font-size: ${props => props.theme.typo.size.sm};
`;