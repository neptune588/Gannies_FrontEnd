import Close from '@/components/Icons/Close';
import styled from 'styled-components';

import { modalBoxStyle } from '@/styles/commonStyle/box';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 524px;
  height: 333px;
  padding: 26px 36px;

  > h4 {
    margin-top: 23px;
    font-size: ${(props) => props.theme.typo.size.h4};
    font-weight: ${(props) => props.theme.typo.weight.semiBold};
    color: ${(props) => props.theme.colors.highlight};
    margin-bottom: 16px;
  }

  > h6 {
    margin-top: 12px;
    font-size: ${(props) => props.theme.typo.size.sm};
    font-weight: ${(props) => props.theme.typo.weight.regular};
    color: ${(props) => props.theme.colors.gray[100]};
  }
`;

export const CloseIcon = styled(Close)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 18px;
`;