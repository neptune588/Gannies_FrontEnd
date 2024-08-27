import { useState } from 'react';

import PostList from '@/components/PostList';
import PageControlArrow from '@/components/PageControlArrow';
import PageNumber from '@/components/PageNumber';

import prevArrow from '@/assets/icons/arrows/chevron_left.svg';
import nextArrow from '@/assets/icons/arrows/chevron_right.svg';
import prev10PagesArrow from '@/assets/icons/arrows/double_chevron_lef.svg';
import next10PagesArrow from '@/assets/icons/arrows/double_chevron_right.svg';

import {
  PostsWrapper,
  PostsHeader,
  PostsHeaderLeftBox,
  PostsHeaderRightBox,
  PostListBox,
  PageWrapper,
  ArrowBox,
  PageNumberBox,
} from '@/pages/MyPage/PostContents/style';

export default function PostContents({
  pageData,
  postData,
  pageName,
  scrapViewState = false,
  scrapClickState = false,
}) {
  const [tempPageNumber, setTempPageNumber] = useState(0);
  const handlePageClick = (idx) => {
    return () => {
      setTempPageNumber(idx);
    };
  };

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
                key={list.category + idx}
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
        <ArrowBox>
          <PageControlArrow arrowImg={prevArrow} alt={'prev-button'} />
          <PageControlArrow
            arrowImg={prev10PagesArrow}
            alt={'prev-10pages-button'}
          />
        </ArrowBox>
        <PageNumberBox>
          {pageData.map((item, idx) => {
            return (
              <PageNumber
                key={item + 'pageNumber'}
                myNumber={idx}
                activeNumber={tempPageNumber}
                onClick={handlePageClick(idx)}
              />
            );
          })}
        </PageNumberBox>
        <ArrowBox>
          <PageControlArrow arrowImg={nextArrow} alt={'next-button'} />
          <PageControlArrow
            arrowImg={next10PagesArrow}
            alt={'next-10pages-button'}
          />
        </ArrowBox>
      </PageWrapper>
    </PostsWrapper>
  );
}
