import {
  InputBox,
  InputWrapper
} from '@/pages/SignUp/Info/Inputs/Password/style';

import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';
import InputSection from '@/pages/SignUp/components/InputSection';
import EyeSlash from "@/components/Icons/EyeSlash";
import { useState } from 'react';
import Negative from '@/components/Instruction/Negative';

function Password() {
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const handlePassword = (e) => {
    e.target.value = e.target.value.slice(0,16);
    setPassword(e.target.value);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$^&*?_])[A-Za-z\d!@#$^&*?_]{8,16}$/;

    if (regex.test(e.target.value) && e.target.value.length >= 8)  {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  return (
    <InputSection $margin="37px" title="비밀번호*">
      <InputWrapper>
        <InputBox type="password" placeholder='비밀번호를 입력해주세요' onChange={handlePassword}/>
        <EyeSlash />
      </InputWrapper>
      {
        password.length > 0 && passwordValid ?
          <Positive text="사용가능한 비밀번호입니다" />
          : password.length > 0 ?
            <>
              <Instruction text="*최소 8자에서 16자의 비밀번호를 입력해주세요" />
              <Instruction text="*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함해주세요" />
              <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
              <Negative text="비밀번호를 조건에 맞게 다시 입력해주세요" />
            </>
          :
            <>
              <Instruction text="*최소 8자에서 16자의 비밀번호를 입력해주세요" />
              <Instruction text="*영문 대문자, 소문자, 숫자, 특수문자 하나씩을 포함해주세요" />
              <Instruction text="*특수문자는 '!@#$%^&*?_'만 가능" />
            </>
      }
    </InputSection>
  );
}

export default Password;