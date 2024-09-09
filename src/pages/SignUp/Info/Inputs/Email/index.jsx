import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useState } from 'react';
import { handleSignUpData } from '@/store/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';

function Email({ handleAllow }) {
  const email = useSelector((state) => state.signUpSlice.email);
  const [emailValid, setEmailValid] = useState(false);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    const email = e.target.value;
    dispatch(handleSignUpData({ key: 'email', value: email }));

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);

    setEmailValid(isValid);
    handleAllow(1, isValid);
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
      />
      {email.length > 0 &&
        (emailValid ? (
          <Positive text='유효한 이메일 형식입니다' />
        ) : (
          <Negative text='유효하지 않은 이메일 형식입니다' />
        ))}
    </InputSection>
  );
}

export default Email;
