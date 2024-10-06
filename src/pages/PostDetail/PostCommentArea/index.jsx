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

import { formatDateToPost } from '@/utils/dateFormatting';

export default memo(function PostCommentArea({
  comments,
  currentPageNumber,
  totalCommentPageNumbers,
  pageNumbers,
  dataReset,
  setCurrentMoveLocation,
  handlePageNumberClick,
  handlePrevPageClick,
  handleNextPageClick,
}) {
  const commentAreaYLocation = useRef(null);

  useEffect(() => {
    if (commentAreaYLocation.current) {
      setCurrentMoveLocation(
        commentAreaYLocation.current.getBoundingClientRect().top
      );
    }
  }, []);

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
                  createDate={formatDateToPost(comment.createdAt)}
                  updateDate={formatDateToPost(comment.updatedAt)}
                  postId={comment.postId}
                  commentId={comment.commentId}
                  commenterId={comment.userId}
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
                        createDate={formatDateToPost(replyComment.createdAt)}
                        updateDate={formatDateToPost(replyComment.updatedAt)}
                        replyId={replyComment.replyId}
                        commenterId={replyComment.userId}
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
      {totalCommentPageNumbers.length > 0 && (
        <PageWraaper>
          <Pagination
            pageNumbers={pageNumbers}
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
