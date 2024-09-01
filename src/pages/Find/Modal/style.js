import Close from '@/components/Icons/Close';
import styled from 'styled-components';

import { modalBoxStyle } from '@/styles/commonStyle/box';
import { h4_600, small_400 } from '@/styles/commonStyle/localTextStyle';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 524px;
  height: 333px;
  padding: 26px 36px;

  > h4 {
    margin-top: 23px;
    ${h4_600}
    color: ${(props) => props.theme.colors.highlight};
    margin-bottom: 16px;
  }

  > h6 {
    margin-top: 12px;
    ${small_400}
    color: ${(props) => props.theme.colors.gray[100]};

    &:last-of-type {
      margin-bottom: 37px;
    }
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