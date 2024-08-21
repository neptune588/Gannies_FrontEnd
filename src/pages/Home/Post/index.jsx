import PropTypes from 'prop-types';
import {
  PostWrapper,
  LowerWrapper,
  ShowMoreButton,
  ShowMoreButtonIcon,
  UpperTitle,
  UpperWrapper,
  Wrapper,
  CategoryButton,
  PostTitle,
  LowerIcon,
  LowerDescription,
  LowerDescriptionWrapper,
  Comment} from '@/pages/Home/Post/style';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import eye from '@/assets/icons/eyes/eye.svg';
import like_inactive from '@/assets/icons/hearts/like_inactive.svg';

function Post({ title, data }) {
  const posts = data || [];
  return (
    <>
      <Wrapper>
        <UpperWrapper>
          <UpperTitle>{title}</UpperTitle>
          <ShowMoreButton>
            <span>더보기</span>
            <ShowMoreButtonIcon src={chevron_right} alt="chevron_right" />
          </ShowMoreButton>
        </UpperWrapper>
        <LowerWrapper>
          {posts.length > 0 ? (
            posts.map((post, postIndex) => (
              <PostWrapper key={postIndex}>
                <CategoryButton>{post.category}</CategoryButton>
                <PostTitle>{post.title} <Comment>[{post.comment}]</Comment></PostTitle>
                <LowerDescriptionWrapper>
                  <LowerIcon src={eye} alt="eye" />
                  <LowerDescription>{post.views}</LowerDescription>
                </LowerDescriptionWrapper>
                <LowerDescriptionWrapper>
                  <LowerIcon src={like_inactive} alt="like_inactive" />
                  <LowerDescription>{post.likes}</LowerDescription>
                </LowerDescriptionWrapper>
                <LowerDescriptionWrapper>
                  <LowerDescription>{post.date}</LowerDescription>
                </LowerDescriptionWrapper>
              </PostWrapper>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </LowerWrapper>
      </Wrapper>
    </>
  );
}

// eslint - propTypes ???
Post.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      comment: PropTypes.number.isRequired,
      views: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Post;
