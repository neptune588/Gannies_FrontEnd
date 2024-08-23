import {
  InputBox,
  Wrapper,
  InputWrapper,
  SectionWrapper,
  Info,
  Must
} from '@/pages/SignUp/Verify/Inputs/Name/style';

function Name() {
  return (
    <Wrapper>
      <Must>*필수항목</Must>
      <SectionWrapper>
        <Info>이름*</Info>
        <InputWrapper>
          <InputBox type="text" placeholder='이름을 입력해주세요'/>
        </InputWrapper>
      </SectionWrapper>
    </Wrapper>
  );
}

export default Name;