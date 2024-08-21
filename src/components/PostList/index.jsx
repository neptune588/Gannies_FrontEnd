import PropTypes from 'prop-types';
import {
  PostWrapper,
  Wrapper,
  Category,
  PostTitle,
  Description,
  DescriptionWrapper,
  Comment
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
            <PostTitle>{post.title} <Comment>[{post.comment}]</Comment></PostTitle>
            <DescriptionWrapper>
              <Eye />
              <Description>{post.views}</Description>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <HeartInactive />
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

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      comment: PropTypes.number.isRequired,
      views: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
};

export default PostList;