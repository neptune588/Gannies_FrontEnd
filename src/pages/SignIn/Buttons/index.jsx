import {
  Wrapper,
  Description,
  LoginOptionsWrapper,
  CheckBox,
  AutoLoginButton,
  FindButton,
  Instruction,
  InstructionPrimary,
  ButtonWrapper
} from '@/pages/SignIn/Buttons/style';

import ActiveButton from '@/components/Buttons/AuthButtons/Active';
import InactiveButton from '@/components/Buttons/AuthButtons/Inactive';

function Buttons() {

 return (
    <Wrapper>
      <LoginOptionsWrapper>
        <AutoLoginButton>
          <CheckBox type="checkbox" />
          <Description>자동로그인</Description>
        </AutoLoginButton>
        <FindButton>아이디 / 비밀번호 찾기</FindButton>
      </LoginOptionsWrapper>
      <ButtonWrapper>
        <InactiveButton text="로그인"></InactiveButton>       
        {/* <ActiveButton text="로그인"></ActiveButton> */}
      </ButtonWrapper>
      <Instruction>아직 회원이 아니신가요?&nbsp;&nbsp;<InstructionPrimary to="/sign-up/identity">회원가입</InstructionPrimary></Instruction>
    </Wrapper>
  );
}

export default Buttons;