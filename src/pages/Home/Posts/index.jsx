import { categoryOptions } from '@/pages/Home/Posts/data';
import Post from '@/pages/Home/Posts/Post';
import { PostsWrapper } from '@/pages/Home/Posts/style';
import uuid from 'react-uuid';

function Posts() {
  const groupByRows = (categories, size) => {
    const result = [];
    for (let i = 0; i < categories.length; i += size) {
      result.push(categories.slice(i, i + size));
    }
    return result;
  };

  const groupedCategories = groupByRows(categoryOptions, 2);

  return (
    <>
      {groupedCategories.map((group) => (
        <PostsWrapper key={uuid()}>
          {group.map((category) => (
            <Post
              key={uuid()}
              title={category.label}
              boardType={category.boardType}
            />
          ))}
        </PostsWrapper>
      ))}
    </>
  );
}

export default Posts;
