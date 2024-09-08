import {
  InputBox,
  InputWrapper,
} from '@/pages/SignUp/components/DefaultInput/style';

function DefaultInput({ placeholder, ...props }) {
  return (
    <InputWrapper>
      <InputBox type='text' placeholder={placeholder} {...props} />
    </InputWrapper>
  );
}

export default DefaultInput;
