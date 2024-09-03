import styled from 'styled-components';

import { centerAlignStyle } from '@/styles/commonStyle/etc';
import { xsmall_700 } from '@/styles/commonStyle/localTextStyle';

const List = styled.li`
  ${centerAlignStyle}
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
    return colors.gray['50'];
  }};

  user-select: none;
  cursor: pointer;
  ${xsmall_700}
  padding: 10px 0;
  &:nth-child(1n) {
    color: ${({ $currentActiveTab, theme: { colors } }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원 가입승인'
      ) {
        return colors.gray['90'];
      } else if ($currentActiveTab === '회원관리') {
        return colors.gray['50'];
      }
    }};
  }
  &:nth-child(2n) {
    color: ${({ $currentActiveTab, theme: { colors } }) => {
      if (
        $currentActiveTab === '신고내역' ||
        $currentActiveTab === '회원 가입승인'
      ) {
        return colors.gray['50'];
      } else if ($currentActiveTab === '회원관리') {
        return colors.primary;
      }
    }};
  }
  &:nth-child(3n) {
    color: ${({ theme: { colors } }) => {
      return colors.negative;
    }};
    border-bottom: none;
  }
`;

export default function ModalInnerList({
  handleStatusValueChange = null,
  currentActiveTab,
  children,
}) {
  return (
    <List
      $currentActiveTab={currentActiveTab}
      onClick={handleStatusValueChange || null}
    >
      {children}
    </List>
  );
}
