import styled from "styled-components";

export const StyledWrapper = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;

  > p {
    font-size: ${props => props.theme.typo.size.md};
    font-weight: ${props => props.theme.typo.weight.regular};
    color: ${props => props.theme.colors.gray[100]};  
  }

  > span {
    font-size: ${props => props.theme.typo.size.sm};
    font-weight: ${props => props.theme.typo.weight.regular};
    color: ${props => props.theme.colors.gray[60]};
    margin-top: 23px;  
  }
`;