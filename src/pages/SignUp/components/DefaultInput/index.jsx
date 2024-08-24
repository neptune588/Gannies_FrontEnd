import {
  InputBox,
  InputWrapper
} from '@/pages/SignUp/components/DefaultInput/style';

function DefaultInput({placeholder}) {
  return (
    <InputWrapper>
      <InputBox type="text" placeholder={placeholder} />
    </InputWrapper>
  );
}

export default DefaultInput;