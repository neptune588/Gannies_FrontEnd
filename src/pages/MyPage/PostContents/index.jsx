import uuid from 'react-uuid';

import PostList from '@/components/PostList';
import Pagination from '@/components/Pagination';

import {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
  PageWrapper,
} from '@/pages/MyPage/PostContents/style';

export default function PostContents({
  postData,
  pageName,
  scrapViewState = false,
  scrapClickState = false,
  pageNumberData,
  activePageNumber = 0,
  handlePageNumberClick = null,
}) {
  return (
    <PostsWrapper>
      <PostsHeader>
        <PostsHeaderLeftBox>
          <p>순서</p>
          <p>카테고리</p>
          <p>제목</p>
        </PostsHeaderLeftBox>
        <PostsHeaderRightBox>
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
          postData.map((list, idx) => {
            return (
              <PostList
                key={uuid()}
                postNumber={String(idx + 1).padStart(2, '0')}
                category={list.category}
                title={list.title}
                comment={list.comment}
                views={list.views}
                likes={list.likes}
                date={list.date}
                scrapViewState={scrapViewState}
                scrapClickState={scrapClickState}
                pageName={pageName}
              />
            );
          })}
      </PostListBox>
      <PageWrapper>
        <Pagination
          pageNumberData={pageNumberData}
          activePageNumber={activePageNumber}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PageWrapper>
    </PostsWrapper>
  );
}
