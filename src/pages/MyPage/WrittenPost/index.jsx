import { useEffect, useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';
import { myPageAlignSelectOptions } from '@/components/AlignSelectMenu/data';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

// import { posts } from '@/pages/Home/data';

import useEventHandler from '@/hooks/useEventHandler';
import { getUserPosts } from '@/api/userApi';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';

export default function WrittenPost() {
  const [postData, setPostData] = useState([]);
  const [postTotalCount, setPostTotalCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const optionList = myPageAlignSelectOptions;
  const [pageNumber, setPageNumber] = useState(1);
  const [postTotalPage, setPostTotalPage] = useState(0);
  const [pageData, setPageData] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return index;
    })
  );

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserPosts({
        page: 1,
      });
      setPostData(response.data.items);
      setPostTotalCount(response.data.totalItems);
      setPostTotalPage(response.data.totalPages);
      console.log(response);
    };

    fetch();
  }, []);

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
          <Title>내가 쓴 게시글</Title>
          <p>총 {postTotalCount}개</p>
        </div>
        <AlignSelectMenu
          optionList={optionList}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </TitleBox>
      <PostContents postData={postData} pageName={'my-page'} />
      {/* <PageWrapper>
        <Pagination
          pageCountData={pageData}
          activePageNumber={currentActivePageNumber}
          handlePageNumberClick={handlePageNumberChange}
        />
      </PageWrapper> */}
      <PageWrapper>
        <Pagination
          pageNumbers={postTotalPage}
          currentPageNumber={pageNumber}
          // handlePageNumberClick={handlePageNumberClick}
          // handlePrevPageClick={handlePrevPageClick}
          // handleNextPageClick={handleNextPageClick}
        />
      </PageWrapper>
    </>
  );
}
