import uuid from 'react-uuid';

import PostList from '@/components/PostList';

import {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
} from '@/pages/MyPage/PostContents/style';
import { formatDateToPost } from '@/utils/dateFormatting';
import { getCategoryLabel } from '@/utils/getCategoryLabel';

export default function PostContents({
  postData,
  pageName,
  scrapViewState = null,
}) {
  return (
    <>
      <PostsWrapper>
        <PostsHeader>
          <PostsHeaderLeftBox>
            <p>번호</p>
            <p>카테고리</p>
            <p>제목</p>
          </PostsHeaderLeftBox>
          <PostsHeaderRightBox $pageName={pageName}>
            {scrapViewState ? (
              <>
                <p>작성일</p>
                <p>스크랩</p>
              </>
            ) : (
              <>
                <p>조회수</p>
                <p>공감수</p>
                <p>작성일</p>
              </>
            )}
          </PostsHeaderRightBox>
        </PostsHeader>
        <PostListBox>
          {postData?.length > 0 &&
            postData.map((list) => {
              return (
                <PostList
                  key={uuid()}
                  postNumber={String(list.postId).padStart(2, '0')}
                  category={getCategoryLabel(list.boardType)}
                  title={list.title}
                  comment={list.numberOfCommentsAndReplies}
                  views={list.viewCounts}
                  likes={list.likeCounts}
                  date={formatDateToPost(list.createdAt)}
                  pageName={pageName}
                  scrapViewState={scrapViewState}
                />
              );
            })}
        </PostListBox>
      </PostsWrapper>
    </>
  );
}
