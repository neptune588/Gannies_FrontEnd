import styled from 'styled-components';

import { InputBox } from '@/components/Input/style';

import { inactiveColorBoxStyle, primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { large_400 } from '@/styles/commonStyle/localTextStyle';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${centerAlignStyle};
  margin-top: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray[10]};
  height: 87px;

  > form {
    width: 744px;
    height: 50px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid ${props => props.theme.colors.gray[40]};
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    background-color: white;
    border-right: none;

    > img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Input = styled(InputBox)`
  width: 744px;
  height: 42px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left: 23px;
`;

export const ActiveButton = styled(Link)`
  ${primaryColorBoxStyle};
  border-radius: 0px 4px 4px 0px;  
  ${large_400}
  width: 90px;
  ${centerAlignStyle}
  height: 50px;
  cursor: pointer;  
`;

export const InactiveButton = styled(ActiveButton)`
  ${inactiveColorBoxStyle};
  border-radius: 0px 4px 4px 0px;    
`;