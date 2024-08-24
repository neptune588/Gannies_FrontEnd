import styled from 'styled-components';
import { defaultBorderBoxStyle, primaryBorderBoxStyle } from '@/styles/commonStyle';

export const ButtonWrapper = styled.div`
  width: 448px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ActiveButton = styled.button`
  ${primaryBorderBoxStyle};
  width: 220px;
  height: 48px;
  font-size: ${props => props.theme.typo.size.sm};
  font-weight: ${props => props.theme.typo.weight.regular};
`
export const InactiveButton = styled(ActiveButton)`
  ${defaultBorderBoxStyle};
  color: ${props => props.theme.colors.gray[40]};
`