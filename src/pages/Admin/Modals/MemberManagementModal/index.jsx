import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  ModalCloseButton,
} from '@/pages/Admin/Modals/ReportedReviewModal/style';
import {
  InfoArea,
  InfoBox,
} from '@/pages/Admin/Modals/MemberManagementModal/style';
import { InfoBoxTitle } from '@/pages/Admin/Modals/UserBanModal/style';

export default function MemberManagementModal({
  memberManagementDetailModalProps,
  handleModalClose,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          src={close}
          alt={'modal-close-button'}
          onClick={handleModalClose}
        />
        <ModalTitle>회원정보</ModalTitle>
        <InfoArea>
          <InfoBox>
            <InfoBoxTitle>회원 ID</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.userId}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>회원 닉네임</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.nickname}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>작성 게시글 수</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.postCount}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>작성 댓글 수</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.commentCount}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>가입날짜</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.createDate}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>관리상태</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.managementStatus}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>관리사유</InfoBoxTitle>
            <div>{memberManagementDetailModalProps.managementReason}</div>
          </InfoBox>
        </InfoArea>
      </ModalWrapper>
      <ModalCloseArea handleModalClose={handleModalClose} />
    </ModalContainer>
  );
}
