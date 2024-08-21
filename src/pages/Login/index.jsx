import {
 Wrapper,
 Title,
 InputWrapper,
 Input
} from '@/pages/Login/Title/style';

function Login() {
  return (
    <Wrapper>
      <Title>로그인</Title>
    <InputWrapper>
      <Input placeholder='이메일'/>
    </InputWrapper>
    </Wrapper>
  );
}

export default Login;