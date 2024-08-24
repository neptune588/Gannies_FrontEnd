import {
  Wrapper,
  SectionWrapper,
  Instruction
} from '@/pages/SignUp/components/InputSection/style';

function InputSection({ $margin = '0px', title, children }) {

  return (
    <Wrapper $margin={$margin}>
      <SectionWrapper>
        <Instruction>{title}</Instruction>
        {children}
      </SectionWrapper>
    </Wrapper>
  );
}

export default InputSection;