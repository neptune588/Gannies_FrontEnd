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
  lastNumberCalc,
  commentLengthCalc,
  currentPageNumber,
  dataReset,
  handleChange,
  handleCreateCancel,
  nextCommentPageGroupCalc,
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

      //lastNumberCalc o
      //댓글을 달았다는말 -> 고로 제일 마지막 페이지의 마지막 댓글 위치로
      //lastNumberCalc x
      //답글을 달았다는말 -> 고로 현재 페이지의 현재 댓글 위치로

      //lastNumberCalc -> 현재 위치와 상관없이 전체 페이지 마지막 그룹의 마지막 요소
      if (lastNumberCalc) {
        //댓글 10개면 (나눠서 나머지 0이면) 마지막 페이지 넘버 + 1해서 요청

        commentLengthCalc() === 0 /// 댓글이 10개인가?
          ? dataReset({
              commentRequestPage: lastNumberCalc() + 1,
              commentPageGroup: nextCommentPageGroupCalc(),
            })
          : dataReset({
              //lastNumber 12라고 가정하면 group넘버는 0이면 안되니까 업데이트 시켜주기
              commentRequestPage: lastNumberCalc(),
              commentPageGroup: nextCommentPageGroupCalc(),
            });
      } else {
        dataReset({ commentRequestPage: currentPageNumber });
      }
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
