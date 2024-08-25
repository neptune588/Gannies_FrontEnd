import {
  authDefaultTextStyle,
  authEmailColorBoxStyle,
  primaryBorderBoxStyle,
  primaryColorBoxStyle
} from "@/styles/commonStyle";

import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;

  > h3 {
    font-weight: ${props => props.theme.typo.weight.semiBold};
    font-size: ${props => props.theme.typo.size.h3};
    color: ${props => props.theme.colors.gray[100]};
    margin-top: 31px;  
  }

  > p {
    ${authDefaultTextStyle};

    &:first-of-type {
      margin-top: 31px;
    }

    &:last-of-type {
      margin-top: 8px;
    }    
  }

  > span {
    font-size: ${props => props.theme.typo.size.sm};
    font-weight: ${props => props.theme.typo.weight.regular};
    color: ${props => props.theme.colors.gray[60]};
    margin-top: 38px;  
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 60px;
`;

export const EmailBox = styled.div`
  ${authEmailColorBoxStyle};
  margin-top: 38px;
`;

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