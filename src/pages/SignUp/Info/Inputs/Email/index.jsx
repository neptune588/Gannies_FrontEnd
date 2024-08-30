import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useState } from 'react';

function Email({setAllow}) {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);  

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);

    setEmailValid(isValid);
    setAllow((prev) => {
      const newAllow = [...prev];
      newAllow[1] = isValid;
      return newAllow;
    });
  }

  return (
    <InputSection $margin="37px" title="이메일*">
      <DefaultInput placeholder="예) abc@gmail.com" onChange={handleEmail} value={email} />    
      {
        email.length > 0 && (emailValid ? 
          <Positive text="유효한 이메일 형식입니다"/> : 
          <Negative text="유효하지 않은 이메일 형식입니다"/>
        )
      }
    </InputSection>
  );
}

export default Email;