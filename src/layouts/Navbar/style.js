import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  margin: auto;
  height: 48px;
  width: 1128px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[40]};  
`;

export const Button = styled(Link)`
  margin-top: 13.5px;
  font-size: ${props => props.theme.typo.size.lg};
  font-weight: ${props => props.theme.typo.weight.regular};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin-left: 7px;
  margin-right: 31px;
  color: ${props => props.theme.colors.gray[70]};
  display: flex;
  justify-content: center;
`;