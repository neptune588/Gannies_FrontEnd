import {
  inactiveColorBoxStyle,
  primaryColorBoxStyle
} from "@/styles/commonStyle";

import { Link } from "react-router-dom";

import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.$margin || '0px'};
`;

export const ActiveButton = styled(Link)`
 	${primaryColorBoxStyle};
  width: 360px;
  height: 48px;
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.regular};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InactiveButton = styled.button`
  ${inactiveColorBoxStyle};
`;

