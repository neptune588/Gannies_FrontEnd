import {
  InputBox,
  Wrapper,
  InputWrapper,
  SectionWrapper,
  Info
} from '@/pages/SignUp/Verify/Agree/style';

function Agree() {
  return (
    <Wrapper>
      <SectionWrapper>
        <Info>회원약관</Info>
        <InputWrapper>
          <InputBox type="text" placeholder='이름을 입력해주세요'/>
        </InputWrapper>
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;