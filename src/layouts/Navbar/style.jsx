import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  margin: auto;
  height: 51.5px;
  width: 1128px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[40]};  
`;

export const Button = styled.button`
  margin-top: 13.5px;
  font-size: ${props => props.theme.typo.size.lg};
  font-weight: ${props => props.theme.typo.weight.regular};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin-left: 4px;
  margin-right: 29px;
  color: ${props => props.theme.colors.gray[70]};
`;