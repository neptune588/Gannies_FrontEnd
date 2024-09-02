import styled from 'styled-components';

import Close from '@/components/Icons/Close';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { modalBoxStyle, primaryBorderBoxStyle } from '@/styles/commonStyle/box';
import {
  small_400,
  small_700,
  medium_400,
  large_700,
  h3_700,
} from '@/styles/commonStyle/localTextStyle';

export const ModalBox = styled.div`
  ${modalBoxStyle};
  width: 580px;
  height: 690px;
  position: relative;
`;

export const Header = styled.div`
  width: 580px;
  height: 100px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[30]};
  justify-content: space-between;

  > h3 {
    color: ${(props) => props.theme.colors.black};
    ${h3_700}
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 580px;
  height: 490px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.white};
  padding-bottom: 20px;

  > h4 {
    color: ${(props) => props.theme.colors.black};
    ${large_700}
    margin-top: 41px;
    margin-left: 40px;
  }

  > div {
    width: 486px;
    display: flex;
    flex-direction: column;
    margin: 41px 47px 0 47px;

    > h5 {
      color: ${(props) => props.theme.colors.black};
      ${small_700}
      margin-bottom: 20px;
    }

    > p {
      color: ${(props) => props.theme.colors.gray[30]};
      ${small_400}
      line-height: 24px;
    }
  }
`;

export const Blur = styled.div`
  filter: blur(5px);
  width: 540px;
  height: 30px;
  position: absolute;
  top: 570px;
  left: 20px;
  z-index: 99999;
  background: ${(props) => props.theme.colors.white};
`;

export const Footer = styled.div`
  width: 580px;
  height: 100px;
  ${centerAlignStyle};
`;

export const ActiveButton = styled.button`
  display: flex;
  ${primaryBorderBoxStyle};
  width: 360px;
  height: 48px;
  ${medium_400}
  align-items: center;
  justify-content: center;
`;

export const InactiveButton = styled(ActiveButton)`
  color: ${(props) => props.theme.colors.gray[30]};
  border: 1px solid ${(props) => props.theme.colors.gray[30]};
  cursor: default;
`;

export const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
