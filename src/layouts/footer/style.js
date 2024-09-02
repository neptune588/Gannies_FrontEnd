import styled from 'styled-components';

import { medium_400, tiny_400 } from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: #efefef;
  height: 208px;
  width: 1128px;
  margin-top: 58px;
`;

export const ButtonWrapper = styled.div`
  width: 1078px;
  height: 84px;
  border-bottom: 1px solid black;

  > button {
    margin-top: 46px;
    ${medium_400}
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid #d5d5d5;
    color: black;

    &:last-of-type {
      border-right: none;
    }

    &:focus {
      outline: none;
    }  
  }
`;


export const DetailsWrapper = styled.div`
  width: 1078px;
  margin-top: 34px;
  margin-bottom: 19px;
  ${tiny_400}

  > span {
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid black;
    color: black;

    &:last-of-type {
      border-right: none;
    }  

    > span {
      text-decoration: underline;
    }
  }

  > div {
    margin-top: 14px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;