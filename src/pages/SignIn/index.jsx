import { useState } from 'react';

import Buttons from '@/pages/SignIn/Buttons';
import Inputs from '@/pages/SignIn/Inputs';
import Title from '@/pages/SignIn/Title';
import { userSignUpEmail } from '@/api/authApi';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Title />
      <button
        onClick={async () => {
          const response = await userSignUpEmail('rlatmdgus499@gmail.com');
          console.log(response);
        }}
      >
        이메일
      </button>
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
