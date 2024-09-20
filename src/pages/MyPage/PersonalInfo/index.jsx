import {
  Title,
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
} from '@/pages/MyPage/PersonalInfo/style';
import { useState } from 'react';

export default function PersonalInfo() {
  const [nickname, setNickname] = useState('');

  const handleNickname = (e) => {
    const nickname = e.target.value;
    setNickname(nickname);
  };

  return (
    <>
      <Title>회원정보수정</Title>
      <PersonalInfoWrapper>
        <form>
          <NicknameEditBox>
            <p>닉네임</p>
            <div>
              <input
                placeholder='닉네임 입력'
                value={nickname}
                onChange={handleNickname}
                maxLength={10}
              />
              <button disabled>수정하기</button>
            </div>
          </NicknameEditBox>
          <PersonalInfoBox>
            <p>이름</p>
            <p>홍길동</p>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <p>휴대폰번호</p>
            <p>0101234567</p>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <p>이메일</p>
            <p>hihi@gmail.com</p>
          </PersonalInfoBox>
          <EditSaveAndAccountDeleteBox>
            <button disabled>저장하기</button>
            <button disabled>회원탈퇴</button>
          </EditSaveAndAccountDeleteBox>
        </form>
      </PersonalInfoWrapper>
    </>
  );
}
