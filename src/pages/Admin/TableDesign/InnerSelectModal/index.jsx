import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { xsmall_700 } from '@/styles/commonStyle/localTextStyle';
xsmall_700;

const ModalBox = styled.ul`
  ${defaultBorderBoxStyle}
  position: absolute;
  width: 90px;
  top: 25px;
  right: ${({ $currentActiveTab }) => {
    if ($currentActiveTab === '신고내역') {
      return '75px';
    } else if ($currentActiveTab === '회원관리') {
      return '35px';
    } else if ($currentActiveTab === '회원 가입승인') {
      return '160px';
    }
  }};
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  padding: 0 9.5px;
  z-index: 10;
`;

export default function InnerSelectModal({
  currentActiveTab = '신고내역',
  children,
}) {
  return <ModalBox $currentActiveTab={currentActiveTab}>{children}</ModalBox>;
}
