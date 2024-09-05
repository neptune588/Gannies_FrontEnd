import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';
import { h4_600, medium_600 } from '@/styles/commonStyle/localTextStyle';

const Title = styled.h2`
  ${h4_600}
  margin: 70px 0 30px;
  padding-left: 10px;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const SideTabMenuWrapper = styled.div`
  ${defaultBorderBoxStyle}
  width: 160px;
  height: 405px;
  padding: 25px 15px 65px;
`;

const MainContentsWrapper = styled.div``;

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
