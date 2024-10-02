import styled from 'styled-components';

import Close from '@/components/Icons/Close';

import {
  modalBoxStyle,
  primaryBorderBoxStyle,
  primaryColorBoxStyle,
} from '@/styles/commonStyle/box';
import {
  xsmall_500,
  xsmall_600,
  small_400,
  h4_600,
  medium_400,
} from '@/styles/commonStyle/localTextStyle';
import { Link } from 'react-router-dom';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 524px;
  height: 388px;
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

export const ModifyPasswordButton = styled(Link)`
  ${primaryBorderBoxStyle};
  ${centerAlignStyle};
  width: 205px;
  height: 48px;
  margin-top: 39px;
  ${medium_400}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 37px;
`;

export const CancelButton = styled.button`
  ${primaryBorderBoxStyle};
  ${centerAlignStyle};
  width: 150px;
  height: 48px;
  ${medium_400}
`;

export const WithdrawButton = styled(CancelButton)`
  ${primaryColorBoxStyle};
  margin-left: 32px;
`;

export const WithdrawModalBox = styled(ModalBox)`
  height: 342px;
`;
