import {
  ActiveButton,
  InactiveButton,
  ButtonWrapper
} from '@/pages/SignUp/Department/Inputs/Status/style';

import InputSection from '@/pages/SignUp/components/InputSection';

function Status() {
  
  return (
    <InputSection $margin="15px" title="학적 구분*">
      <ButtonWrapper>
        <ActiveButton>재학생</ActiveButton>  
        <InactiveButton>졸업생</InactiveButton>  
      </ButtonWrapper>
    </InputSection>
  );
}

export default Status;