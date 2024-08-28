import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useState } from 'react';

function Email() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);  

  const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(e.target.value)) {
          setEmailValid(true);
      } else {
          setEmailValid(false);
    }
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