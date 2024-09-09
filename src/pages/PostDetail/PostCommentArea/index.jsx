import styled from 'styled-components';

import PostCommentList from '@/pages/PostDetail/PostCommentArea/PostCommentList';
import Pagination from '@/components/Pagination';

import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';

const PageWraaper = styled.div`
  ${paginationWrapperStyle}
  margin: 50px auto 120px;
`;

export default function PostCommentArea({
  pageCountData,
  currentPageNumber,
  handlePageNumberChange,
  commenter,
  comment,
  commentCreateDate,
  isReplyComment,
  isReplyCreateOpen,
  handleReplyCreateButtonClick,
}) {
  return (
    <>
      <ul>
        <PostCommentList
          commenter={commenter}
          comment={comment}
          commentCreateDate={commentCreateDate}
          isReplyComment={isReplyComment}
          isReplyCreateOpen={isReplyCreateOpen}
          handleReplyCreateButtonClick={handleReplyCreateButtonClick}
        />
      </ul>
      <PageWraaper>
        <Pagination
          pageCountData={pageCountData}
          activePageNumber={currentPageNumber}
          handlePageNumberClick={handlePageNumberChange}
        />
      </PageWraaper>
    </>
  );
}
