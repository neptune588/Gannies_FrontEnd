import {
  Wrapper,
  SectionWrapper,
  Info
} from '@/pages/SignUp/components/InputSection/style';

function InputSection({ $visible = true,  $margin = '0px', title, children }) {

  return (
    <Wrapper $visible={$visible} $margin={$margin}>
      <SectionWrapper>
        <Info>{title}</Info>
        {children}
      </SectionWrapper>
    </Wrapper>
  );
}

export default InputSection;