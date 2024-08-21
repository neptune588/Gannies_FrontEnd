import {
  PostWrapper,
  Wrapper,
  Category,
  PostTitle,
  DescriptionWrapper,
  Comment,
  PostEye,
  PostHeartInactive,
  Description,
} from '@/components/PostList/style';

function PostList({ posts }) {
  return (
    <Wrapper>
      {posts.length > 0 ? (
        posts.map((post, postIndex) => (
          <PostWrapper key={postIndex}>
            <Category>{post.category}</Category>
            <PostTitle>
              {post.title} <Comment>[{post.comment}]</Comment>
            </PostTitle>
            <DescriptionWrapper>
              <PostEye />
              <Description>{post.views}</Description>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <PostHeartInactive />
              <Description>{post.likes}</Description>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <Description>{post.date}</Description>
            </DescriptionWrapper>
          </PostWrapper>
        ))
      ) : (
        <></>
      )}
    </Wrapper>
  );
}

export default PostList;
