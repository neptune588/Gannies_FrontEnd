import styled from 'styled-components';

import {
  pageArrowWrapperStyle,
  pageNumberWrapperStyle,
  paginationWrapperStyle,
} from '@/styles/commonStyle/wrapper';

const Container = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => {
    return colors.gray['10'];
  }};
`;

const ContentsWrapper = styled.div`
  position: relative;
  width: 1385px;
  top: 0;
  left: 465px;
`;

const TitleCategorySection = styled.section`
  display: flex;
  align-items: center;
  padding: 115px 0 0 25px;
  margin-bottom: 100px;
`;

const TitleCategory = styled.h2`
  margin-right: 65px;
  color: ${({ $activeCategory, $ownCategory, theme: { colors } }) => {
    return $activeCategory === $ownCategory
      ? colors.gray['100']
      : colors.gray['50'];
  }};
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h1;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
  cursor: pointer;
  user-select: none;
`;

const ListCount = styled.p`
  font-size: ${({ theme: { typo } }) => {
    return typo.size.h4;
  }};
  font-weight: ${({ theme: { typo } }) => {
    return typo.weight.semiBold;
  }};
  margin: 0 0 35px 20px;
`;

const ListWrapper = styled.div`
  min-height: 830px;
  padding: 45px 42px 12px 42px;
  background-color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  border-radius: 24px;
`;

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 70px auto 165px;
`;

const ArrowBox = styled.div`
  ${pageArrowWrapperStyle}
`;

const PageNumberBox = styled.ul`
  ${pageNumberWrapperStyle}
`;

export {
  Container,
  ContentsWrapper,
  TitleCategorySection,
  TitleCategory,
  ListCount,
  ListWrapper,
  PageWrapper,
  ArrowBox,
  PageNumberBox,
};
