import { useEffect, useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

import { posts } from '@/pages/Home/data';

import { getUserScraps } from '@/api/userApi';
import useEventHandler from '@/hooks/useEventHandler';

export default function ScrappedPost() {
  const [postData] = useState(posts);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const optionList = ['최신순', '인기순'];

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserScraps({ page: 1 });
      console.log(response);
    };

    fetch();
  }, []);

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
        <AlignSelectMenu
          optionList={optionList}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
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
