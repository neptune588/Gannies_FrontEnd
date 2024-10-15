import { useState, useEffect, useRef, useCallback } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import InnerSelectModal from '@/pages/Admin/TableDesign/InnerSelectModal';
import ModalInnerList from '@/pages/Admin/TableDesign/InnerSelectModal/ModalInnerList';
import InnerModalOpenButton from '@/pages/Admin/TableDesign/InnerModalOpenButton';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/ReportedReviewModal';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import { TitleCategory, ListClickBox } from '@/pages/Admin/ReportHistory/style';

import {
  reportedPostsHeaderColumns,
  reportedCommentsHeaderColumns,
} from '@/pages/Admin/data';

import useEventHandler from '@/hooks/useEventHandler';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useModalsControl from '@/hooks/useModalsControl';

import { setIsReportedCotentModal } from '@/store/modalsControl';

import {
  getReportedPosts,
  getReportedComments,
  setPostStatusChange,
  setCommentStatusChange,
} from '@/api/reportApi';

import { pageViewLimit, communityPostMaxLimit } from '@/utils/itemLimit';
import { formatDateToPost } from '@/utils/dateFormatting';

export default function ReportHistory() {
  const modalsRef = useRef([]);

  const {
    items: tableLists,
    totalItems,
    isLoading,
    itemMaxLimit,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    setItems: setTableLists,
    setIsLoading,
    setCurrentPageNumber,
    getDataAndSetPageNumbers: getReportedPostsAndSetPageNumbers,
    handlePageNumberClick,
    handlePrevPageClick,
    handleNextPageClick,
  } = useFetchAndPaginate({
    defaultPageNumber: 1,
    itemMaxLimit: communityPostMaxLimit,
    pageViewLimit,
  });

  const { isReportedCotentModal, handleModalOpen } = useModalsControl();

  const [headerColumns, setHearderColumns] = useState(
    reportedPostsHeaderColumns
  );
  const [query, setQuery] = useState({
    page: currentPageNumber,
    limit: communityPostMaxLimit,
    withReplies: true,
  });
  const [reviewModalContents, setReviewModalContents] = useState({});

  const { changeValue: curActiveCategory, handleChange } = useEventHandler({
    changeDefaultValue: '게시글',
  });

  const handleInnerModalToggle = (listNumber) => {
    const toggleFnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          innerModalState: idx === listNumber ? !list.innerModalState : false,
        };
      });
    };
    setTableLists((prev) => toggleFnc(prev));
  };

  const handleStatusChange = async ({ ...props }, listNumber) => {
    try {
      const data = props;

      console.log(data);
      /*       curActiveCategory === '게시글 '
        ? await setPostStatusChange(data)
        : await setCommentStatusChange(data); */

      const statusChangeFnc = (arr) => {
        return arr.map((list, idx) => {
          return {
            ...list,
            status: idx === listNumber ? props.status : list.status,
            innerModalState: idx === listNumber ? false : list.innerModalState,
          };
        });
      };
      setTableLists((prev) => statusChangeFnc(prev));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (curActiveCategory === '게시글') {
      //console.log('카테고리 -> 게시글');
      setHearderColumns(reportedPostsHeaderColumns);
      setCurrentPageNumber(1);
    } else {
      //console.log('카테고리 -> 댓글');
      setHearderColumns(reportedCommentsHeaderColumns);
      setCurrentPageNumber(1);
    }
  }, [curActiveCategory]);

  useEffect(() => {
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
      withReplies: true,
    });
  }, [currentPageNumber, curActiveCategory]);

  useEffect(() => {
    (async () => {
      window.scroll({ top: 0, left: 0 });
      if (curActiveCategory === '게시글') {
        //console.log('데이터 요청 => 게시글로 데이터 변경');
        await getReportedPostsAndSetPageNumbers(() => {
          return getReportedPosts(query);
        });
      } else {
        //console.log('데이터 요청 => 댓글로 데이터 변경');
        await getReportedPostsAndSetPageNumbers(() => {
          return getReportedComments(query);
        });
      }

      setTableLists((prev) => {
        //key값 다르면 렌더링할때 undfiend => 바뀐값 이런식으로 나옴
        //key를 통일시켜서 tablelist 값이 바껴도 그전값 -> 바뀐값으로 표기하자.
        return prev.map((list) => {
          return {
            ...list,
            contentId: String(list.postId || list.commentId).padStart(2, '0'),
            content: list.postTitle || list.commentContent,
            creator: list.postAuthor || list.commentAuthor,
          };
        });
      });
    })();
  }, [query]);

  return (
    <>
      {isReportedCotentModal && (
        <ReportedReviewModal
          activeCategory={curActiveCategory}
          reviewModalContents={reviewModalContents}
        />
      )}
      <TitleSection>
        <TitleCategory
          $currenntActiveCategory={curActiveCategory}
          $ownCategory={'게시글'}
          onClick={() => {
            handleChange('게시글');
          }}
        >
          게시글
        </TitleCategory>
        <TitleCategory
          $currenntActiveCategory={curActiveCategory}
          $ownCategory={'댓글'}
          onClick={() => {
            handleChange('댓글');
          }}
        >
          댓글
        </TitleCategory>
      </TitleSection>
      <ArrLengthSection>
        <ArrLengthView length={totalItems} />
      </ArrLengthSection>
      <TableWrapper>
        <table>
          <thead>
            <TableHeaderRow currentActiveTab={'신고내역'}>
              {headerColumns.map((data, idx) => {
                return (
                  <th key={uuid()}>
                    {data.header}
                    {idx === headerColumns.length - 1 && (
                      <img src={arrow} alt='bottom-arrow' />
                    )}
                  </th>
                );
              })}
            </TableHeaderRow>
          </thead>
          <tbody>
            {tableLists?.map((list, idx) => {
              return (
                <TableBodyRow key={uuid()} currentActiveTab={'신고내역'}>
                  <td>{list.contentId}</td>
                  <td>{list.content}</td>
                  <td>{list.creator}</td>
                  <td>{list.reporter}</td>
                  <td>{formatDateToPost(list.reportDate)}</td>
                  <td>
                    {list.otherReportedReason
                      ? list.otherReportedReason
                      : list.reportReason}
                  </td>
                  <td>
                    {list.innerModalState && (
                      <InnerSelectModal
                        ref={(el) => (modalsRef[idx].current = el)}
                        currentActiveTab={'신고내역'}
                      >
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusChange={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: list.reportId,
                                    postId: list.contentId,
                                    status: 'pending',
                                  }
                                : {
                                    reportId: list.reportId,
                                    type: 'comment',
                                    status: 'pending',
                                  },
                              idx
                            );
                          }}
                        >
                          처리 중
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusChange={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: list.reportId,
                                    postId: list.contentId,
                                    status: 'completed',
                                  }
                                : {
                                    reportId: list.reportId,
                                    type: 'comment',
                                    status: 'completed',
                                  },
                              idx
                            );
                          }}
                        >
                          처리완료
                        </ModalInnerList>
                        <ModalInnerList
                          currentActiveTab={'신고내역'}
                          handleStatusChange={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: list.reportId,
                                    postId: list.contentId,
                                    status: 'rejected',
                                  }
                                : {
                                    reportId: list.reportId,
                                    type: 'comment',
                                    status: 'rejected',
                                  },
                              idx
                            );
                          }}
                        >
                          신고반려
                        </ModalInnerList>
                      </InnerSelectModal>
                    )}
                    <InnerModalOpenButton
                      handleInnerModalToggle={() => {
                        handleInnerModalToggle(idx);
                      }}
                      currentActiveTab={'신고내역'}
                      currentValue={(() => {
                        if (list.status === 'pending') {
                          return '처리 중';
                        } else if (list.status === 'completed') {
                          return '처리완료';
                        } else if (list.status === 'rejected') {
                          return '신고반려';
                        }
                      })()}
                      innerModalState={list.innerModalState}
                    />
                  </td>
                  <ListClickBox
                    onClick={() => {
                      setReviewModalContents({
                        contentId: list.contentId,
                        content: list.content,
                        creator: list.creator,
                        category: list.postCategory || '디폴트',
                        reporter: list.reporter,
                        reportDate: formatDateToPost(list.reportDate),
                        reportReason: list.reportReason,
                        otherReportedReason: list.otherReportedReason,
                      });
                      handleModalOpen({
                        modalDispatch: setIsReportedCotentModal,
                      });
                    }}
                  />
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
            handlePageNumberClick={handlePageNumberClick}
            handlePrevPageClick={handlePrevPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        </PaginationWrapper>
      )}
    </>
  );
}
