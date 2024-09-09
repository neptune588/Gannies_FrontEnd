import {
  CommentInputBox,
  DisabledInputBox,
  ButtonBox,
  CancelButton,
  ConfirmButton,
} from '@/pages/PostDetail/CommentCreate/style';

export default function CommentCreate({
  isLogin = true,
  isCommentReply = false,
}) {
  return (
    <>
      {isLogin ? (
        <CommentInputBox placeholder='자유롭게 댓글을 남겨주세요' />
      ) : (
        <DisabledInputBox>
          댓글을 작성 하시려면 로그인이 필요합니다
        </DisabledInputBox>
      )}
      <ButtonBox>
        {isCommentReply && <CancelButton>취소</CancelButton>}
        <ConfirmButton>댓글 등록</ConfirmButton>
      </ButtonBox>
    </>
  );
}
