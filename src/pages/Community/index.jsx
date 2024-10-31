import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';

import CommunityPost from '@/pages/Community/CommunityPost';
import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';
import Pagination from '@/components/Pagination';
import AlignSelectMenu from '@/components/AlignSelectMenu';

import brush from '@/assets/icons/etc/brush.svg';

import {
  ContentsAlignBox,
  PostCreateButton,
  TableWrapper,
  TableHeader,
  PageWrapper,
  NoSearchResults,
} from '@/pages/Community/style';

import {
  communityPageAlignSelectOptions,
  SearchPageSelectOptions,
} from '@/components/AlignSelectMenu/data';

import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useUserState from '@/hooks/useUserState';

import { getPosts } from '@/api/postApi';
import { checkAdminStatus } from '@/api/authApi';

import { formatDateToPost } from '@/utils/dateFormatting';
import { communityPostMaxLimit } from '@/utils/itemLimit';
import { pageViewLimit } from '@/utils/itemLimit';

export default function Community({ isSearch, searchKeyword }) {
  const { boardType } = useParams();

  const firstRunBlockToSetCurPageNumberEffect = useRef(true);
  const firstRunBlockToSetBoardTypeEffect = useRef(true);
  const firstRunBlockToSetQueryEffect = useRef(true);

  const {
    items: currentPosts,
    totalItems: postsTotalLength,
    isLoading,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    getDataAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
    resetPageNumber,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit: pageViewLimit,
  });
  const { navigateBasedOnState } = useUserState();

  const [alignOptionList] = useState(communityPageAlignSelectOptions);
  const [boardTypeOptionList] = useState(SearchPageSelectOptions);
  const [selectedAlignOption, setSelectedAlignOption] = useState(
    communityPageAlignSelectOptions[0].label
  );
  //select menu로 label path 동시에 변경
  const [selectedBoardOption, setSelectedBoardOption] = useState({
    label: SearchPageSelectOptions[0].label,
    path: SearchPageSelectOptions[0].path,
  });

  const [query, setQuery] = useState(
    isSearch
      ? {
          page: currentPageNumber,
          limit: communityPostMaxLimit,
          search: searchKeyword,
        }
      : {
          page: currentPageNumber,
          limit: communityPostMaxLimit,
        }
  );

  const handleSelectedOption = ({ ...optionalQuery }) => {
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
      ...optionalQuery,
    });
  };

  const handlePostCreateClick = async () => {
    if (boardType === 'notice' || boardType === 'event') {
      try {
        const res = await checkAdminStatus();
        res.isAdmin
          ? navigateBasedOnState(
              `/community/${boardType}/create-community-post`,
              'approved_member',
              true
            )
          : alert('해당 게시판의 글은 관리자만 작성 가능합니다!');
      } catch (error) {
        //후에 axios interceptor로 http 코드별로 핸들링
        console.error('관리자 요청 실패', error);
      }
    } else {
      navigateBasedOnState(
        `/community/${boardType}/create-community-post`,
        'approved_member',
        true
      );
    }
  };

  const handlePostClick = async ({ postBoardType, postId }) => {
    // if (checkIsLogin()) {
    //   window.scroll({ top: 0, left: 0 });
    //   navigate(`/community/${boardType}/post/${postId}`);
    // } else {
    //   alert('로그인을 하셔야 이용 가능합니다!');
    //   navigate('/sign-in');
    // }
    window.scroll({ top: 0, left: 0 });
    navigateBasedOnState(
      `/community/${postBoardType}/post/${postId}`,
      'approved_member'
    );
  };

  useEffect(() => {
    getDataAndSetPageNumbers(() =>
      isSearch
        ? getPosts(selectedBoardOption.path, query)
        : getPosts(boardType, query)
    );
    //console.log('초기 실행');
  }, []);

  useEffect(() => {
    if (firstRunBlockToSetCurPageNumberEffect.current) {
      firstRunBlockToSetCurPageNumberEffect.current = false;
      return;
    }
    setQuery((prev) => {
      return {
        ...prev,
        page: currentPageNumber,
      };
    });
    //console.log('pageNumber change effect 실행');
  }, [currentPageNumber]);

  useEffect(() => {
    if (firstRunBlockToSetBoardTypeEffect.current) {
      firstRunBlockToSetBoardTypeEffect.current = false;
      return;
    }

    resetPageNumber();

    if (isSearch) {
      setQuery({
        page: currentPageNumber,
        limit: communityPostMaxLimit,
        search: searchKeyword,
      });
    } else {
      setQuery({ page: currentPageNumber, limit: communityPostMaxLimit });
      setSelectedAlignOption(communityPageAlignSelectOptions[0].label);
    }

    //console.log('reset effect 실행');
  }, [
    boardType,
    selectedBoardOption.label,
    selectedBoardOption.path,
    searchKeyword,
  ]);

  useEffect(() => {
    if (firstRunBlockToSetQueryEffect.current) {
      firstRunBlockToSetQueryEffect.current = false;
      return;
    }
    getDataAndSetPageNumbers(() =>
      isSearch
        ? getPosts(selectedBoardOption.path, query)
        : getPosts(boardType, query)
    );
    //console.log('query effect 실행');
  }, [query]);

  return (
    <>
      {!isLoading && currentPosts?.length === 0 ? (
        <NoSearchResults>작성 된 게시물이 없습니다.</NoSearchResults>
      ) : (
        <>
          {!isSearch && (
            <CommunityBanner>
              <CommunityBannerText />
            </CommunityBanner>
          )}
          <TableWrapper>
            <ContentsAlignBox>
              {isSearch ? (
                <AlignSelectMenu
                  isSearch={isSearch}
                  pageType={'search'}
                  searchedListLength={postsTotalLength}
                  optionList={boardTypeOptionList}
                  selectedOption={selectedBoardOption.label}
                  setSelectedOption={setSelectedBoardOption}
                />
              ) : (
                <>
                  <PostCreateButton onClick={handlePostCreateClick}>
                    <img src={brush} alt='create-button' />
                    게시글 작성
                  </PostCreateButton>
                  <AlignSelectMenu
                    optionList={alignOptionList}
                    handleSelectedOption={handleSelectedOption}
                    selectedOption={selectedAlignOption}
                    setSelectedOption={setSelectedAlignOption}
                  />
                </>
              )}
            </ContentsAlignBox>
            <table>
              <thead>
                <TableHeader>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성날짜</th>
                  <th>조회 수/공감 수</th>
                </TableHeader>
              </thead>
              <tbody height={currentPosts.length === 0 ? '669px' : 'auto'}>
                {currentPosts?.map((post, idx) => {
                  return (
                    <CommunityPost
                      key={uuid()}
                      handlePostClick={() => {
                        handlePostClick({
                          postBoardType: post.boardType,
                          postId: post.postId,
                        });
                      }}
                      searchKeyword={searchKeyword}
                      number={String(post.postId).padStart(2, '0')}
                      title={post.title.replace(
                        searchKeyword,
                        `<span>${searchKeyword}</span>`
                      )}
                      nickname={post.user.nickname}
                      createDate={formatDateToPost({ date: post.createdAt })}
                      postViewCount={parseInt(post.viewCounts, 10)}
                      likeCount={parseInt(post.likeCounts, 10)}
                      numberOfCommentsAndReplies={parseInt(
                        post.numberOfCommentsAndReplies,
                        10
                      )}
                    />
                  );
                })}
              </tbody>
            </table>
          </TableWrapper>
          {pageNumbers?.length > 0 && (
            <PageWrapper>
              <Pagination
                pageNumbers={pageNumbers}
                currentPageNumber={currentPageNumber}
                handlePageNumberClick={handlePageNumberClick}
                handlePrevPageClick={handlePrevPageClick}
                handleNextPageClick={handleNextPageClick}
              />
            </PageWrapper>
          )}
        </>
      )}
    </>
  );
}
