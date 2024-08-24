import InputSection from '@/pages/SignUp/components/InputSection';
import { ActiveButton, InactiveButton, ButtonWrapper } from '@/pages/SignUp/Department/Inputs/Status/style';

function Document() {
  
  return (
    <InputSection $margin="37px" title="인증서류 업로드*">
      <ButtonWrapper>
        <ActiveButton>재학생</ActiveButton>  
        <InactiveButton>졸업생</InactiveButton>  
      </ButtonWrapper>
    </InputSection>
  );
}

export default Document;