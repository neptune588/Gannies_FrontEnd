import CommentCreate from '@/pages/PostDetail/CommentCreate';
import More from '@/components/Icons/More';
import Clock from '@/components/Icons/Clock';

import commentReplyIcon from '@/assets/icons/etc/comment_reply.svg';

import {
  CommentListWrapper,
  CommenterBox,
  CommentContent,
  CommentMetricBox,
  CommentCreateDateView,
  ReplyCommentCreateButton,
  ReplyCommentBox,
  ReplyIcon,
} from '@/pages/PostDetail/PostCommentArea/PostCommentList/style';

export default function PostCommentList({
  isReplyComment = true,
  commenter = '나는야 작성자',
  comment = '',
  commentCreateDate,
  isReplyCreateOpen = true,
  handleReplyCreateButtonClick = null,
}) {
  return (
    <>
      <CommentListWrapper $isReplyComment={isReplyComment}>
        {isReplyComment && (
          <ReplyIcon>
            <img src={commentReplyIcon} alt='comment-reply-icon' />
          </ReplyIcon>
        )}
        <div>
          <CommenterBox>
            <p>{commenter}</p>
            <More />
          </CommenterBox>
          <CommentContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            possimus aliquam, ipsum earum sed nihil distinctio illo officia iste
            perferendis, culpa expedita incidunt omnis. Natus architecto iste et
            numquam ratione.
          </CommentContent>
          <CommentMetricBox>
            <Clock isVerify={false} />
            <CommentCreateDateView>2024-05-31</CommentCreateDateView>
            <ReplyCommentCreateButton
              $isReplyCreateOpen={isReplyCreateOpen}
              onClick={handleReplyCreateButtonClick || undefined}
            >
              답글쓰기
            </ReplyCommentCreateButton>
          </CommentMetricBox>
        </div>
      </CommentListWrapper>
      {isReplyCreateOpen && (
        <ReplyCommentBox $isReplyComment={isReplyComment}>
          <CommentCreate isCommentReply={true} />
        </ReplyCommentBox>
      )}
    </>
  );
}
