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

import { changeUserPassword } from '@/api/userApi';
import useEventHandler from '@/hooks/useEventHandler';

export default function PasswordChange() {
  const { clickChangeState: passwordView, handleClickChange } = useEventHandler(
    { clickChangeDefaultValue: [false, false, false], isArray: true }
  );

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');

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

  const handleModify = async (e) => {
    e.preventDefault();

    try {
      await changeUserPassword({
        oldPassword: currentPassword,
        newPassword: newPassword,
      });
    } catch (error) {
      console.log(error.response);
      alert('비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Title>비밀번호 변경</Title>
      <PasswordChangeWrapper>
        <form>
          <PasswordChangeBox>
            <p>현재 비밀번호</p>
            <InputBox>
              <input
                maxLength={16}
                value={currentPassword}
                onChange={handleCurrentPassword}
                type={passwordView[0] ? 'text' : 'password'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
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
            *영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함한 8-16자
          </NoticeMent>
          <NoticeMent>*특수문자는 '!@#$%^&*?_'만 가능</NoticeMent>
          <PasswordChangeBox>
            <p>새 비밀번호 확인</p>
            <InputBox>
              <input
                maxLength={15}
                value={newPasswordCheck}
                onChange={handleNewPasswordCheck}
                type={passwordView[2] ? 'text' : 'password'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
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
            <button onClick={handleModify}>비밀번호 변경하기</button>
          </EditSaveBox>
        </form>
      </PasswordChangeWrapper>
    </>
  );
}
