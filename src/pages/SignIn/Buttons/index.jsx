import {
  Wrapper,
  Description,
  LoginButton,
  LoginOptionsWrapper,
  CheckBox,
  AutoLoginButton,
  FindButton
} from '@/pages/SignIn/Buttons/style';

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
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
}

export default Buttons;