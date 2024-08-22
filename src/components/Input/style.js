import styled from 'styled-components';

export const InputBox = styled.input` 
  border: none;
  outline: none;
  font-size: ${props => props.theme.typo.size.sm};
  background-color: ${props => props.theme.colors.white};  

  &:placeholder {
    color: ${props => props.theme.colors.gray[50]};
  }
`;