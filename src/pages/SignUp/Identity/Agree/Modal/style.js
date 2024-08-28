import Close from '@/components/Icons/Close';
import styled from 'styled-components';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { modalBoxStyle, primaryBorderBoxStyle } from '@/styles/commonStyle/box';

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
    font-size: ${(props) => props.theme.typo.size.h3};
    font-weight: ${(props) => props.theme.typo.weight.bold};
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
    font-size: ${(props) => props.theme.typo.size.lg};
    font-weight: ${(props) => props.theme.typo.weight.bold};
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
      font-size: ${(props) => props.theme.typo.size.sm};
      font-weight: ${(props) => props.theme.typo.weight.bold};
      margin-bottom: 20px;
    }

    > p {
      color: ${(props) => props.theme.colors.gray[30]};
      font-size: ${(props) => props.theme.typo.size.sm};
      font-weight: ${(props) => props.theme.typo.weight.regular};
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
  ${primaryBorderBoxStyle};
  width: 360px;
  height: 48px;
  font-size: ${(props) => props.theme.typo.size.md};
  font-weight: ${(props) => props.theme.typo.weight.regular};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InactiveButton = styled(ActiveButton)`
  color: ${(props) => props.theme.colors.gray[30]};
  border: 1px solid ${(props) => props.theme.colors.gray[30]};
`;

export const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
