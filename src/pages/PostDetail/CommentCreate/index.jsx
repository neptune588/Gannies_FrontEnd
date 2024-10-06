import { useState } from 'react';

import {
  CommentInputBox,
  DisabledInputBox,
  ButtonBox,
  CancelButton,
  ConfirmButton,
} from '@/pages/PostDetail/CommentCreate/style';

import useSelectorList from '@/hooks/useSelectorList';

import { createComment } from '@/api/commentApi';
import { createReplyComment } from '@/api/commentApi';

export default function CommentCreate({
  isReplyCreateOpen,
  postId,
  commentId,
  value,
  dataReset,
  handleChange,
  handleReplyCreateButtonClick,
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
      alert('댓글을 입력 해주세요!');
      return;
    }

    setIsSubmit(true);
    try {
      isReplyCreateOpen
        ? await createReplyComment(commentId, {
            content: value,
          })
        : await createComment(currentBoardType, postId, {
            content: value,
          });

      dataReset();
    } catch (error) {
      console.error(error);
    }

    setIsSubmit(false);
  };

  return (
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
        {isReplyCreateOpen && (
          <CancelButton onClick={handleReplyCreateButtonClick}>
            취소
          </CancelButton>
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
  );
}
