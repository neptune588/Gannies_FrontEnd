import { useState, useEffect } from 'react';

import CommentCreate from '@/pages/PostDetail/CommentCreate';
import More from '@/components/Icons/More';
import MorePopup from '@/pages/PostDetail/MorePopup';
import Clock from '@/components/Icons/Clock';

import commentReplyIcon from '@/assets/icons/etc/comment_reply.svg';

import {
  Container,
  CommentListWrapper,
  CommenterBox,
  CommentContent,
  CommentMetricBox,
  CommentCreateDateView,
  ReplyCommentCreateButton,
  ReplyCommentBox,
  ReplyIcon,
} from '@/pages/PostDetail/PostCommentArea/PostCommentList/style';

import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';

import { deleteComment, deleteReplyComment } from '@/api/commentApi';

export default function PostCommentList({
  isReplyComment,
  commenter,
  content,
  createDate,
  updateDate,
  postId,
  replyId,
  commentId,
  commenterId,
  currentPageNumber,
  setCurrentReportData,
  setContentType,
  setReportedContent,
  dataReset,
}) {
  const { userId: currentUserId } = useSelectorList();

  const [isMoreButtonOpen, setIsMoreButtonOpen] = useState(false);
  const [isReplyCreateOpen, setIsReplyCreateOpen] = useState(false);
  const [isEditCommentOpen, setIsEditCommentOpen] = useState(false);

  const { changeValue: commentValue, handleChange: handleCommentChange } =
    useEventHandler({
      changeDefaultValue: '',
    });
  const { changeValue: editValue, handleChange: handleEditCommentChange } =
    useEventHandler({
      changeDefaultValue: '',
    });

  const handleEditButtonOpen = () => {
    setIsReplyCreateOpen(false);
    handleEditCommentChange('');
    handleCommentChange('');
    setIsEditCommentOpen(true);
    setIsMoreButtonOpen(false);
  };

  const handleReplyCommentCreateClick = () => {
    setIsReplyCreateOpen((prev) => !prev);
    setIsEditCommentOpen(false);
    handleCommentChange('');
  };

  const handleCommentDelete = async () => {
    if (!confirm('댓글을 삭제 하시겠습니까?')) {
      return;
    }

    try {
      isReplyComment
        ? await deleteReplyComment(replyId)
        : await deleteComment(commentId);

      dataReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container $isReplyComment={isReplyComment}>
        {isReplyComment && (
          <ReplyIcon>
            <img src={commentReplyIcon} alt='comment-reply-icon' />
          </ReplyIcon>
        )}
        <CommentListWrapper>
          <CommenterBox>
            <p>{commenter}</p>
            <More onClick={() => setIsMoreButtonOpen((prev) => !prev)}>
              {isMoreButtonOpen && (
                <MorePopup
                  ownComment={currentUserId === commenterId ? true : false}
                  contentType={isReplyComment ? 'replyComment' : 'comment'}
                  reportedContent={content}
                  replyId={replyId}
                  commentId={commentId}
                  setContentType={setContentType}
                  setReportedContent={setReportedContent}
                  setCurrentReportData={setCurrentReportData}
                  setIsMorePopup={setIsMoreButtonOpen}
                  handleEditButtonOpen={handleEditButtonOpen}
                  handleCommentDelete={handleCommentDelete}
                />
              )}
            </More>
          </CommenterBox>
          <CommentContent>{content}</CommentContent>
          <CommentMetricBox>
            <Clock isVerify={false} />
            <CommentCreateDateView>
              {createDate === updateDate
                ? createDate
                : `${createDate}(${updateDate} 수정 됨)`}
            </CommentCreateDateView>
            {!isReplyComment && (
              <ReplyCommentCreateButton
                $isReplyCreateOpen={isReplyCreateOpen}
                onClick={handleReplyCommentCreateClick}
              >
                답글쓰기
              </ReplyCommentCreateButton>
            )}
          </CommentMetricBox>
        </CommentListWrapper>
      </Container>
      {isReplyCreateOpen && (
        <ReplyCommentBox $isReplyComment={isReplyComment}>
          <CommentCreate
            requestType={'create'}
            listType={'common'}
            isReplyCreateOpen={isReplyCreateOpen}
            value={commentValue}
            postId={postId}
            commentId={commentId}
            currentPageNumber={currentPageNumber}
            dataReset={dataReset}
            handleChange={handleCommentChange}
            handleCreateCancel={() => setIsReplyCreateOpen(false)}
          />
        </ReplyCommentBox>
      )}
      {isEditCommentOpen && (
        <ReplyCommentBox $isReplyComment={isReplyComment}>
          <CommentCreate
            requestType={'edit'}
            listType={isReplyComment ? 'reply' : 'common'}
            value={editValue}
            postId={postId}
            replyId={replyId}
            commentId={commentId}
            currentPageNumber={currentPageNumber}
            dataReset={dataReset}
            handleChange={handleEditCommentChange}
            handleCreateCancel={() => setIsEditCommentOpen(false)}
          />
        </ReplyCommentBox>
      )}
    </>
  );
}
