import DefaultInput from '@/pages/SignUp/components/DefaultInput';

// import Positive from '@/components/Instruction/Positive';
// import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';

function Email() {
  return (
    <InputSection $margin="37px" title="이메일*">
      <DefaultInput placeholder="예) abc@gmail.com"/>    
    {/* <Positive text="유효한 이메일입니다"/>
    <Negative text="유효한 이메일 주소가 아닙니다"/> */}
    </InputSection>
  );
}

export default Email;