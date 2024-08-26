import {
  Wrapper,
  Description,
  LoginOptionsWrapper,
  CheckBox,
  AutoLoginButton,
  FindButton,
  Instruction,
  InstructionPrimary
} from '@/pages/SignIn/Buttons/style';

import NextButton from '@/pages/SignUp/components/NextButton';

function Buttons() {

 return (
    <Wrapper>
      <LoginOptionsWrapper>
        <AutoLoginButton>
          <CheckBox type="checkbox" />
          <Description>자동로그인</Description>
        </AutoLoginButton>
        <FindButton to="/find/id">아이디 / 비밀번호 찾기</FindButton>
      </LoginOptionsWrapper>
      <NextButton $margin="47px" text="로그인" />
      <Instruction>아직 회원이 아니신가요?&nbsp;&nbsp;<InstructionPrimary to="/sign-up/identity">회원가입</InstructionPrimary></Instruction>
    </Wrapper>
  );
}

export default Buttons;