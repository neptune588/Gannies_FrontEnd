import { useState } from 'react';
import uuid from 'react-uuid';

import ModalContainer from '@/components/ModalContainer';
import ModalCloseArea from '@/components/ModalCloseArea';

import close from '@/assets/icons/etc/close.svg';

import {
  ModalWrapper,
  ModalTitle,
  InfoBox,
  InfoBoxTitle,
  RadioSection,
  RadioBox,
  ModalCloseButton,
  ConfirmButton,
} from '@/pages/Admin/Modals/UserBanModal/style';

export default function UserBanModal({
  userBanOptions,
  userBanReason,
  userBanModalProps,
  selectedUserBanWeek,
  modalStateReset,
  handleWeekSelect,
  handleValueChange,
  handleUserBanSubmit,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalCloseButton
          onClick={() => {
            modalStateReset();
          }}
        >
          <img src={close} alt='modal-close-button' />
        </ModalCloseButton>
        <form
          onSubmit={(e) => {
            handleUserBanSubmit(e, 'userBan');
          }}
        >
          <ModalTitle>정지사유입력</ModalTitle>
          <InfoBox>
            <InfoBoxTitle>닉네임</InfoBoxTitle>
            <div>{userBanModalProps.userNickname}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>이메일</InfoBoxTitle>
            <div>{userBanModalProps.userEmail}</div>
          </InfoBox>
          <InfoBox>
            <InfoBoxTitle>정지 사유</InfoBoxTitle>
            <textarea
              placeholder='사유 입력 (300자 이내)'
              value={userBanReason}
              maxLength={300}
              onChange={(e) => {
                handleValueChange(e.target.value);
              }}
            />
          </InfoBox>
          <InfoBoxTitle>기간설정</InfoBoxTitle>
          <RadioSection>
            {userBanOptions.map((option) => {
              return (
                <RadioBox key={uuid()}>
                  <input
                    type={option.type}
                    id={option.id}
                    name={option.name}
                    value={option.value}
                    checked={selectedUserBanWeek === option.week}
                    onChange={() => {
                      handleWeekSelect(option.week);
                    }}
                  ></input>
                  <label htmlFor={option.id}>{option.value}</label>
                </RadioBox>
              );
            })}
          </RadioSection>
          <ConfirmButton type='submit' disabled={userBanReason.length < 1}>
            제출
          </ConfirmButton>
        </form>
      </ModalWrapper>
      <ModalCloseArea
        handleModalClose={() => {
          modalStateReset();
        }}
      />
    </ModalContainer>
  );
}
