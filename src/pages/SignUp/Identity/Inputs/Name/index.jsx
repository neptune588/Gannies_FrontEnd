import InputSection from '@/pages/SignUp/components/InputSection';
import {
  InputBox,
  InputWrapper
} from '@/pages/SignUp/Identity/Inputs/Name/style';

function Name() {
  return (
    <InputSection $margin="10px" title="*이름">
      <InputWrapper>
        <InputBox type="text" placeholder="이름을 입력해주세요" />
      </InputWrapper>
    </InputSection>
  );
}

export default Name;