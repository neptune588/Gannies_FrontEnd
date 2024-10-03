import styled from 'styled-components';
import uuid from 'react-uuid';

import PostCommentList from '@/pages/PostDetail/PostCommentArea/PostCommentList';
import Pagination from '@/components/Pagination';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

const PageWraaper = styled.div`
  ${paginationWrapperStyle}
  margin: 50px auto 120px;
`;

import { formatDateToPost } from '@/utils/dateFormatting';

export default function PostCommentArea({
  comments,
  currentPageNumber,
  handleReplyCreateButtonClick,
  pageNumbres,
  handlePageNumberClick,
  handlePrevPageClick,
  handleNextPageClick,
}) {
  return (
    <>
      <ul>
        {comments?.length > 0
          ? comments.map((comment, idx) => {
              return (
                <>
                  <PostCommentList
                    key={uuid()}
                    isReplyComment={false}
                    commenter={comment.nickname}
                    content={comment.content}
                    createDate={formatDateToPost(comment.createdAt)}
                    updateDate={formatDateToPost(comment.updatedAt)}
                    postId={comment.postId}
                    commentId={comment.commentId}
                    userId={comment.userId}
                    isReplyCreateOpen={comment.isReplyCreateOpen}
                    handleReplyCreateButtonClick={() => {
                      handleReplyCreateButtonClick(idx);
                    }}
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
                          postId={comment.postId}
                          commentId={comment.commentId}
                          userId={comment.userId}
                        />
                      );
                    })}
                </>
              );
            })
          : '댓글이 존재하지 않습니다.'}
      </ul>
      <PageWraaper>
        <Pagination
          pageNumbres={pageNumbres}
          activePageNumber={currentPageNumber}
          handlePrevPageClick={handlePrevPageClick}
          handleNextPageClick={handleNextPageClick}
          handlePageNumberClick={handlePageNumberClick}
        />
      </PageWraaper>
    </>
  );
}
