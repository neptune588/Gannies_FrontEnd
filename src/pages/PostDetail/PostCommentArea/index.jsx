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

  const listRefs = useRef([]);
  const commentAreaYLocation = useRef(null);

  useEffect(() => {
    if (commentAreaYLocation.current) {
      dispatch(
        setCommentWrapperLocation({
          top: commentAreaYLocation.current.getBoundingClientRect().top,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (listRefs.current.length > 0) {
      //그전 comments의 length 갯수만큼  listrefs.current의 갯수가 정해져있기 때문에
      //listrefs.current === 10인데 렌더링되는 list가 1개뿐이면 나머지는 null로 채워진다.
      //따라서 렌더링 된 리스트만 필터링 하기 위해 filter사용
      listRefs.current = listRefs.current.filter((list) => list);
      listRefs.current.forEach((list, idx) => {
        //console.log(listRefs.current);
        if (list && idx === listRefs.current.length - 1) {
          dispatch(
            setCommentWrapperLocation({
              bottom: window.scrollY + list.getBoundingClientRect().top,
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
              <Fragment key={uuid()}>
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
