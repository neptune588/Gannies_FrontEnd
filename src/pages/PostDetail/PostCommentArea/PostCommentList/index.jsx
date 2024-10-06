import { useState } from 'react';

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

export default function PostCommentList({
  isReplyComment,
  commenter,
  content,
  createDate,
  updateDate,
  postId,
  commentId,
  commenterId,
  dataReset,
}) {
  const { userId: currentUserId } = useSelectorList();

  const [isMoreButtonOpen, setIsMoreButtonOpen] = useState(false);
  const [isReplyCreateOpen, setIsReplyCreateOpen] = useState(false);
  const { changeValue, handleChange } = useEventHandler({
    changeDefaultValue: '',
  });

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
                onClick={() => {
                  setIsReplyCreateOpen((prev) => !prev);
                }}
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
            isReplyCreateOpen={isReplyCreateOpen}
            value={changeValue}
            postId={postId}
            commentId={commentId}
            dataReset={dataReset}
            handleChange={handleChange}
            handleReplyCreateButtonClick={() => setIsReplyCreateOpen(false)}
          />
        </ReplyCommentBox>
      )}
    </>
  );
}
