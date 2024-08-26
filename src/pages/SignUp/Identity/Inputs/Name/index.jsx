import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';

function Name() {
  return (
    <InputSection $margin="15px" title="이름*">
      <DefaultInput placeholder="이름을 입력해주세요"/>    
    </InputSection>
  );
}

export default Name;