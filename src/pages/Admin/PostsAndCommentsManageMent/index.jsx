import { useState, useEffect, useRef } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import Title from '@/pages/Admin/Title';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import SearchInput from '@/pages/Admin/SearchInput';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import DeleteModal from '@/pages/Admin/Modals/DeleteModal';

import deleteDefault from '@/assets/icons/trush/trush_default.svg';
import deleteSelected from '@/assets/icons/trush/trush_selected.svg';
import checkThick from '@/assets/icons/check/check_thick.svg';

import {
  TableTopArea,
  PostDeleteButton,
  PostDeletetSelectButton,
  TableRowSelectWrapper,
  CommentLength,
  SearchBox,
} from '@/pages/Admin/PostsAndCommentsManageMent/style';

import { postManagementHeaderColumns } from '@/pages/Admin/data';

import useEventHandler from '@/hooks/useEventHandler';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useModalsControl from '@/hooks/useModalsControl';

import { setIsItemDeleteModal } from '@/store/modalsControl';

import { getPostsOrSearchPosts } from '@/api/adminApi';

import { communityPostMaxLimit, pageViewLimit } from '@/utils/itemLimit';
import { formatDateToPost } from '@/utils/dateFormatting';
import { errorAlert } from '@/utils/sweetAlert';
import { isOnlyWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';

export default function PostsAndCommentsManageMent() {
  const debounceRef = useRef(null);

  const {
    items: tableItems,
    totalItems,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    setItems: setTableItems,
    getDataAndSetPageNumbers: getTableItemsAndSetPageNumbers,
    setCurrentPageNumber,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });
  const { isItemDeleteModal, handleModalOpen, handleModalClose } =
    useModalsControl();
  const {
    changeValue: isDeleteButtonActive,
    handleChange: handleDeleteButtonActiveChange,
  } = useEventHandler({
    changeDefaultValue: false,
  });

  const [headerColumns] = useState(postManagementHeaderColumns);
  const [query, setQuery] = useState({
    page: currentPageNumber,
    limit: communityPostMaxLimit,
  });
  const [selectedIds, setSelectedIds] = useState([]);
  const [actionType, setActionType] = useState('');
  const { changeValue: searchValue, handleChange: handleSearchValueChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleDeleteSelectStateChange = ({ selectItemIdx, selectId }) => {
    // 클릭x => 클릭o
    //1) delete select on
    //2) 배열에 [postId] 추가

    //클릭o => 클릭 x

    //1) delete select off
    //2) 배열에 [postId] 있는지 검사 (some, include) => 있을시 제거

    //선택한 요소 토글
    const changeFnc = (arr) => {
      return arr.map((item, idx) => {
        return {
          ...item,
          deleteSelectState:
            selectItemIdx === idx
              ? !item.deleteSelectState
              : item.deleteSelectState,
        };
      });
    };
    //선택한 요소 id 토글
    setSelectedIds((prev) => {
      const selectedIdIndex = prev.findIndex(
        (selectedId) => selectedId === selectId
      );

      //-1이면 어차피 뒤쪽꺼 실행되어서 상관없음

      if (selectedIdIndex > -1) {
        //splice하면서 return하면 splice한 값만 배열에 남게 되고 그게 반환 됨.
        //원본 배열에 splice작업을 거친 뒤 원본 배열을 반환해야함.
        // splice return -> splice한 요소를 반환,
        // arr.splice() -> return arr splice하고 남은 arr요소를 반환
        const arr = [...prev];
        arr.splice(selectedIdIndex, 1);
        return arr;
      } else {
        return [...prev, selectId];
      }
    });
    setTableItems((prev) => changeFnc(prev));
  };

  const handleDeleteSelectStateReset = () => {
    const resetFnc = (arr) => {
      return arr.map((item) => {
        return {
          ...item,
          deleteSelectState: false,
        };
      });
    };
    setTableItems((prev) => resetFnc(prev));
    setSelectedIds([]);
  };

  const boardTypeFormatting = (boardType) => {
    const boardTypes = {
      theory: '이론정보',
      practice: '실습정보',
      exam: '국가고시준비',
      job: '취업정보',
      employment: '구인구직',
      event: '이벤트',
      notice: '공지사항',
    };

    return boardTypes[boardType];
  };

  const handleItemDeleteButtonClick = () => {
    if (!isDeleteButtonActive) {
      handleDeleteButtonActiveChange(true);
      return;
    }

    if (selectedIds.length === 0) {
      errorAlert('리스트를 선택 하셔야 삭제가 가능합니다!');
    } else if (selectedIds.length > 0) {
      handleModalOpen({ modalDispatch: setIsItemDeleteModal });
    }
  };

  const ItemReset = () => {
    setActionType('');
    setSelectedIds([]);
    setCurrentPageNumber(1);
    setQuery((prev) => {
      return { ...prev, page: currentPageNumber, limit: communityPostMaxLimit };
    });
  };

  const resetStateAndQueryChange = (searchValue) => {
    setActionType('');
    setCurrentPageNumber(1);
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
      search: searchValue,
    });
  };

  const handleSearch = async (e) => {
    let debounce;
    if (e.key === 'Enter') {
      if (isOnlyWhiteSpaceCheck(searchValue)) {
        errorAlert('검색어를 입력 해주세요!');
        return;
      }

      clearTimeout(debounce.current);
      debounce.current = setTimeout(() => {
        setActionType('');
        setCurrentPageNumber(1);
        setQuery({
          page: currentPageNumber,
          limit: communityPostMaxLimit,
          search: searchValue,
        });
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      debounceRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (actionType === 'pageMove') {
      window.scroll({ top: 0, left: 0 });
      setQuery((prev) => {
        return {
          ...prev,
          page: currentPageNumber,
          limit: communityPostMaxLimit,
        };
      });
    }
  }, [currentPageNumber]);

  useEffect(() => {
    (async () => {
      await getTableItemsAndSetPageNumbers(() => {
        return getPostsOrSearchPosts(query);
      });

      setTableItems((prev) => {
        //key값 다르면 렌더링할때 undfiend => 바뀐값 이런식으로 나옴
        //key를 통일시켜서 tablelist 값이 바껴도 그전값 -> 바뀐값으로 표기하자.
        return prev.map((item) => {
          //console.log(item);
          return {
            ...item,
            deleteSelectState: selectedIds?.some(
              (selectedId) => selectedId === item.postId
            )
              ? true
              : false,
          };
        });
      });
    })();
  }, [query]);

  return (
    <>
      {isItemDeleteModal && (
        <DeleteModal
          deleteItemLength={selectedIds.length}
          selectedIds={selectedIds}
          ItemReset={ItemReset}
          handleModalClose={() => {
            handleModalClose({ modalDispatch: setIsItemDeleteModal });
          }}
        />
      )}
      <TitleSection>
        <Title>게시물 관리</Title>
      </TitleSection>
      <TableTopArea>
        <ArrLengthSection>
          <ArrLengthView length={totalItems} />
          <SearchBox>
            <SearchInput resetStateAndQueryChange={resetStateAndQueryChange} />
          </SearchBox>
        </ArrLengthSection>
        <div>
          <PostDeleteButton
            onClick={handleItemDeleteButtonClick}
            $isDeleteButtonActive={isDeleteButtonActive}
          >
            <img
              src={isDeleteButtonActive ? deleteSelected : deleteDefault}
              alt={'post-delete-button'}
            />
            삭제
          </PostDeleteButton>
          {isDeleteButtonActive && (
            <PostDeleteButton
              onClick={() => {
                handleDeleteButtonActiveChange(false);
                handleDeleteSelectStateReset();
              }}
            >
              취소
            </PostDeleteButton>
          )}
        </div>
      </TableTopArea>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={'게시물 관리'}>
              {headerColumns?.map((data) => {
                return <th key={uuid()}>{data.header}</th>;
              })}
            </TableHeaderRow>
          </thead>
          <tbody>
            {tableItems?.map((item, idx) => {
              return (
                <TableBodyRow key={uuid()} currentActiveTab={'게시물 관리'}>
                  <td>{String(item.postId).padStart(2, '0')}</td>
                  <td>{boardTypeFormatting(item.boardType)}</td>
                  <td>
                    {item.title}
                    <CommentLength>
                      {`[${item.numberOfCommentsAndReplies}]`}
                    </CommentLength>
                  </td>
                  <td>{item.author}</td>
                  <td>
                    {formatDateToPost(item.createdAt)}
                    {isDeleteButtonActive && (
                      <PostDeletetSelectButton
                        $isSelected={item.deleteSelectState}
                      >
                        <img src={checkThick} alt={'post-delete-check'} />
                      </PostDeletetSelectButton>
                    )}
                  </td>
                  {isDeleteButtonActive && (
                    <TableRowSelectWrapper
                      onClick={() => {
                        handleDeleteSelectStateChange({
                          selectItemIdx: idx,
                          selectId: item.postId,
                        });
                      }}
                    />
                  )}
                </TableBodyRow>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
      {pageNumbers?.length > 0 && (
        <PaginationWrapper>
          <Pagination
            pageNumbers={pageNumbers}
            currentPageNumber={currentPageNumber}
            setActionType={setActionType}
            handlePageNumberClick={handlePageNumberClick}
            handlePrevPageClick={handlePrevPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        </PaginationWrapper>
      )}
    </>
  );
}
