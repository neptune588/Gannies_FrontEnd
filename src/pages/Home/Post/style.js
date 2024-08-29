import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 52px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 6px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${props => props.theme.colors.gray[60]};

  > h3 {
    color: ${props => props.theme.colors.gray[90]};  
    font-size: ${props => props.theme.typo.size.h4};
    font-weight: ${props => props.theme.typo.weight.semiBold};  
  }
`;

export const ShowMoreButton = styled(Link)`
  font-size: ${props => props.theme.typo.size.sm};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  height: 28px;
  color: ${props => props.theme.colors.gray[60]};
  cursor: pointer;
  border: none;
  margin-left: auto;
  display: flex;
  align-items: center; 

  > img {
    height: 24px;
    width: 24px;
    margin-left: 6px;
  }  
`;