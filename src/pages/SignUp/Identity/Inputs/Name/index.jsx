import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import { useState } from 'react';

function Name({ allow, setAllow, setButtonAllow }) {
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setAllow((prev) => {
        const newAllow = [...prev];
        newAllow[0] = true;      
        return newAllow;
      });
      setButtonAllow((prev) => {
        const newButtonAllow = [...prev];
        newButtonAllow[0] = true;
        return newButtonAllow;
      });
    }
    else {
      setAllow((prev) => {
        const newAllow = [...prev];
        newAllow[0] = false;  
        return newAllow;
      });   
      setButtonAllow((prev) => {
        const newButtonAllow = [...prev];
        newButtonAllow[0] = false;
        return newButtonAllow;
      });      
    }
  }

  return (
    <InputSection $margin="15px" title="이름*">
      <DefaultInput placeholder="이름을 입력해주세요" value={name} onChange={handleName} disabled={allow[2]} />    
    </InputSection>
  );
}

export default Name;