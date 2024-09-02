import styled from 'styled-components';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

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

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 70px auto 165px;
`;

export { Container, ContentsWrapper, PageWrapper };
