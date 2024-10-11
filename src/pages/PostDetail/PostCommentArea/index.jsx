import { Fragment, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import PostCommentList from '@/pages/PostDetail/PostCommentArea/PostCommentList';
import Pagination from '@/components/Pagination';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { medium_600 } from '@/styles/commonStyle/localTextStyle';

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
  listHeight,
  setActionType,
  setContentType,
  setReportedContent,
  setCurrentReportData,
  setCommentBoxLocation,
  dataReset,
  commentPageGroupReCalc,
  handlePageNumberClick,
  handlePrevPageClick,
  handleNextPageClick,
}) {
  const commentAreaYLocation = useRef(null);

  const replyCommentLengthCalc = () => {
    let length = 0;
    comments.forEach((comment) => {
      for (let key in comment) {
        console.log(key);
        if (key === 'replies') {
          length += comment[key].length;
        }
      }
    });

    return length;
  };

  useEffect(() => {
    if (commentAreaYLocation.current) {
      setCommentBoxLocation(() => {
        return {
          top: commentAreaYLocation.current.getBoundingClientRect().top,
        };
      });
    }
  }, []);

  useEffect(() => {
    setCommentBoxLocation((prev) => {
      return {
        ...prev,
        bottom:
          parseInt(listHeight, 10) *
          (comments?.length > 0
            ? comments.length
            : 0 + replyCommentLengthCalc()),
      };
    });
  }, [comments]);

  return (
    <>
      <ul ref={commentAreaYLocation}>
        {comments?.length > 0 ? (
          comments.map((comment, idx) => {
            return (
              <Fragment key={uuid()}>
                <PostCommentList
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
                  listHeight={listHeight}
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
                        isReplyComment={true}
                        commenter={replyComment.nickname}
                        content={replyComment.content}
                        createDate={replyComment.createdAt}
                        updateDate={replyComment.updatedAt}
                        replyId={replyComment.replyId}
                        commenterId={replyComment.userId}
                        currentPageNumber={currentPageNumber}
                        listHeight={listHeight}
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
