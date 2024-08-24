import {
    Font,
    Wrapper,
    Instruction
  } from '@/pages/SignUp/components/Title/style';
  
  function Title({title}) {
    return (
      <Wrapper>
        <Font>{title}</Font>
        <Instruction>환영합니다! 저희 커뮤니티에 가입하여 다양한 정보를 누려보세요!</Instruction>
      </Wrapper>
    );
  }
  
  export default Title;