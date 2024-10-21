import styled from 'styled-components';

import Close from '@/components/Icons/Close';

import { modalBoxStyle, primaryColorBoxStyle } from '@/styles/commonStyle/box';
import {
  small_400,
  h4_600,
  medium_400,
} from '@/styles/commonStyle/localTextStyle';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 524px;
  height: 336px;
  padding: 26px 36px;

  > h4 {
    margin-top: 8px;
    ${h4_600}
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 33px;
  }

  > h5 {
    margin-top: 8px;
    ${h4_600}
    color: ${(props) => props.theme.colors.highlight};
    margin-bottom: 33px;
  }

  > h6 {
    margin-top: 12px;
    ${small_400}
    color: ${(props) => props.theme.colors.gray[100]};
  }

  > button {
    ${primaryColorBoxStyle};
    ${centerAlignStyle};
    width: 205px;
    height: 48px;
    margin-top: 39px;
    ${medium_400}
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 68px;
  height: 68px;
`;
