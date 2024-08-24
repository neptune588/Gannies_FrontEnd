// import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';

import InputSection from '@/pages/SignUp/components/InputSection';
import {
  InputBox,
  InputWrapper
} from '@/pages/SignUp/Info/Inputs/Password/style';

import EyeSlash from "@/components/Icons/EyeSlash";

function Password() {
  return (
    <InputSection $margin="37px" title="비밀번호*">
      <InputWrapper>
        <InputBox type="text" placeholder='이메일' />
        <EyeSlash />
      </InputWrapper>
      <Instruction text="*최소 8자에서 16자의 비밀번호를 입력해주세요" />
      <Instruction text="*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함해주세요" />
      <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
      {/* <Positive text="사용가능한 닉네임입니다"/> */}
    </InputSection>
  );
}

export default Password;