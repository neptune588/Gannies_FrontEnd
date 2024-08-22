import {
  InputBox,
  Wrapper,
  InputWrapper,
  Icon
} from '@/pages/SignIn/Inputs/style';

function Inputs() {
  return (
    <Wrapper>
      <InputWrapper>
        <InputBox type="text" placeholder='이메일'/>
      </InputWrapper>
      <InputWrapper>
        <InputBox type="password" placeholder='비밀번호'/>
        <Icon />
      </InputWrapper>
    </Wrapper>
  );
}

export default Inputs;