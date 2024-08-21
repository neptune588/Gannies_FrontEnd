import PropTypes from 'prop-types';
import {
  ShowMoreButton,
  ShowMoreButtonIcon,
  UpperTitle,
  UpperWrapper,
  Wrapper
} from '@/pages/Home/Post/style';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import PostList from '@/components/PostList';

function Post({ title, posts }) {
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
        <PostList posts={posts}/>
      </Wrapper>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
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
