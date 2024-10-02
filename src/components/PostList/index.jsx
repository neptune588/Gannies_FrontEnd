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
import { useState } from 'react';
import { cancelPostScrap, postScrap } from '@/api/scrapApi';

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
}) {
  const [scrapClickState, setScrapClickState] = useState(true);

  const handleScrap = async () => {
    try {
      if (scrapClickState) {
        const res = await cancelPostScrap(postNumber);
        if (res.status === 200) {
          setScrapClickState(false);
        } else {
          alert('error');
        }
      } else {
        const res = await postScrap(postNumber);
        if (res.status === 201) {
          setScrapClickState(true);
        } else {
          alert('error');
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <PostWrapper $pageName={pageName}>
      <PostLeftBox>
        {postNumber && <PostNumber>{postNumber}</PostNumber>}
        <Category $pageName={pageName}>{category}</Category>
        <PostTitle $pageName={pageName}>
          {title}
          {comment > 0 && <CommentLength>{comment}</CommentLength>}
        </PostTitle>
      </PostLeftBox>
      <PostRightBox>
        {!scrapViewState && (
          <>
            <IconBox $pageName={pageName}>
              <Eye postViewCount={views} />
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
          <ScrapBox $scrapClickState={scrapClickState} onClick={handleScrap}>
            <Scrap scrapClickState={scrapClickState} pageName={pageName} />
          </ScrapBox>
        )}
      </PostRightBox>
    </PostWrapper>
  );
}

export default PostList;
