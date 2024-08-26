// import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';
import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';

function Nickname() {
  return (
    <InputSection $margin="10px" title="닉네임*">
      <DefaultInput placeholder="닉네임을 입력해주세요"/>
      <Instruction text="*중복되지않는 한글 또는 영문 2-8자를 입력해주세요" />
      <Instruction text="*숫자 및 특수문자 불가" />
      {/* <Positive text="사용가능한 닉네임입니다"/> */}
    </InputSection>
  );
}

export default Nickname;