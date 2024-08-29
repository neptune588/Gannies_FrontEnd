import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 103px;
  width: 1128px;

  > span {
    font-size: ${props => props.theme.typo.size.h3};
    font-weight: ${props => props.theme.typo.weight.semiBold};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 12px;
  }
`;