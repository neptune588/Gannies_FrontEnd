import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useInputFocus } from '@/hooks/useInputFocus';

function Email({ handleAllow }) {
  const [email, setEmail] = useState('');
  const { handleDataToSend } = useOutletContext();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validate = (email) => regex.test(email);
  const { isFocused, isValid, handleIsFocused, handleInputBorder } =
    useInputFocus(undefined, validate);

  useEffect(() => {
    handleAllow(1, isValid ? true : false);
  }, [isValid]);

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    handleDataToSend('email', email);
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
        $isFocused={isFocused}
        $isValid={isValid}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBorder(email);
        }}
      />
      {isValid === true ? (
        <Positive text='유효한 이메일 형식입니다' />
      ) : isValid === false ? (
        <Negative text='유효하지 않은 이메일 형식입니다' />
      ) : null}
    </InputSection>
  );
}

export default Email;
