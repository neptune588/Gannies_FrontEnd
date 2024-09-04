import styled from 'styled-components';

import { adminPageCellStyle } from '@/styles/commonStyle/etc';
import { xsmall_700 } from '@/styles/commonStyle/localTextStyle';
xsmall_700;

const Cell = styled.td`
  ${adminPageCellStyle}
  ${xsmall_700}
  position: relative;
  text-align: left;
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
`;

export default function TableBodyCell({ currentActiveTab, children }) {
  return <Cell $currentActiveTab={currentActiveTab}>{children}</Cell>;
}
