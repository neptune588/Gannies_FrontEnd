import styled from 'styled-components';

import {
  small_400,
  xsmall_500,
  medium_400,
  h4_600,
} from '@/styles/commonStyle/localTextStyle';
import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { modalCloseButtonStyle } from '@/styles/commonStyle/etc';

const ModalWrapper = styled.div`
  position: relative;
  width: 480px;
  padding: 75px 46.5px 65px;
  background-color: ${({ theme: { colors } }) => colors.white};
  z-index: 10;
  border-radius: 24px;
  text-align: center;
`;

const ContentsWrapper = styled.div`
  width: 255px;
  margin: 0 auto;
`;

const ModalCloseButton = styled.button`
  ${modalCloseButtonStyle}
  top: 25px;
  right: 35px;
  width: 18px;
  height: 18px;
`;

const AlertImgBox = styled.div`
  width: 67px;
  height: 67px;
  margin: 0 auto 33px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const WarningMessage = styled.h2`
  ${h4_600}
  color: ${({ theme: { colors } }) => colors.primary};
  margin-bottom: 25px;
`;

const InformationMessage = styled.p`
  ${small_400}
  color: ${({ theme: { colors } }) => colors.gray['100']};
  margin-bottom: 55px;
`;

const NoticeMessage = styled.p`
  ${xsmall_500}
  line-height: 18px;
  color: ${({ theme: { colors } }) => colors.gray['70']};
  margin-bottom: 40px;
`;

const ConfirmButton = styled.button`
  ${primaryColorBoxStyle}
  ${medium_400}
  width: 205px;
  height: 50px;
`;

export {
  ModalWrapper,
  ContentsWrapper,
  ModalCloseButton,
  AlertImgBox,
  WarningMessage,
  InformationMessage,
  NoticeMessage,
  ConfirmButton,
};
