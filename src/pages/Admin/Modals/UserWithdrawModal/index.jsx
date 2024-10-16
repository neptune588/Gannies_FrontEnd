import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  InfoBox,
  InfoBoxTitle,
  ModalCloseButton,
  ConfirmButton,
} from '@/pages/Admin/Modals/UserBanModal/style';

export default function UserWithdrawModal({
  userWithdrawModalProps,
  UserWithdrawReason,
  reset,
  handleValueChange,
  handleUserWithdrawSubmit,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          onClick={() => {
            reset();
          }}
        >
          <img src={close} alt='modal-close-button' />
        </ModalCloseButton>
        <form
          onSubmit={(e) => {
            handleUserWithdrawSubmit(e, 'userWithdraw');
          }}
        >
          <ModalTitle>탈퇴사유입력</ModalTitle>
          <InfoBox>
            <InfoBoxTitle>닉네임</InfoBoxTitle>
            <div>{userWithdrawModalProps.userNickname}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>이메일</InfoBoxTitle>
            <div>{userWithdrawModalProps.userEmail}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>탈퇴 사유</InfoBoxTitle>
            <textarea
              value={UserWithdrawReason}
              onChange={(e) => {
                handleValueChange(e.target.value);
              }}
              placeholder='탈퇴 사유 입력 (300자 이내)'
              maxLength={300}
            />
          </InfoBox>
          <ConfirmButton type='submit' disabled={UserWithdrawReason.length < 1}>
            제출
          </ConfirmButton>
        </form>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          reset();
        }}
      />
    </ModalContainer>
  );
}
