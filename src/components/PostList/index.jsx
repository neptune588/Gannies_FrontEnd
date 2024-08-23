import {
  PostWrapper,
  Wrapper,
  Category,
  PostTitle,
  DescriptionWrapper,
  Comment,
  Date,
} from '@/components/PostList/style';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

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
              <Eye viewCount={post.views} />
            </DescriptionWrapper>
            <DescriptionWrapper>
              <HeartInactive likeCount={post.likes} />
            </DescriptionWrapper>
            <DescriptionWrapper>
              <Date>{post.date}</Date>
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
