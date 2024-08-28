import {
  Wrapper
} from '@/pages/Home/Post/style';

import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import PostList from '@/components/PostList';

function Post({ title, posts }) {
  return (
    <>
        <Wrapper>
          <h3>{title}</h3>
          <button>
            <span>더보기</span>
            <img src={chevron_right} alt='chevron_right' />
          </button>
        </Wrapper>
        {
          posts.map((post, index) => {
            return (
              <PostList
                key={index}
                category={post.category}
                title={post.title}
                comment={post.comment}
                views={post.views}
                likes={post.likes}
                date={post.date}
                />
            )
          })
        }
    </>
  );
}

export default Post;
