import {
  InputBox,
  InputWrapper
} from '@/pages/SignUp/Info/Inputs/Password/style';

import InputSection from '@/pages/SignUp/components/InputSection';
// import Positive from '@/components/Instruction/Positive';
import EyeSlash from "@/components/Icons/EyeSlash";

function PasswordCheck() {
  return (
    <InputSection $margin="37px" title="비밀번호 확인*">
      <InputWrapper>
        <InputBox type="text" placeholder='확인을 위해 비밀번호를 입력해주세요' />
        <EyeSlash />
      </InputWrapper>
      {/* <Positive text="사용가능한 닉네임입니다"/> */}
    </InputSection>
  );
}

export default PasswordCheck;