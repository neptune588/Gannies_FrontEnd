import { useEffect, useRef, useState } from 'react';

import PostContents from '@/pages/MyPage/PostContents';
import AlignSelectMenu from '@/components/AlignSelectMenu';
import Pagination from '@/components/Pagination';
import { myScrapsAndCommentsAlignSelectOptions } from '@/components/AlignSelectMenu/data';

import { TitleBox, Title, PageWrapper } from '@/pages/MyPage/WrittenPost/style';

import { communityPostMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import { getUserComments } from '@/api/userApi';

export default function WrittenComment() {
  const optionList = myScrapsAndCommentsAlignSelectOptions;
  const [selectedOption, setSelectedOption] = useState(optionList[0].label);

  const firstRunBlockToSetCurPageNumberEffect = useRef(true);
  const firstRunBlockToSetQueryEffect = useRef(true);

  const {
    items: currentComments,
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
        await getDataAndSetPageNumbers(() => getUserComments(query));
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

    getDataAndSetPageNumbers(() => getUserComments(query));
  }, [query]);

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
          <Title>내가 쓴 댓글</Title>
          <p>총 {totalItems}개</p>
        </div>
        <AlignSelectMenu
          optionList={optionList}
          handleSelectedOption={handleSelectedOption}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </TitleBox>
      <PostContents postData={currentComments} pageName={'myComments'} />
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
