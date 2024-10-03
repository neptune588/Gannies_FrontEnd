import CommentCreate from '@/pages/PostDetail/CommentCreate';
import More from '@/components/Icons/More';
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

import useSelectorList from '@/hooks/useSelectorList';

export default function PostCommentList({
  isReplyComment,
  commenter,
  content,
  createDate,
  updateDate,
  postId,
  commentId,
  userId,
  isMoreButtonState,
  isReplyCreateOpen,
  isReplyCommentMoreButtonState,
  handleReplyCreateButtonClick,
}) {
  const { userId: currentUserId } = useSelectorList();

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
            <More />
          </CommenterBox>
          <CommentContent>{content}</CommentContent>
          <CommentMetricBox>
            <Clock isVerify={false} />
            <CommentCreateDateView>
              {createDate === updateDate
                ? createDate
                : `${createDate}(${updateDate}에 수정 됨)`}
            </CommentCreateDateView>

            {!isReplyComment && (
              <ReplyCommentCreateButton
                $isReplyCreateOpen={isReplyCreateOpen}
                onClick={handleReplyCreateButtonClick || undefined}
              >
                답글쓰기
              </ReplyCommentCreateButton>
            )}
          </CommentMetricBox>
        </CommentListWrapper>
      </Container>
      {isReplyCreateOpen && (
        <ReplyCommentBox $isReplyComment={isReplyComment}>
          <CommentCreate isCommentReply={true} />
        </ReplyCommentBox>
      )}
    </>
  );
}
