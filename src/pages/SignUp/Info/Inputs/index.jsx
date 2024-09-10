import Email from '@/pages/SignUp/Info/Inputs/Email';
import Nickname from '@/pages/SignUp/Info/Inputs/Nickname';
import Password from '@/pages/SignUp/Info/Inputs/Password';
import PasswordCheck from '@/pages/SignUp/Info/Inputs/PasswordCheck';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Inputs({ allow, handleAllow }) {
  const { dataToSend } = useOutletContext();
  const password = dataToSend.password;
  const [passwordCheck, setPasswordCheck] = useState('');

  useEffect(() => {
    handleAllow(3, password === passwordCheck);
  }, [password, passwordCheck]);

  return (
    <>
      <Nickname handleAllow={handleAllow} />
      <Email handleAllow={handleAllow} />
      <Password handleAllow={handleAllow} />
      <PasswordCheck
        allow={allow}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
      />
    </>
  );
}

export default Inputs;
