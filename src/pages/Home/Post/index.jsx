import {
  ShowMoreButton,
  ShowMoreButtonIcon,
  UpperTitle,
  UpperWrapper,
  Wrapper,
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
            <ShowMoreButtonIcon src={chevron_right} alt='chevron_right' />
          </ShowMoreButton>
        </UpperWrapper>
        <PostList posts={posts} />
      </Wrapper>
    </>
  );
}

export default Post;
