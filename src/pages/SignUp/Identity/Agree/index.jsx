// import InactiveButton from '@/components/Buttons/AuthButtons/Inactive';
import { CheckBox } from '@/pages/SignUp/Identity/Agree/style';
import {
  Wrapper,
  SectionWrapper,
  Info,
  AgreeWrapper,
  ShowButton
} from '@/pages/SignUp/Identity/Agree/style';

function Agree() {

  const agreeCount = 2;

  return (
    <Wrapper>
      <SectionWrapper>
        <Info>회원약관</Info>
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
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;