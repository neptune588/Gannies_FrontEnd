import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  InfoBoxTitle,
  ModalCloseButton,
  ConfirmButton,
} from '@/pages/Admin/Modals/UserBanModal/style';
import {
  InfoBox,
  FlexBoxChildInfoBox,
  FlexBox,
} from '@/pages/Admin/Modals/UserRejectReasonModal/style';

export default function UserRejectReasonModal({
  userRejectReasonModalProps,
  rejectReason,
  handleRejectReasonChange,
  handleModalClose,
  handleUserReject,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton onClick={handleModalClose}>
          <img src={close} alt='modal-close-button' />
        </ModalCloseButton>
        <form
          onSubmit={(e) => {
            handleUserReject(e, userRejectReasonModalProps.userId);
          }}
        >
          <ModalTitle>탈퇴사유입력</ModalTitle>
          <InfoBox>
            <InfoBoxTitle>닉네임</InfoBoxTitle>
            <div>{userRejectReasonModalProps.userNickname}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>이메일</InfoBoxTitle>
            <div>{userRejectReasonModalProps.userEmail}</div>
          </InfoBox>
          <FlexBox>
            <FlexBoxChildInfoBox>
              <InfoBoxTitle>재학상태</InfoBoxTitle>
              <div>{userRejectReasonModalProps.userStudentStatus}</div>
            </FlexBoxChildInfoBox>
            <FlexBoxChildInfoBox>
              <InfoBoxTitle>가입일자</InfoBoxTitle>
              <div>{userRejectReasonModalProps.userSignUpDate}</div>
            </FlexBoxChildInfoBox>
          </FlexBox>
          <InfoBox>
            <InfoBoxTitle>거절사유</InfoBoxTitle>
            <textarea
              value={rejectReason}
              placeholder='사유 입력 (300자 이내)'
              maxLength={300}
              onChange={(e) => handleRejectReasonChange(e.target.value)}
            />
          </InfoBox>
          <ConfirmButton type='submit' disabled={rejectReason.length < 1}>
            제출
          </ConfirmButton>
        </form>
      </ModalWrapper>
      <ModalCloseArea handleModalClose={handleModalClose} />
    </ModalContainer>
  );
}
