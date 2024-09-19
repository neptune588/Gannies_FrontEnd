import { useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

import { posts } from '@/pages/Home/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function ScrappedPost() {
  const [postData] = useState(posts);

  const [pageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const {
    changeValue: currentActivePageNumber,
    handleChange: handlePageNumberChange,
  } = useEventHandler({
    changeDefaultValue: 0,
  });

  return (
    <>
      <TitleBox>
        <div>
          <Title>스크랩한 게시글</Title>
          <p>총 {postData.length}개</p>
        </div>
        <AlignSelectMenu />
      </TitleBox>
      <PostContents
        postData={postData}
        pageName={'my-page'}
        scrapViewState={true}
        scrapClickState={false}
      />
      <PageWrapper>
        <Pagination
          pageCountData={pageData}
          activePageNumber={currentActivePageNumber}
          handlePageNumberClick={handlePageNumberChange}
        />
      </PageWrapper>
    </>
  );
}
