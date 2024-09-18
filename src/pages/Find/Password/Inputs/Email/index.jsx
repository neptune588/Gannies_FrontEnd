import { useInputBorder } from '@/hooks/useInputBorder';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import InputSection from '@/pages/SignUp/components/InputSection';

function Email({ email, setEmail, handleAllow }) {
  const { isFocused, handleIsFocused } = useInputBorder(undefined);

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    handleAllow(1, true);
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
        $isFocused={isFocused}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
        }}
      />
    </InputSection>
  );
}

export default Email;
