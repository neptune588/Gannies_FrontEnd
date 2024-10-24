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

function CurrentPassword({
  currentPassword,
  setCurrentPassword,
  instruction,
  passwordView,
  handleClickChange,
}) {
  const { isFocused, setIsFocused } = useInputValid(undefined);

  const handleCurrentPassword = (e) => {
    const currentPassword = e.target.value;
    setCurrentPassword(currentPassword);
  };

  return (
    <>
      <PasswordChangeBox>
        <p>현재 비밀번호</p>
        <InputBox $isFocused={isFocused} $isValid={!instruction}>
          <input
            maxLength={16}
            value={currentPassword}
            onChange={handleCurrentPassword}
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
      {instruction && (
        <NoticeMent>
          <Negative
            text={'현재 비밀번호와 입력하신 비밀번호가 일치하지 않습니다.'}
          />
        </NoticeMent>
      )}
    </>
  );
}

export default CurrentPassword;
