import styled from 'styled-components';

import {
  xsmall_500,
  small_400,
  small_500,
  small_600,
} from '@/styles/commonStyle/localTextStyle';
import { ellipsisStyle } from '@/styles/commonStyle/etc';

const TableRow = styled.tr`
  ${ellipsisStyle}
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $currentPostId, $ownPostId, theme: { colors } }) => {
    return $currentPostId === $ownPostId && colors.gray['10'];
  }};
  padding: 16px 20px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.gray['40'];
    }};
  > td {
    &:nth-child(1n) {
      ${small_600}
      flex: 0 0 8.5rem;
      color: ${({ theme: { colors } }) => {
        return colors.gray['90'];
      }};
    }
    &:nth-child(2n) {
      flex: 1;
      ${small_500}
      color: ${({ theme: { colors } }) => {
        return colors.gray['90'];
      }};
      font-weight: ${({ $currentPostId, $ownPostId, theme: { typo } }) => {
        return $currentPostId === $ownPostId
          ? typo.weight.bold
          : typo.weight.medium;
      }};
    }
    &:nth-child(3n) {
      ${xsmall_500}
      flex: 0 0 10rem;
    }
    &:nth-child(4n) {
      ${small_400}
      color: ${({ theme: { colors } }) => {
        return colors.gray['60'];
      }};
      flex: 0 0 15.5rem;
    }
    &:nth-child(5n) {
      flex: 0 0 8rem;
    }
    &:nth-child(6n) {
      flex: 0 0 6rem;
    }
  }
`;

const CommentLengthView = styled.span`
  color: ${({ theme: { colors } }) => {
    return colors.highlight;
  }};
  margin-left: 5px;
`;

export { TableRow, CommentLengthView };
