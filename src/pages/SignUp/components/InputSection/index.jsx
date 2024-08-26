import {
  Wrapper,
  SectionWrapper,
  Info
} from '@/pages/SignUp/components/InputSection/style';

function InputSection({ $margin = '0px', title, children }) {

  return (
    <Wrapper $margin={$margin}>
      <SectionWrapper>
        <Info>{title}</Info>
        {children}
      </SectionWrapper>
    </Wrapper>
  );
}

export default InputSection;