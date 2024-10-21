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
  PostUpperContainer,
  PostLowerContainer,
} from '@/components/PostList/style';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';
import { useState } from 'react';
import { cancelPostScrap, postScrap } from '@/api/scrapApi';
import useUserState from '@/hooks/useUserState';

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
  boardType = null,
  postId = null,
  content = null,
}) {
  const [scrapClickState, setScrapClickState] = useState(true);
  const handleScrap = async (e) => {
    try {
      e.stopPropagation();
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
      alert('error');
    }
  };

  const { navigateBasedOnState } = useUserState();

  const handlePostClick = async (postId) => {
    navigateBasedOnState(
      `/community/${boardType}/post/${postId}`,
      'approved_member'
    );
  };

  return (
    <PostWrapper
      $pageName={pageName}
      onClick={() => {
        handlePostClick(postId);
      }}
    >
      <PostUpperContainer $pageName={pageName}>
        <PostLeftBox>
          {postNumber && (
            <PostNumber $pageName={pageName}>{postNumber}</PostNumber>
          )}
          {category && <Category $pageName={pageName}>{category}</Category>}
          <PostTitle $pageName={pageName}>
            {title}
            {comment > 0 && <CommentLength>{comment}</CommentLength>}
          </PostTitle>
        </PostLeftBox>
        <PostRightBox>
          {!scrapViewState && (
            <>
              {views !== null && (
                <IconBox $pageName={pageName}>
                  <Eye postViewCount={views} />
                </IconBox>
              )}
              {likes !== null && (
                <IconBox $pageName={pageName}>
                  <HeartInactive likeCount={likes} />
                </IconBox>
              )}
            </>
          )}

          {date && (
            <DescriptionBox $pageName={pageName}>
              <Date>{date}</Date>
            </DescriptionBox>
          )}
          {scrapViewState && (
            <ScrapBox
              $scrapClickState={scrapClickState}
              onClick={(e) => handleScrap(e)}
            >
              <Scrap scrapClickState={scrapClickState} pageName={pageName} />
            </ScrapBox>
          )}
        </PostRightBox>
      </PostUpperContainer>
      {content && (
        <PostLowerContainer>
          <p>{content}</p>
        </PostLowerContainer>
      )}
    </PostWrapper>
  );
}

export default PostList;
