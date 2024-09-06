import { useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

import { posts } from '@/pages/Home/data';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function WrittenPost() {
  const [postData] = useState(posts);

  const [pageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  const {
    clickChangeState: currentActivePageNumber,
    handleClickChange: handlePageNumberChange,
  } = useEventHandler({
    clickChangeDefaultValue: 0,
  });

  return (
    <>
      <TitleBox>
        <div>
          <Title>내가 쓴 게시글</Title>
          <p>총 {postData.length}개</p>
        </div>
        <AlignSelectMenu />
      </TitleBox>
      <PostContents postData={postData} pageName={'my-page'} />
      <PageWrapper>
        <Pagination
          pageNumberData={pageData}
          activePageNumber={currentActivePageNumber}
          handlePageNumberClick={handlePageNumberChange}
        />
      </PageWrapper>
    </>
  );
}
