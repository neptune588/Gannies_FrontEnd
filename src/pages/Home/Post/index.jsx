import PostList from '@/components/PostList';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import uuid from 'react-uuid';

import { ShowMoreButton, Wrapper } from '@/pages/Home/Post/style';

function Post({ title, posts }) {
  return (
    <>
      <Wrapper>
        <h3>{title}</h3>
        <ShowMoreButton>
          <span>더보기</span>
          <img src={chevron_right} alt='chevron_right' />
        </ShowMoreButton>
      </Wrapper>
      {posts.map((post) => {
        return (
          <PostList
            key={uuid()}
            category={post.category}
            title={post.title}
            comment={post.comment}
            views={post.views}
            likes={post.likes}
            date={post.date}
          />
        );
      })}
    </>
  );
}

export default Post;
