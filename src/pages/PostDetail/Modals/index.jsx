import { useState } from 'react';

import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';
import warn from '@/assets/icons/etc/warn.svg';

import {
  DelteAndReportModalBox,
  ButtonBox,
  ConfirmButton,
  CancelButton,
  ModalCloseButton,
  ReportDetailModalBox,
  StyledText,
  ReportPostTitle,
  ReportCommentBox,
  ReportReasonBox,
  RadioSection,
  RadioBox,
  Notice,
  ReportConfirmButton,
} from '@/pages/PostDetail/Modals/style';

import { setIsPostDeleteModal } from '@/store/modalsControl';

import useModalsControl from '@/hooks/useModalsControl';

export function PostDeleteModal({ handlePostDelete }) {
  const { handleModalClose } = useModalsControl();
  return (
    <ModalContainer>
      <DelteAndReportModalBox>
        <img src={warn} alt='close-button' />
        <h2>게시물 삭제</h2>
        <p>
          해당 게시물을 삭제 하시겠습니까?
          <br />
          삭제된 게시물은 복구할 수 없습니다
        </p>
        <ButtonBox>
          <CancelButton
            type='button'
            onClick={() => {
              handleModalClose({ modalDispatch: setIsPostDeleteModal });
            }}
          >
            취소
          </CancelButton>
          <ConfirmButton type='button' onClick={handlePostDelete}>
            확인
          </ConfirmButton>
        </ButtonBox>
        <ModalCloseButton
          onClick={() => {
            handleModalClose({ modalDispatch: setIsPostDeleteModal });
          }}
        >
          <img src={close} alt='close-button' />
        </ModalCloseButton>
      </DelteAndReportModalBox>
      <ModalCloseArea
        handleModalClose={() => {
          handleModalClose({ modalDispatch: setIsPostDeleteModal });
        }}
      />
    </ModalContainer>
  );
}

export function ReportModal() {
  return (
    <ModalContainer>
      <DelteAndReportModalBox>
        <h2>게시물 신고</h2>
        <p>해당 게시물을 신고 하시겠습니까?</p>
        <ButtonBox>
          <CancelButton type='button'>취소</CancelButton>
          <ConfirmButton type='button'>확인</ConfirmButton>
        </ButtonBox>
        <ModalCloseButton>
          <img src={close} alt='close-button' />
        </ModalCloseButton>
      </DelteAndReportModalBox>
      <ModalCloseArea />
    </ModalContainer>
  );
}

export function ReportModalDetail({ type }) {
  return (
    <ReportDetailModalBox>
      <h2>신고사유입력</h2>
      <p>신고사유를 정확하고 자세히 입력 해주세요.</p>
      <StyledText>
        {type === 'post' ? '신고 게시글 제목' : '신고 댓글 내용'}
      </StyledText>
      <StyledText>사유선택</StyledText>
      {/*       <label>
        <input type='radio'></input>
      </label> */}
      <ModalCloseButton>
        <img src={close} alt='close-button' />
      </ModalCloseButton>
    </ReportDetailModalBox>
  );
}
