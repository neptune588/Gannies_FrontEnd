import { Fragment, useEffect, useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import uuid from 'react-uuid';

import PostCommentList from '@/pages/PostDetail/PostCommentArea/PostCommentList';
import Pagination from '@/components/Pagination';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { medium_600 } from '@/styles/commonStyle/localTextStyle';

import { setCommentWrapperLocation } from '@/store/locations';

const PageWraaper = styled.div`
  ${paginationWrapperStyle}
  margin: 50px auto 0;
`;

const EmptyComments = styled.p`
  ${medium_600}
  color: ${({ theme: { colors } }) => {
    return colors.gray['100'];
  }};
  padding: 10rem 0;
  text-align: center;
`;

export default memo(function PostCommentArea({
  comments,
  currentPageNumber,
  pageNumbers,
  setActionType,
  setContentType,
  setReportedContent,
  setCurrentReportData,
  dataReset,
  commentPageGroupReCalc,
  handlePageNumberClick,
  handlePrevPageClick,
  handleNextPageClick,
}) {
  const dispatch = useDispatch();

  const commentAreaYLocation = useRef(null);
  const listRefs = useRef([]);

  useEffect(() => {
    if (commentAreaYLocation.current) {
      dispatch(
        setCommentWrapperLocation({
          top: commentAreaYLocation.current.scrollTop,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (listRefs.current.length > 0) {
      listRefs.current.forEach((list, idx) => {
        if (list && idx === listRefs.current.length - 1) {
          dispatch(
            setCommentWrapperLocation({
              top: commentAreaYLocation.current.scrollTop,
              bottom: list.offsetTop,
            })
          );
        }
      });
    }
  }, [comments]);

  return (
    <>
      <ul ref={commentAreaYLocation}>
        {comments?.length > 0 ? (
          comments.map((comment, idx) => {
            return (
              <Fragment key={comment.commentId}>
                <PostCommentList
                  ref={(list) => {
                    listRefs.current[idx] = list;
                  }}
                  isReplyComment={false}
                  commenter={comment.nickname}
                  content={comment.content}
                  createDate={comment.createdAt}
                  updateDate={comment.updatedAt}
                  deleteDate={comment.deletedAt}
                  postId={comment.postId}
                  commentId={comment.commentId}
                  commenterId={comment.userId}
                  currentPageNumber={currentPageNumber}
                  setCurrentReportData={setCurrentReportData}
                  setReportedContent={setReportedContent}
                  setContentType={setContentType}
                  commentPageGroupReCalc={commentPageGroupReCalc}
                  dataReset={dataReset}
                />
                {comment.replies.length > 0 &&
                  comment.replies.map((replyComment) => {
                    return (
                      <PostCommentList
                        key={uuid()}
                        ref={(list) => {
                          listRefs.current[idx] = list;
                        }}
                        isReplyComment={true}
                        commenter={replyComment.nickname}
                        content={replyComment.content}
                        createDate={replyComment.createdAt}
                        updateDate={replyComment.updatedAt}
                        replyId={replyComment.replyId}
                        commenterId={replyComment.userId}
                        currentPageNumber={currentPageNumber}
                        setCurrentReportData={setCurrentReportData}
                        setReportedContent={setReportedContent}
                        setContentType={setContentType}
                        commentPageGroupReCalc={commentPageGroupReCalc}
                        dataReset={dataReset}
                      />
                    );
                  })}
              </Fragment>
            );
          })
        ) : (
          <EmptyComments>댓글이 존재하지 않습니다.</EmptyComments>
        )}
      </ul>
      {pageNumbers?.length > 0 && (
        <PageWraaper>
          <Pagination
            pageNumbers={pageNumbers}
            setActionType={setActionType}
            currentPageNumber={currentPageNumber}
            handlePrevPageClick={handlePrevPageClick}
            handleNextPageClick={handleNextPageClick}
            handlePageNumberClick={handlePageNumberClick}
          />
        </PageWraaper>
      )}
    </>
  );
});
