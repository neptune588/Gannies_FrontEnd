import {
  PasswordChangeBox,
  InputBox,
  NoticeMent,
} from '@/pages/MyPage/PasswordChange/style';
import { preventEnterKey } from '@/utils/PreventEnterKey';
import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';
import { useInputValid } from '@/hooks/useInputValid';
import Negative from '@/components/Instruction/Negative';

function NewPassword({
  newPassword,
  setNewPassword,
  instruction,
  passwordView,
  handleClickChange,
  newPasswordInstrIdx,
}) {
  const { isFocused, setIsFocused } = useInputValid(undefined);
  const instructionData = [
    '입력하신 현재 비밀번호와 새 비밀번호가 동일합니다.',
    '유효하지 않은 비밀번호 형식입니다',
  ];
  const handleNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
  };

  return (
    <>
      <PasswordChangeBox>
        <p>새 비밀번호</p>
        <InputBox $isFocused={isFocused} $isValid={!instruction}>
          <input
            maxLength={15}
            value={newPassword}
            onChange={handleNewPassword}
            type={passwordView ? 'text' : 'password'}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onKeyDown={(e) => {
              preventEnterKey(e);
            }}
          />
          {passwordView ? (
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
      {instruction && (
        <NoticeMent>
          <Negative text={instructionData[newPasswordInstrIdx]} />
        </NoticeMent>
      )}
    </>
  );
}

export default NewPassword;
