import {
  primaryBorderBoxStyle,
  primaryColorBoxStyle
} from "@/styles/commonStyle";

import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  width: 434px;
  justify-content: space-between;
`;

export const LeftButton = styled.button`
  ${primaryBorderBoxStyle};
  width: 205px;
  height: 48px;
`

export const RightButton = styled.button`
  ${primaryColorBoxStyle};
  width: 205px;
  height: 48px;
`