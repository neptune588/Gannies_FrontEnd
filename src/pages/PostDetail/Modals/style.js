import styled from 'styled-components';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { primaryBorderBoxStyle } from '@/styles/commonStyle/box';
import {
  h4_600,
  small_400,
  small_600,
  xsmall_500,
  medium_400,
} from '@/styles/commonStyle/localTextStyle';
import { modalCloseButtonStyle } from '@/styles/commonStyle/etc';

const Modal = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 24px;

  > h2 {
    ${h4_600}
    color: ${({ theme: { colors } }) => {
      return colors.primary;
    }};
  }

  > p {
    ${small_400}
  }

  z-index: 10;
`;

const DelteAndReportModalBox = styled(Modal)`
  width: 440px;
  height: 395px;
  padding: 63px 54px 44px;
  text-align: center;

  > h2 {
    margin: 34px 0 29px;
  }

  > p {
    line-height: 25px;
    margin-bottom: 40px;
  }

  > img {
    width: 67px;
    height: 67px;
  }
`;

const Button = styled.button`
  ${medium_400}
  padding: 15px 60px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConfirmButton = styled(Button)`
  ${primaryColorBoxStyle}
  &:hover {
    background-color: #2d6ab7;
  }
`;

const CancelButton = styled(Button)`
  ${primaryBorderBoxStyle}
`;

const ModalCloseButton = styled.button`
  ${modalCloseButtonStyle}
  position: absolute;
  top: 25px;
  right: 35px;
`;

const ReportDetailModalBox = styled(Modal)`
  position: relative;
  width: 525px;
  height: 675px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 78px 46px 64px;
  border-radius: 24px;

  > h2 {
    margin-bottom: 26px;
  }

  > p {
    margin-bottom: 34px;
  }
`;

const StyledText = styled.p`
  ${xsmall_500}
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  margin-bottom: 10px;
`;

const ReportPostTitle = styled.p`
  ${small_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
`;

const RadioSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;

  > input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  > label {
    ${small_400}
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    user-select: none;
    margin-left: 13px;
    cursor: pointer;
  }
`;

const GrayBox = styled.div`
  border-radius: 8px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['70'];
  }};
`;

const ReportCommentBox = styled(GrayBox)`
  height: 70px;
`;

const ReportReasonBox = styled(GrayBox)`
  height: 150px;
  margin-bottom: 35px;
`;

const Notice = styled.p`
  ${xsmall_500}
  color: ${({ theme: { colors } }) => {
    return colors.highlight;
  }};
  line-height: 15px;
  margin-bottom: 30px;
`;

const ReportConfirmButton = styled.button`
  ${medium_400}
  ${primaryColorBoxStyle}
  padding: 15px 70px;
`;

export {
  DelteAndReportModalBox,
  ButtonBox,
  ConfirmButton,
  CancelButton,
  ModalCloseButton,
  ReportDetailModalBox,
  StyledText,
  ReportPostTitle,
  ReportCommentBox,
  ReportReasonBox,
  RadioSection,
  RadioBox,
  Notice,
  ReportConfirmButton,
};
