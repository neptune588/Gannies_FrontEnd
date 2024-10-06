import { useState } from 'react';

import {
  CommentInputBox,
  ButtonBox,
  CommentTypeInfo,
  CancelButton,
  ConfirmButton,
} from '@/pages/PostDetail/CommentCreate/style';

import useSelectorList from '@/hooks/useSelectorList';

import {
  createComment,
  createReplyComment,
  editComment,
  editReplyComment,
} from '@/api/commentApi';

export default function CommentCreate({
  requestType,
  listType,
  isReplyCreateOpen,
  postId,
  commentId,
  replyId,
  value,
  dataReset,
  handleChange,
  handleCreateCancel,
}) {
  const { currentBoardType } = useSelectorList();

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    if (
      value.trim() === '' ||
      value.trim() === null ||
      value.trim() === undefined
    ) {
      alert('내용을 입력 해주세요!');
      return;
    }

    setIsSubmit(true);
    try {
      switch (requestType) {
        case 'create':
          //만든다면 어떤 타입이야? 댓글? 대댓글?
          //답글 작성 창이 열려있다는건(isReplyCreateOpen === true) 답글 작성을 하겠다는 뜻이다
          isReplyCreateOpen
            ? await createReplyComment(commentId, {
                content: value,
              })
            : await createComment(currentBoardType, postId, {
                content: value,
              });
          break;

        case 'edit':
          //답글 수정할래? 댓글 수정할래?
          listType === 'reply'
            ? await editReplyComment(replyId, {
                content: value,
              })
            : await editComment(commentId, {
                content: value,
              });
          break;
      }
      //console.log(value);

      dataReset();
    } catch (error) {
      console.error(error);
    }

    setIsSubmit(false);
  };

  return (
    <>
      {(listType === 'reply' || listType === 'common') && (
        <CommentTypeInfo>
          {requestType === 'create' ? '댓글 작성' : '댓글 수정'}
        </CommentTypeInfo>
      )}

      <form onSubmit={handleSubmit}>
        <CommentInputBox
          type='text'
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          placeholder='자유롭게 댓글을 남겨주세요'
          maxLength={300}
        />
        <ButtonBox>
          {(isReplyCreateOpen ||
            listType === 'reply' ||
            listType === 'common') && (
            <CancelButton onClick={handleCreateCancel}>취소</CancelButton>
          )}
          <ConfirmButton
            type='submit'
            $isDisabled={value?.length === 0 ? true : false}
            disabled={value?.length === 0 ? true : false}
          >
            댓글 등록
          </ConfirmButton>
        </ButtonBox>
      </form>
    </>
  );
}
