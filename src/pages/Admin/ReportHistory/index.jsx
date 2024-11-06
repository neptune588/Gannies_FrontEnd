import { useState, useEffect, useRef, useCallback } from 'react';
import uuid from 'react-uuid';

import TitleSection from '@/pages/Admin/TitleSection';
import ArrLengthSection from '@/pages/Admin/ArrLengthSection';
import ArrLengthView from '@/pages/Admin/ArrLengthView';
import TableWrapper from '@/pages/Admin/TableDesign/TableWrapper';
import TableHeaderRow from '@/pages/Admin/TableDesign/TableHeaderRow';
import TableBodyRow from '@/pages/Admin/TableDesign/TableBodyRow';
import PaginationWrapper from '@/pages/Admin/PaginationWrapper';
import Pagination from '@/components/Pagination';
import ReportedReviewModal from '@/pages/Admin/Modals/ReportedReviewModal';

import arrow from '@/assets/icons/arrows/chevron_down.svg';

import {
  TitleCategory,
  DummyClickBox,
  OptionListBox,
  OptionList,
  OptionListOpenButton,
  CommentLength,
} from '@/pages/Admin/ReportHistory/style';

import {
  reportedPostsHeaderColumns,
  reportedCommentsHeaderColumns,
} from '@/pages/Admin/data';

import useEventHandler from '@/hooks/useEventHandler';
import useFetchAndPaginate from '@/hooks/useFetchAndPaginate';
import useModalsControl from '@/hooks/useModalsControl';

import {
  getReportedPosts,
  getReportedComments,
  setPostStatusChange,
  setCommentStatusChange,
} from '@/api/reportApi';

import { pageViewLimit, communityPostMaxLimit } from '@/utils/itemLimit';
import { formatDateToPost } from '@/utils/dateFormatting';

