import {
  PostWrapper,
  Category,
  PostTitle,
  DescriptionBox,
  Comment,
  Date,
} from '@/components/PostList/style';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

function PostList({
  category = null,
  title = null,
  comment = null,
  views = null,
  likes = null,
  date = null,
}) {
  return (
    <PostWrapper>
      <Category>{category}</Category>
      <PostTitle>
        {title}
        <Comment>{comment}</Comment>
      </PostTitle>
      <DescriptionBox>
        <Eye viewCount={views} />
      </DescriptionBox>
      <DescriptionBox>
        <HeartInactive likeCount={likes} />
      </DescriptionBox>
      <DescriptionBox>
        <Date>{date}</Date>
      </DescriptionBox>
    </PostWrapper>
  );
}

export default PostList;
