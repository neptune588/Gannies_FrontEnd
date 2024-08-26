import {
  Font,
  Wrapper
} from '@/pages/SignIn/Title/style';

function Title({title}) {
  return (
    <Wrapper>
      <Font>{title}</Font>
    </Wrapper>
  );
}

export default Title;