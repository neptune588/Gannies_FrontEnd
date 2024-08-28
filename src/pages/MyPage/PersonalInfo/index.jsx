import {
  PersonalInfoWrapper,
  PersonalInfoBox,
  NicknameEditBox,
  EditSaveAndAccountDeleteBox,
} from '@/pages/MyPage/PersonalInfo/style';

export default function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <NicknameEditBox>
        <p>이름</p>
        <div>
          <input placeholder='닉네입 입력' maxLength={10} />
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
    </PersonalInfoWrapper>
  );
}
