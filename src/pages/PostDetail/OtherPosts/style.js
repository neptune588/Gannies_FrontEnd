import styled from 'styled-components';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { medium_600 } from '@/styles/commonStyle/localTextStyle';

const PostsWrapper = styled.div`
  margin-top: 120px;
  padding: 0 19px;
  border-top: 2px solid transparent;
  border-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23${({
      theme: { colors },
    }) =>
      colors.gray['40'].replace(
        '#',
        ''
      )}' stroke-width='2' stroke-dasharray='6%2c 14' stroke-linecap='square'/%3e%3c/svg%3e")
    1;

  table {
    width: 100% !important;
  }
`;

const Title = styled.h2`
  ${medium_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['90'];
  }};
  margin: 60px 0 35px;
`;

const PageWrapper = styled.div`
  ${paginationWrapperStyle}
  margin: 50px auto 175px;
`;

export { PostsWrapper, PageWrapper, Title };