export default function ReportHistory() {
  const {
    items: tableLists,
    totalItems,
    currentPageNumber,
    groupedPageNumbers: pageNumbers,
    setItems: setTableLists,
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
  const { changeValue: curActiveCategory, handleChange } = useEventHandler({
    changeDefaultValue: '게시글',
  });

  const [headerColumns, setHearderColumns] = useState(
    reportedPostsHeaderColumns
  );
  const [query, setQuery] = useState({
    page: currentPageNumber,
    limit: communityPostMaxLimit,
    withReplies: true,
  });
  const [reviewModalProps, setReviewModalProps] = useState({});
  const [actionType, setActionType] = useState('');

  const handleOptionListToggle = (listNumber) => {
    const toggleFnc = (arr) => {
      return arr.map((list, idx) => {
        return {
          ...list,
          isOptionListOpen: idx === listNumber ? !list.isOptionListOpen : false,
        };
      });
    };
    setTableLists((prev) => toggleFnc(prev));
  };

  const handleStatusChange = async ({ ...parameter }, listNumber) => {
    try {
      const data = parameter;

      curActiveCategory === '게시글'
        ? await setPostStatusChange(data)
        : await setCommentStatusChange(data);

      const statusChangeFnc = (arr) => {
        return arr.map((list, idx) => {
          return {
            ...list,
            status: idx === listNumber ? data.status : list.status,
            isOptionListOpen:
              idx === listNumber ? false : list.isOptionListOpen,
          };
        });
      };
      setTableLists((prev) => statusChangeFnc(prev));
    } catch (error) {
      console.error(error);
    }
  };

  const setItemProperties = (item) => {
    if (curActiveCategory === '게시글') {
      return {
        contentId: String(item.postId).padStart(2, '0'),
        content: item.postTitle,
        creator: item.postAuthor,
      };
    } else {
      return {
        contentId: String(item.commentId).padStart(2, '0'),
        content: item.commentContent,
        creator: item.commentAuthor,
      };
    }
  };

  useEffect(() => {
    if (curActiveCategory === '게시글') {
      //console.log('카테고리 -> 게시글');
      setHearderColumns(reportedPostsHeaderColumns);
    } else {
      //console.log('카테고리 -> 댓글');
      setHearderColumns(reportedCommentsHeaderColumns);
    }

    setCurrentPageNumber(1);
    setActionType('');
    setQuery({
      page: currentPageNumber,
      limit: communityPostMaxLimit,
      withReplies: true,
    });
  }, [curActiveCategory]);

  useEffect(() => {
    if (actionType === 'pageMove') {
      window.scroll({ top: 0, left: 0 });
      setQuery({
        page: currentPageNumber,
        limit: communityPostMaxLimit,
        withReplies: true,
      });
    }
  }, [currentPageNumber]);

  useEffect(() => {
    (async () => {
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
          const { contentId, content, creator } = setItemProperties(list);
          return {
            ...list,
            contentId,
            content,
            creator,
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
          reviewModalProps={reviewModalProps}
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
                  <td>
                    {list.numberOfCommentsAndReplies &&
                    list.numberOfCommentsAndReplies > 0 ? (
                      <>
                        {list.content}
                        <CommentLength>
                          {`[${list.numberOfCommentsAndReplies}]`}
                        </CommentLength>
                      </>
                    ) : (
                      list.content
                    )}
                  </td>
                  <td>{list.creator}</td>
                  <td>{list.reporter}</td>
                  <td>{formatDateToPost({ date: list.reportDate })}</td>
                  <td>
                    {list.otherReportedReason
                      ? list.otherReportedReason
                      : (() => {
                          if (list.reportReason === 'pornography') {
                            return '음란한 컨텐츠';
                          } else if (
                            list.reportReason === 'slander/profanity'
                          ) {
                            return '비방/욕설';
                          } else if (list.reportReason === 'spam') {
                            return '스팸/도배';
                          }
                        })()}
                  </td>
                  <td>
                    {list.isOptionListOpen && (
                      <OptionListBox>
                        <OptionList
                          onClick={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: parseInt(list.reportId, 10),
                                    postId: parseInt(list.contentId, 10),
                                    status: 'pending',
                                  }
                                : {
                                    reportId: parseInt(list.reportId, 10),
                                    type: list.type,
                                    status: 'pending',
                                  },
                              idx
                            );
                          }}
                        >
                          처리 중
                        </OptionList>
                        <OptionList
                          onClick={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: parseInt(list.reportId, 10),
                                    postId: parseInt(list.contentId, 10),
                                    status: 'completed',
                                  }
                                : {
                                    reportId: parseInt(list.reportId, 10),
                                    type: list.type,
                                    status: 'completed',
                                  },
                              idx
                            );
                          }}
                        >
                          처리완료
                        </OptionList>
                        <OptionList
                          onClick={() => {
                            handleStatusChange(
                              curActiveCategory === '게시글'
                                ? {
                                    reportId: parseInt(list.reportId, 10),
                                    postId: parseInt(list.contentId, 10),
                                    status: 'rejected',
                                  }
                                : {
                                    reportId: parseInt(list.reportId, 10),
                                    type: list.type,
                                    status: 'rejected',
                                  },
                              idx
                            );
                          }}
                        >
                          신고반려
                        </OptionList>
                      </OptionListBox>
                    )}
                    <OptionListOpenButton
                      onClick={() => {
                        handleOptionListToggle(idx);
                      }}
                      $status={list.status}
                      $modalState={list.isOptionListOpen}
                    >
                      <span>
                        {(() => {
                          if (list.status === 'pending') {
                            return '처리 중';
                          } else if (list.status === 'completed') {
                            return '처리완료';
                          } else if (list.status === 'rejected') {
                            return '신고반려';
                          }
                        })()}
                      </span>
                      <img src={arrow} alt='bottom-arrow' />
                    </OptionListOpenButton>
                  </td>
                  <DummyClickBox
                    onClick={() => {
                      setReviewModalProps({
                        contentId: list.contentId,
                        content: list.content,
                        creator: list.creator,
                        category: list.postCategory,
                        reporter: list.reporter,
                        reportDate: formatDateToPost({ date: list.reportDate }),
                        reportReason: list.reportReason,
                        otherReportedReason: list.otherReportedReason,
                      });
                      handleModalOpen({
                        modalName: 'isReportedCotentModal',
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
            setActionType={setActionType}
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
