import styled from "styled-components";
import { inactiveColorBoxStyle, primaryColorBoxStyle } from "@/styles/commonStyle";

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.$margin || '0px'};
`;

export const ActiveButton = styled.button`
 	${primaryColorBoxStyle};
  width: 360px;
  height: 48px;
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.regular};
`;

export const InactiveButton = styled.button`
  ${inactiveColorBoxStyle};
`;

