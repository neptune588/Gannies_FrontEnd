import styled from 'styled-components';

import {
  adminPageHeaderRowStyle,
  adminPageCellStyle,
} from '@/styles/commonStyle/etc';

const Row = styled.tr`
  ${adminPageHeaderRowStyle}
  > th {
    ${adminPageCellStyle}
    &:last-child {
        display: flex;
        align-items: center;
        > img {
          width: 18px;
          height: 18px;
          margin-left: 5px;
        }
      }
    }
  }
`;

export default function HeaderRow({ children, currentActiveTab }) {
  return <Row $currentActiveTab={currentActiveTab}>{children}</Row>;
}
