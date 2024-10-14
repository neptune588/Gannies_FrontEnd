import { useEffect, useRef, useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';
import { myPageAlignSelectOptions } from '@/components/AlignSelectMenu/data';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

// import { posts } from '@/pages/Home/data';

import { getUserScraps } from '@/api/userApi';
import { communityPostMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';

export default function WrittenPost() {
  const optionList = myPageAlignSelectOptions;
  const [selectedOption, setSelectedOption] = useState(optionList[0].label);

  const firstRunBlockToSetCurPageNumberEffect = useRef(true);
  const firstRunBlockToSetSelectOptionEffect = useRef(true);
  const firstRunBlockToSetQueryEffect = useRef(true);

  const {
    items: currentPosts,
    totalItems,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit: pageViewLimit,
  });

  const [query, setQuery] = useState({
    page: currentPageNumber,
    limit: communityPostMaxLimit,
  });

  const handleSelectedOption = ({ ...optionalQuery }) => {
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
      ...optionalQuery,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDataAndSetPageNumbers(() => getUserScraps(query));
      } catch (error) {
        alert(
          '게시글을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetQueryEffect.current) {
      firstRunBlockToSetQueryEffect.current = false;
      return;
    }

    getDataAndSetPageNumbers(() => getUserScraps(query));
  }, [query]);

  useEffect(() => {
    if (firstRunBlockToSetSelectOptionEffect.current) {
      firstRunBlockToSetSelectOptionEffect.current = false;
      return;
    }
    getDataAndSetPageNumbers(() => getUserScraps(query));
  }, [selectedOption]);

  useEffect(() => {
    if (firstRunBlockToSetCurPageNumberEffect.current) {
      firstRunBlockToSetCurPageNumberEffect.current = false;
      return;
    }

    setQuery((prev) => {
      if (firstRunBlockToSetCurPageNumberEffect.current) {
        firstRunBlockToSetCurPageNumberEffect.current = false;
        return;
      }

      return {
        ...prev,
        page: currentPageNumber,
      };
    });
  }, [currentPageNumber]);

  return (
    <>
      <TitleBox>
        <div>
          <Title>스크랩한 게시글</Title>
          <p>총 {totalItems}개</p>
        </div>
        <AlignSelectMenu
          optionList={optionList}
          handleSelectedOption={handleSelectedOption}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </TitleBox>
      <PostContents
        postData={currentPosts}
        pageName={'myScraps'}
        scrapViewState={true}
      />
      <PageWrapper>
        <Pagination
          pageNumbers={pageNumbers}
          currentPageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberClick}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
        />
      </PageWrapper>
    </>
  );
}
