import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';

import {
  PasswordChangeWrapper,
  PasswordChgngeBox,
  InputBox,
} from '@/pages/MyPage/PasswordChange/style';

export default function PasswordChange({
  passwordView,
  handlePasswordViewClick,
}) {
  return (
    <PasswordChangeWrapper>
      <PasswordChgngeBox>
        <p>현재 비밀번호</p>
        <InputBox>
          <input maxLength={15} />
          {passwordView ? (
            <div>
              <Eye handlePasswordViewClick={handlePasswordViewClick} />
            </div>
          ) : (
            <div>
              <EyeSlash handlePasswordViewClick={handlePasswordViewClick} />
            </div>
          )}
        </InputBox>
      </PasswordChgngeBox>
      <PasswordChgngeBox>
        <p>새 비밀번호</p>
      </PasswordChgngeBox>
      <PasswordChgngeBox>
        <p>새 비밀번호 확인</p>
      </PasswordChgngeBox>
    </PasswordChangeWrapper>
  );
}
