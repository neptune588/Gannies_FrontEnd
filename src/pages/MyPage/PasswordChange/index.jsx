import { useEffect, useState } from 'react';

import {
  Title,
  PasswordChangeWrapper,
  EditSaveBox,
  ActiveButton,
  InactiveButton,
} from '@/pages/MyPage/PasswordChange/style';

import { changeUserPassword } from '@/api/userApi';
import CurrentPassword from '@/pages/MyPage/PasswordChange/CurrentPassword';
import NewPassword from '@/pages/MyPage/PasswordChange/NewPassword';
import NewPasswordCheck from '@/pages/MyPage/PasswordChange/NewPasswordCheck';
import useEventHandler from '@/hooks/useEventHandler';

export default function PasswordChange() {
  const { clickChangeState: passwordView, handleClickChange } = useEventHandler(
    {
      clickChangeDefaultValue: [false, false, false],
      isArray: true,
    }
  );
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [newPasswordInstrIdx, setNewPasswordInstrIdx] = useState(undefined);
  const [allow, setAllow] = useState(false);
  const errorMessage = [
    '현재 비밀번호가 저장된 비밀번호와 일치하지 않습니다.',
    '현재 비밀번호와 새 비밀번호는 서로 달라야 합니다.',
    'newPassword must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*?_])[A-Za-z\\d!@#$%^&*?_]{8,16}$/ regular expression',
  ];
  const [instruction, setInstruction] = useState([
    undefined,
    undefined,
    undefined,
  ]);

  useEffect(() => {
    setAllow(currentPassword && newPassword && newPasswordCheck);
  }, [currentPassword, newPassword, newPasswordCheck]);

  const initState = () => {
    setCurrentPassword('');
    setNewPassword('');
    setNewPasswordCheck('');
    handleInstruction(0, undefined);
    handleInstruction(1, undefined);
    setNewPasswordInstrIdx(undefined);
    handleInstruction(2, undefined);
    handleClickChange(0, false);
    handleClickChange(1, false);
    handleClickChange(2, false);
  };

  const handleInstruction = (index, value) => {
    setInstruction((prev) =>
      prev.map((item, idx) => (idx === index ? value : item))
    );
  };

  const handleModify = async (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordCheck) {
      handleInstruction(2, true);
      return;
    } else {
      handleInstruction(2, undefined);
    }
    try {
      await changeUserPassword({
        oldPassword: currentPassword,
        newPassword: newPassword,
      });
      alert('비밀번호가 성공적으로 변경되었습니다.');
      initState();
    } catch (error) {
      handleInstruction(0, undefined);
      handleInstruction(1, undefined);
      setNewPasswordInstrIdx(undefined);
      handleInstruction(2, undefined);
      const status = error.response.status;
      const message = error.response.data.message;

      if (status === 400) {
        if (message === errorMessage[0]) {
          handleInstruction(0, true);
        } else if (message === errorMessage[1]) {
          handleInstruction(1, true);
          setNewPasswordInstrIdx(0);
        } else if (message[0] === errorMessage[2]) {
          handleInstruction(1, true);
          setNewPasswordInstrIdx(1);
        }
      } else {
        alert('비밀번호 변경 중 에러 발생');
      }
    }
  };

  return (
    <>
      <Title>비밀번호 변경</Title>
      <PasswordChangeWrapper>
        <form>
          <CurrentPassword
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            instruction={instruction[0]}
            passwordView={passwordView[0]}
            handleClickChange={handleClickChange}
          />
          <NewPassword
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            instruction={instruction[1]}
            passwordView={passwordView[1]}
            handleClickChange={handleClickChange}
            newPasswordInstrIdx={newPasswordInstrIdx}
          />
          <NewPasswordCheck
            newPasswordCheck={newPasswordCheck}
            setNewPasswordCheck={setNewPasswordCheck}
            instruction={instruction[2]}
            passwordView={passwordView[2]}
            handleClickChange={handleClickChange}
          />
          <EditSaveBox>
            {allow ? (
              <ActiveButton onClick={handleModify}>
                비밀번호 변경하기
              </ActiveButton>
            ) : (
              <InactiveButton disabled>비밀번호 변경하기</InactiveButton>
            )}
          </EditSaveBox>
        </form>
      </PasswordChangeWrapper>
    </>
  );
}
