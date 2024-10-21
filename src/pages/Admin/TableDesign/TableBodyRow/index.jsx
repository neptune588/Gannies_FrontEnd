import styled from 'styled-components';

import { adminPageCellStyle } from '@/styles/commonStyle/etc';
import { xsmall_700 } from '@/styles/commonStyle/localTextStyle';

const BodyRow = styled.tr`
  display: flex;
  align-items: center;
  position: relative;
  height: 72px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => {
      return colors.black;
    }};
  &:last-child {
    border: none;
  }
  &:first-child {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.black;
      }};
  }

  > td {
    ${adminPageCellStyle}
    ${xsmall_700}
    position: relative;
    text-align: left;
    color: ${({ theme: { colors } }) => {
      return colors.gray['90'];
    }};
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => {
      return colors.gray['10'];
    }};
  }
`;

export default function TableBodyRow({ children, currentActiveTab }) {
  return <BodyRow $currentActiveTab={currentActiveTab}>{children}</BodyRow>;
}
