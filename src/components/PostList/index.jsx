import {
  Container,
  PostWrapper,
  Category,
  PostTitle,
  DescriptionBox,
  Comment,
  Date,
} from '@/components/PostList/style';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

function PostList({ posts = null }) {
  return (
    <Container>
      {posts?.length > 0 ? (
        posts.map((post, postIndex) => (
          <PostWrapper key={postIndex}>
            <Category>{post.category}</Category>
            <PostTitle>
              {post.title}
              <Comment>[{post.comment}]</Comment>
            </PostTitle>
            <DescriptionBox>
              <Eye viewCount={post.views} />
            </DescriptionBox>
            <DescriptionBox>
              <HeartInactive likeCount={post.likes} />
            </DescriptionBox>
            <DescriptionBox>
              <Date>{post.date}</Date>
            </DescriptionBox>
          </PostWrapper>
        ))
      ) : (
        <p>데이터 x</p>
      )}
    </Container>
  );
}

export default PostList;
