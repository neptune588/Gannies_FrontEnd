import {
  InputBox,
  Wrapper,
  InputWrapper,
  SectionWrapper,
  Info,
  InputBoxPhoneNumber,
  InputWrapperPhoneNumber,
  Button,
  InfoWrapper,
  Select,
  Option,
  InputWrapperVerifyNumber,
  InputBoxVerifyNumber,
  Time,
  Completed
} from '@/pages/SignUp/Verify/Inputs/style';
import time from '@/assets/icons/etc/time.svg';

function Inputs() {
  return (
    <Wrapper>
      <SectionWrapper>
        <Info>이름*</Info>
        <InputWrapper>
          <InputBox type="text" placeholder='이름을 입력해주세요'/>
        </InputWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Info>휴대폰 번호*</Info>
          <InfoWrapper>
            <Select>
              <Option value="010">010</Option>
              <Option value="011">011</Option>
              <Option value="012">016</Option>            
              <Option value="012">017</Option>
              <Option value="012">018</Option>
              <Option value="012">019</Option>
            </Select>
            <InputWrapperPhoneNumber>
              <InputBoxPhoneNumber type="text" placeholder='12345678' />  
            </InputWrapperPhoneNumber>
            <Button>인증번호 발송</Button>
          </InfoWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Info>인증번호</Info>
        <InfoWrapper>
            <InputWrapperVerifyNumber>
            <InputBoxVerifyNumber type="text" placeholder='인증번호를 입력해주세요' />  
              <img src={time} alt="time"/>
              <Time>3:00</Time>
            </InputWrapperVerifyNumber>
            <Button>인증확인</Button>
        </InfoWrapper>
        <Completed>인증이 완료되었습니다.</Completed>
      </SectionWrapper>
    </Wrapper>
  );
}

export default Inputs;