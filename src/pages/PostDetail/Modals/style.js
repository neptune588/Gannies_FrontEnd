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
import {
  modalCloseButtonStyle,
  centerAlignStyle,
} from '@/styles/commonStyle/etc';

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

  > div {
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
  height: ${({ $isContentType }) => {
    return $isContentType === 'post' ? '685px' : '755px';
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 78px 46px 64px;
  border-radius: 24px;

  > h2 {
    margin-bottom: 26px;
  }

  > p {
    margin-bottom: 30px;
  }
`;

const StyledText = styled.p`
  ${xsmall_500}
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
  margin-bottom: 20px !important;
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
    cursor: pointer;
    &[type='radio'] {
      transform: scale(0.9);
      margin: 0;
    }
  }

  > label {
    ${small_400}
    color: ${({ theme: { colors } }) => {
      return colors.gray['100'];
    }};
    user-select: none;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const ReportCommentBox = styled.div`
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 8px;
  height: 90px;
  overflow-y: auto;
  border-radius: 8px;
  color: ${({ theme: { colors } }) => {
    return colors.gray['80'];
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

const ReportReasonBox = styled.textarea`
  ${small_400}
  padding: 15px;
  background-color: ${({ $isDisabled, theme: { colors } }) => {
    return $isDisabled ? colors.gray['10'] : colors.gray['20'];
  }};
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 35px;
`;

const Notice = styled.p`
  ${xsmall_500}
  color: ${({ theme: { colors } }) => {
    return colors.highlight;
  }};
  line-height: 25px;
  margin-bottom: 30px;
  text-align: center;
`;

const ReportConfirmButton = styled.button`
  ${medium_400}
  ${primaryColorBoxStyle}
  ${centerAlignStyle}
  width: 205px;
  height: 50px;
  margin: 0 auto;
  &:hover {
    background-color: #2d6ab7;
  }
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
