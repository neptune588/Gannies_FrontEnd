import styled from 'styled-components';

import {
  adminPageHeaderRowStyle,
  adminPageCellStyle,
} from '@/styles/commonStyle/etc';

const HeaderRow = styled.tr`
  ${adminPageHeaderRowStyle}
  > th {
    ${adminPageCellStyle}
    > img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
`;

export default function TableHeaderRow({ children, currentActiveTab }) {
  return <HeaderRow $currentActiveTab={currentActiveTab}>{children}</HeaderRow>;
}
