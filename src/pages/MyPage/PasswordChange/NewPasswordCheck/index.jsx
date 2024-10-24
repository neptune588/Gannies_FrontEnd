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

function NewPasswordCheck({
  newPasswordCheck,
  setNewPasswordCheck,
  instruction,
  passwordView,
  handleClickChange,
}) {
  const { isFocused, setIsFocused } = useInputValid(undefined);

  const handleNewPasswordCheck = (e) => {
    const newPasswordCheck = e.target.value;
    setNewPasswordCheck(newPasswordCheck);
  };

  return (
    <>
      <PasswordChangeBox>
        <p>새 비밀번호 확인</p>
        <InputBox $isFocused={isFocused} $isValid={!instruction}>
          <input
            maxLength={15}
            value={newPasswordCheck}
            onChange={handleNewPasswordCheck}
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
      {instruction && (
        <NoticeMent>
          <Negative text={'비밀번호가 일치하지 않습니다'} />
        </NoticeMent>
      )}
    </>
  );
}

export default NewPasswordCheck;
