import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  small_600,
  h4_600
} from '@/styles/commonStyle/localTextStyle';
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
    ${h4_600}
  }
`;

export const UpperTitle = styled.span`
  color: ${(props) => props.theme.colors.gray[90]};
  ${h4_600}
`;

export const ShowMoreButton = styled(Link)`
  height: 28px;
  color: ${(props) => props.theme.colors.gray[60]};
  ${small_600}
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