import {
  InputBox,
  Wrapper,
  Icon
} from '@/pages/SignIn/Inputs/style';

function Inputs() {
  return (
    <Wrapper>
      <form>
        <InputBox type="text" placeholder='이메일'/>
      </form>
      <form>
        <InputBox type="password" placeholder='비밀번호'/>
        <Icon />
      </form>
    </Wrapper>
  );
}

export default Inputs;