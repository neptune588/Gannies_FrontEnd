import styled from 'styled-components';

import { defaultBorderBoxStyle } from '@/styles/commonStyle/box';

const Title = styled.h2`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
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

const MainContentsWrapper = styled.div`
  width: 795px;
  margin-left: 30px;
`;

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
      font-size: ${({ theme: { typo } }) => {
        return typo.size.md;
      }};
      font-weight: ${({ theme: { typo } }) => {
        return typo.weight.semiBold;
      }};
      margin-left: 15px;
    }
  }
`;

const ActiveTabTitle = styled.h2`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
`;

export {
  Title,
  ContentsContainer,
  SideTabMenuWrapper,
  MainContentsWrapper,
  ActiveTabTitleBox,
  ActiveTabTitle,
};
