import {
  InputBox,
  InputWrapper,
} from '@/pages/SignUp/components/DefaultInput/style';

function DefaultInput({ placeholder, isFocused = undefined, ...props }) {
  return (
    <InputWrapper isFocused={isFocused}>
      <InputBox type='text' placeholder={placeholder} {...props} />
    </InputWrapper>
  );
}

export default DefaultInput;
