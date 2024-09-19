import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';

import {
  Title,
  PasswordChangeWrapper,
  PasswordChgngeBox,
  InputBox,
  NoticeMent,
  EditSaveBox,
} from '@/pages/MyPage/PasswordChange/style';

import { useEventHandler } from '@/hooks/useEventHandler';

export default function PasswordChange() {
  const { changeValue: passwordView, handleChange } = useEventHandler({
    changeDefaultValue: true,
  });

  return (
    <>
      <Title>비밀번호 변경</Title>
      <PasswordChangeWrapper>
        <form>
          <PasswordChgngeBox>
            <p>현재 비밀번호</p>
            <InputBox>
              <input maxLength={15} />
              {passwordView ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleChange(true);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleChange(false);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChgngeBox>
          <PasswordChgngeBox>
            <p>새 비밀번호</p>
            <InputBox>
              <input />
              {passwordView ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleChange(true);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleChange(false);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChgngeBox>
          <NoticeMent>
            *중복되지 않는 한글 또는 영문 2~8자를 입력 해주세요
          </NoticeMent>
          <NoticeMent>*숫자 밑 특수문자 불가</NoticeMent>
          <PasswordChgngeBox>
            <p>새 비밀번호 확인</p>
            <InputBox>
              <input />
              {passwordView ? (
                <div>
                  <Eye
                    handlePasswordViewClick={() => {
                      handleChange(true);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <EyeSlash
                    handlePasswordViewClick={() => {
                      handleChange(false);
                    }}
                  />
                </div>
              )}
            </InputBox>
          </PasswordChgngeBox>
          <EditSaveBox>
            <button disabled>비밀번호 변경하기</button>
          </EditSaveBox>
        </form>
      </PasswordChangeWrapper>
    </>
  );
}
