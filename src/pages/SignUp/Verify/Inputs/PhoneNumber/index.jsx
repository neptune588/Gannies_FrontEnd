import {
  InputBox,
  Wrapper,
  InputWrapper,
  SectionWrapper,
  Info,
  Button,
  InfoWrapper,
  Select,
  Option
} from '@/pages/SignUp/Verify/Inputs/PhoneNumber/style';

function PhoneNumber() {

  const numberKinds = ["010", "011", "012", "016", "017", "018", "019"];
 
  return (
    <Wrapper>
      <SectionWrapper>
        <Info>휴대폰 번호*</Info>
          <InfoWrapper>
            <Select>
              {
                numberKinds.map((number, e) => {
                  return (
                  <Option value={number} key={e}>{number}</Option>
                  )
                })
              }
            </Select>
            <InputWrapper>
              <InputBox type="text" placeholder='12345678' />  
            </InputWrapper>
            <Button>인증번호 발송</Button>
          </InfoWrapper>
      </SectionWrapper>
    </Wrapper>
  );
}

export default PhoneNumber;