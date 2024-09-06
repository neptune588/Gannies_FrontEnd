import {
  Wrapper,
  CommentLength,
  CommentCreateBox,
  ConfirmButton,
} from '@/pages/PostDetail/PostCommentCreate/style';

export default function PostCommentCreate({
  commentLength = 0,
  isLogin = true,
}) {
  return (
    <Wrapper>
      <CommentLength>댓글 {commentLength}개</CommentLength>
      <CommentCreateBox>
        {isLogin ? (
          <textarea placeholder='자유롭게 댓글을 남겨주세요' />
        ) : (
          <div>댓글을 작성하시려면 로그인이 필요합니다.</div>
        )}

        <ConfirmButton>댓글 등록</ConfirmButton>
      </CommentCreateBox>
    </Wrapper>
  );
}
