import {
  InputBox,
  Wrapper,
  InputWrapper,
  SectionWrapper,
  Info,
  Button,
  InfoWrapper,
  Completed
} from '@/pages/SignUp/Verify/Inputs/VerifyNumber/style';

import Clock from '@/components/Icons/Clock';

function VerifyNumber() {
  return (
    <Wrapper>
      <SectionWrapper>
        <Info>인증번호</Info>
        <InfoWrapper>
            <InputWrapper>
            <InputBox type="text" placeholder='인증번호를 입력해주세요' />  
              <Clock time={0} />
            </InputWrapper>
            <Button>인증확인</Button>
        </InfoWrapper>
        <Completed>인증이 완료되었습니다.</Completed>
      </SectionWrapper>
    </Wrapper>
  );
}

export default VerifyNumber;