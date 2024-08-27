import styled from 'styled-components';
import { postsHeaderStyle } from '@/styles/commonStyle';

const PostsWrapper = styled.div`
  margin-top: 10px;
`;

const PostsHeader = styled.div`
  ${postsHeaderStyle}
  display: flex;
  justify-content: space-between;
  padding: 12px 0;

  p {
    font-size: ${({ theme: { typo } }) => {
      return typo.size.xs;
    }};
    font-weight: ${({ theme: { typo } }) => {
      return typo.weight.medium;
    }};
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
    text-align: left;
  }
`;

const PostListBox = styled.div`
  li {
    border-bottom: 1px solid
      ${({ theme: { colors } }) => {
        return colors.gray['40'];
      }};
  }
`;

export {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
};
