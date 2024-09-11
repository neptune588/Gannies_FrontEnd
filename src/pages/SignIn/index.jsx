import { useState } from 'react';

import Buttons from '@/pages/SignIn/Buttons';
import Inputs from '@/pages/SignIn/Inputs';
import Title from '@/pages/SignIn/Title';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Title />
      <Inputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginError={loginError}
      />
      <Buttons
        email={email}
        password={password}
        setLoginError={setLoginError}
      />
    </>
  );
}

export default Login;
