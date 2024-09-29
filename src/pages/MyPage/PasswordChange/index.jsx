import { useState } from 'react';

import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';

import {
  Title,
  PasswordChangeWrapper,
  PasswordChangeBox,
  InputBox,
  NoticeMent,
  EditSaveBox,
} from '@/pages/MyPage/PasswordChange/style';

import useEventHandler from '@/hooks/useEventHandler';

export default function PasswordChange() {
  const { clickChangeState: passwordView, handleClickChange } = useEventHandler(
    { clickChangeDefaultValue: [false, false, false], isArray: true }
  );

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isFocused, setIsFocused] = useState([undefined, false, false]);

  const handleCurrentPassword = (e) => {
    const currentPassword = e.target.value;
    setCurrentPassword(currentPassword);
  };

  const handleNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
  };

  const handleNewPasswordCheck = (e) => {
    const newPasswordCheck = e.target.value;
    setNewPasswordCheck(newPasswordCheck);
  };

  const handleIsFocused = (index, value) => {
    setIsFocused((prev) => {
      const newIsFocused = [...prev];
      newIsFocused[index] = value;
      return newIsFocused;
    });
    console.log(isFocused);
  };

  return (
    <>
      <Title>비밀번호 변경</Title>
      <PasswordChangeWrapper>
        <form>
          <PasswordChangeBox>
            <p>현재 비밀번호</p>
            <InputBox isFocused={isFocused[0]}>
              <input
                maxLength={15}
                value={currentPassword}
                onChange={handleCurrentPassword}
                type={passwordView[0] ? 'text' : 'password'}
                onFocus={() => handleIsFocused(0, true)}
                onBlur={() => handleIsFocused(0, undefined)}
              />
              {passwordView[0] ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleClickChange(0, false);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleClickChange(0, true);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChangeBox>
          <PasswordChangeBox>
            <p>새 비밀번호</p>
            <InputBox>
              <input
                maxLength={15}
                value={newPassword}
                onChange={handleNewPassword}
                type={passwordView[1] ? 'text' : 'password'}
              />
              {passwordView[1] ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleClickChange(1, false);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleClickChange(1, true);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChangeBox>
          <NoticeMent>
            *중복되지 않는 한글 또는 영문 2~8자를 입력 해주세요
          </NoticeMent>
          <NoticeMent>*숫자 및 특수문자 불가</NoticeMent>
          <PasswordChangeBox>
            <p>새 비밀번호 확인</p>
            <InputBox>
              <input
                maxLength={15}
                value={newPasswordCheck}
                onChange={handleNewPasswordCheck}
                type={passwordView[2] ? 'text' : 'password'}
              />
              {passwordView[2] ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleClickChange(2, false);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleClickChange(2, true);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChangeBox>
          <EditSaveBox>
            <button disabled>비밀번호 변경하기</button>
          </EditSaveBox>
        </form>
      </PasswordChangeWrapper>
    </>
  );
}
