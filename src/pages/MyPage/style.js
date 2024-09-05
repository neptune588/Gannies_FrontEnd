import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { h4_600, medium_600 } from '@/styles/commonStyle/localTextStyle';

const ActiveTabTitleBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  >div: first-child {
    display: flex;
    align-items: baseline;
    > p {
      color: ${({ theme: { colors } }) => {
        return colors.gray['80'];
      }};
      ${medium_600}
      margin-left: 15px;
    }
  }
`;

const ActiveTabTitle = styled.h2`
  ${h4_600}
`;

export {
  Title,
  ContentsContainer,
  SideTabMenuWrapper,
  MainContentsWrapper,
  ActiveTabTitleBox,
  ActiveTabTitle,
};
