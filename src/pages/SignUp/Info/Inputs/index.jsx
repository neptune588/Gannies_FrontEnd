import NextButton from '@/pages/SignUp/components/NextButton';
import Email from '@/pages/SignUp/Info/Inputs/Email';
import Nickname from '@/pages/SignUp/Info/Inputs/Nickname';
import Password from '@/pages/SignUp/Info/Inputs/Password';
import PasswordCheck from '@/pages/SignUp/Info/Inputs/PasswordCheck';
import { useEffect, useState } from 'react';

function Inputs() {
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [allow, setAllow] = useState([false, false, false, false]);

  useEffect(() => {
    const state = password === passwordCheck;
    setAllow((prev) => {
      const newAllow = [...prev];
      newAllow[3] = state;
      return newAllow;
    });
  }, [password, passwordCheck]);

  return (
    <>
      <Nickname setAllow={setAllow} />
      <Email setAllow={setAllow} />
      <Password
        password={password}
        setPassword={setPassword}
        setAllow={setAllow}
      />
      <PasswordCheck
        password={password}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
        allow={allow}
        setAllow={setAllow}
      />
      <NextButton
        $margin='80px'
        active={allow.every((element) => element === true)}
        text='다음'
        to='/sign-up/department'
      />
    </>
  );
}

export default Inputs;
