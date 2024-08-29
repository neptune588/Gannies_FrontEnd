import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { instructionTextStyle } from '@/styles/commonStyle/text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 1128px;  
  margin-top: 21px;

  > div {
    width: 400px;
    height: 20px;
    display: flex;
    align-items: center;

    > span {
      ${instructionTextStyle};
    }

    > button {
      display: flex;
      align-items: center;

      > input {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        cursor: pointer;  
      }
      > span {
        color: ${(props) => props.theme.colors.gray[70]};
        font-size: ${(props) => props.theme.typo.size.xs};
        font-weight: ${(props) => props.theme.typo.weight.medium};  
      }  
    }  
  }
  > span {
    ${instructionTextStyle};
    margin-top: 36px;  
  }
`;

export const FindButton = styled(Link)`
  cursor: pointer;
  margin-left: auto;
  color: ${(props) => props.theme.colors.gray[70]};
  font-size: ${(props) => props.theme.typo.size.xs};
  font-weight: ${(props) => props.theme.typo.weight.medium};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SignUpButton = styled(Link)`
  ${instructionTextStyle};
  color: ${(props) => props.theme.colors.primary};
`;
