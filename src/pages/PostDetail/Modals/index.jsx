import { useState, useRef, useEffect } from 'react';
import uuid from 'react-uuid';

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

import useModalsControl from '@/hooks/useModalsControl';
import useEventHandler from '@/hooks/useEventHandler';
import useSelectorList from '@/hooks/useSelectorList';

import { reportReason } from '@/pages/PostDetail/Modals/data';

import { reportComment } from '@/api/commentApi';
import { reportPost } from '@/api/postApi';

export function PostDeleteModal({ handlePostDelete, setIsMorePopup }) {
  const { handleModalClose } = useModalsControl();
  const handleClose = () => {
    handleModalClose({ modalName: 'isPostDeleteModal' });
    setIsMorePopup(false);
  };

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
          <CancelButton type='button' onClick={handleClose}>
            취소
          </CancelButton>
          <ConfirmButton type='button' onClick={handlePostDelete}>
            확인
          </ConfirmButton>
        </ButtonBox>
        <ModalCloseButton onClick={handleClose}>
          <img src={close} alt='close-button' />
        </ModalCloseButton>
      </DelteAndReportModalBox>
      <ModalCloseArea handleModalClose={handleClose} />
    </ModalContainer>
  );
}

export function ReportModal({
  contentType,
  reportedContent,
  curruentReportData,
  setIsMorePopup,
}) {
  const { handleModalClose } = useModalsControl();

  const [currentStep, setCurrentStep] = useState(1);
  const handleClose = () => {
    handleModalClose({ modalName: 'isPostOrCommentReportModal' });
    setIsMorePopup(false);
  };

  return (
    <ModalContainer>
      {currentStep === 1 ? (
        <DelteAndReportModalBox>
          <img src={warn} alt='close-button' />
          <h2>{contentType === 'post' ? '게시물' : '댓글'} 신고</h2>
          <p>
            해당 {contentType === 'post' ? '게시물' : '댓글'}을 신고
            하시겠습니까?
          </p>
          <ButtonBox>
            <CancelButton type='button' onClick={handleClose}>
              취소
            </CancelButton>
            <ConfirmButton
              type='button'
              onClick={() => {
                setCurrentStep(2);
              }}
            >
              확인
            </ConfirmButton>
          </ButtonBox>
          <ModalCloseButton onClick={handleClose}>
            <img src={close} alt='close-button' />
          </ModalCloseButton>
        </DelteAndReportModalBox>
      ) : (
        <ReportModalDetail
          contentType={contentType}
          reportedContent={reportedContent}
          curruentReportData={curruentReportData}
        ></ReportModalDetail>
      )}

      <ModalCloseArea handleModalClose={handleClose} />
    </ModalContainer>
  );
}

export function ReportModalDetail({
  contentType,
  reportedContent,
  curruentReportData,
  setIsMorePopup,
}) {
  const reportReasonInputBox = useRef(null);

  const {
    changeValue: selectedReportReasonOption,
    handleChange: handleReportReasonChange,
  } = useEventHandler({ changeDefaultValue: 'pornography' });

  const { changeValue: etcValue, handleChange: handleEtcValueChange } =
    useEventHandler({ changeDefaultValue: '' });

  const { handleModalClose } = useModalsControl();

  const { currentBoardType } = useSelectorList();

  const [reportReasonOptions] = useState(reportReason);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) {
      return;
    }

    setIsSubmit(true);

    try {
      const condition =
        etcValue.trim() === '' ||
        etcValue.trim() === null ||
        etcValue.trim() === undefined;

      if (selectedReportReasonOption === 'other' && condition) {
        alert('신고 사유를 입력 해주세요!');
        return;
      }

      const data = {
        reportedReason: selectedReportReasonOption,
        otherReportedReason:
          selectedReportReasonOption === 'other' ? etcValue : null,
      };

      //console.log(data, curruentReportData);
      contentType === 'post' &&
        (await reportPost(currentBoardType, curruentReportData.postId, data));
      contentType === 'comment' &&
        (await reportComment(curruentReportData.commentId, data));
      contentType === 'replyComment' &&
        (await reportComment(curruentReportData.replyCommentId, data));

      setIsSubmit(false);
      alert('신고가 정상적으로 접수 되었습니다.');
      handleModalClose({ modalName: 'isPostOrCommentReportModal' });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedReportReasonOption === 'other') {
      reportReasonInputBox.current && reportReasonInputBox.current.focus();
    }
  }, [selectedReportReasonOption]);

  return (
    <form onSubmit={handleSubmit}>
      <ReportDetailModalBox $isContentType={contentType}>
        <h2>신고사유선택</h2>

        <StyledText>
          {contentType === 'post' ? '신고 게시글 제목' : '신고 댓글 내용'}
        </StyledText>
        {contentType === 'post' ? (
          <p>{reportedContent}</p>
        ) : (
          <ReportCommentBox>{reportedContent}</ReportCommentBox>
        )}
        <StyledText>사유선택</StyledText>
        <RadioSection>
          {reportReasonOptions.map((option) => {
            return (
              <RadioBox key={uuid()}>
                <input
                  type={option.type}
                  id={option.id}
                  value={option.value}
                  name={option.name}
                  checked={selectedReportReasonOption === option.reason}
                  onChange={() => {
                    handleReportReasonChange(option.reason);
                  }}
                />
                <label htmlFor={option.id}>{option.value}</label>
              </RadioBox>
            );
          })}
        </RadioSection>
        <StyledText>{'사유입력 (최대 100자)'}</StyledText>
        <ReportReasonBox
          type='text'
          ref={reportReasonInputBox}
          value={etcValue}
          onChange={(e) => handleEtcValueChange(e.target.value)}
          maxLength={100}
          $isDisabled={selectedReportReasonOption !== 'other'}
          disabled={selectedReportReasonOption !== 'other'}
        ></ReportReasonBox>
        <Notice>
          신고된 게시글 밑 댓글은 관리자의 확인 밑
          <br />
          중간이들의 운영방침에 따라 적절히 처리됩니다.
        </Notice>
        <ReportConfirmButton type='submit'>입력완료</ReportConfirmButton>
        <ModalCloseButton
          onClick={() => {
            handleModalClose({
              modalName: 'isPostOrCommentReportModal',
            });
            setIsMorePopup(false);
          }}
        >
          <img src={close} alt='close-button' />
        </ModalCloseButton>
      </ReportDetailModalBox>
    </form>
  );
}
