import {
    Font,
    Wrapper,
    Description
  } from '@/pages/SignUp/components/Title/style';
  
  function Title({title}) {
    return (
      <Wrapper>
        <Font>{title}</Font>
        <Description>환영합니다! 저희 커뮤니티에 가입하여 다양한 정보를 누려보세요!</Description>
      </Wrapper>
    );
  }
  
  export default Title;