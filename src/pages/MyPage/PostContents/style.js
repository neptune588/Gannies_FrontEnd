import styled from 'styled-components';

import { postsHeaderStyle } from '@/styles/commonStyle/etc';
import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { xsmall_500 } from '@/styles/commonStyle/localTextStyle';

const PostsWrapper = styled.div`
  margin-top: 10px;
`;

const PostsHeader = styled.div`
  ${postsHeaderStyle}
  display: flex;
  justify-content: space-between;
  padding: 12px 0;

  p {
    ${xsmall_500}
  }
`;

const PostsHeaderLeftBox = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    width: 70px;
    text-align: center;
  }
`;

const PostsHeaderRightBox = styled(PostsHeaderLeftBox)`
  > p {
    width: 75px;
    text-align: left;
  }
`;

const PostListBox = styled.ul`
  li {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.gray['40'];
      }};
  }
`;

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 50px auto 130px;
`;

export {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
  PageWrapper,
};
