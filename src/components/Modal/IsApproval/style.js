import Close from '@/components/Icons/Close';
import styled from 'styled-components';

import { modalBoxStyle } from '@/styles/commonStyle/box';
import {
  xsmall_500,
  xsmall_600,
  small_400,
  h4_600,
} from '@/styles/commonStyle/localTextStyle';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 524px;
  height: 406px;
  padding: 26px 36px;

  > h4 {
    margin-top: 23px;
    ${h4_600}
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 16px;
  }

  > h6 {
    margin-top: 12px;
    ${small_400}
    color: ${(props) => props.theme.colors.gray[100]};
  }

  > p {
    margin-top: 41px;
    ${xsmall_500}
    color: ${(props) => props.theme.colors.gray[70]};
  }

  > span {
    margin-top: 21px;
    ${xsmall_600}
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;
