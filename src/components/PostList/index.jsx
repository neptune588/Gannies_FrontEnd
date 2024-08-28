import CommentLength from '@/components/CommentLength';
import Scrap from '@/components/Icons/Scrap';

import {
  PostWrapper,
  PostNumber,
  PostLeftBox,
  Category,
  PostTitle,
  DescriptionBox,
  PostRightBox,
  IconBox,
  Date,
  ScrapBox,
} from '@/components/PostList/style';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

function PostList({
  postNumber = null,
  category = null,
  title = null,
  comment = null,
  views = null,
  likes = null,
  date = null,
  pageName = 'home',
  scrapViewState = false,
  scrapClickState = false,
}) {
  return (
    <PostWrapper $pageName={pageName}>
      <PostLeftBox>
        {postNumber && <PostNumber>{postNumber}</PostNumber>}
        <Category $pageName={pageName}>{category}</Category>
        <PostTitle $pageName={pageName}>
          {title}
          <CommentLength>{comment}</CommentLength>
        </PostTitle>
      </PostLeftBox>
      <PostRightBox>
        {!scrapViewState && (
          <>
            <IconBox $pageName={pageName}>
              <Eye viewCount={views} />
            </IconBox>
            <IconBox $pageName={pageName}>
              <HeartInactive likeCount={likes} />
            </IconBox>
          </>
        )}

        <DescriptionBox $pageName={pageName}>
          <Date>{date}</Date>
        </DescriptionBox>
        {scrapViewState && (
          <ScrapBox $scrapClickState={scrapClickState}>
            <Scrap scrapClickState={scrapClickState} pageName={pageName} />
          </ScrapBox>
        )}
      </PostRightBox>
    </PostWrapper>
  );
}

export default PostList;
