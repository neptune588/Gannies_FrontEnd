import ActiveButton from '@/components/Buttons/AuthButtons/Active';
// import InactiveButton from '@/components/Buttons/AuthButtons/Inactive';
import { CheckBox } from '@/pages/SignUp/Identity/Agree/style';
import {
  Wrapper,
  SectionWrapper,
  Instruction,
  AgreeWrapper,
  ButtonWrapper,
  ShowButton
} from '@/pages/SignUp/Identity/Agree/style';

function Agree() {

  const agreeCount = 2;

  return (
    <Wrapper>
      <SectionWrapper>
        <Instruction>회원약관</Instruction>
        <AgreeWrapper>
          <CheckBox type="checkbox" />
          <p>전체약관동의</p>
        </AgreeWrapper>
        {
          Array.from({ length: agreeCount }).map((_, index) => (
            <AgreeWrapper key={index}>
              <CheckBox type="checkbox" />
              <span>[필수]</span>
              <p>약관동의</p>
              <ShowButton>약관보기</ShowButton>
            </AgreeWrapper>
          ))
        }      
        <ButtonWrapper>
          {/* <InactiveButton text="다음"></InactiveButton> */}
          <ActiveButton text="다음"></ActiveButton>
        </ButtonWrapper>
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;