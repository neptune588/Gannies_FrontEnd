import { useState } from 'react';

import LoadingCircle from '@/components/LoadingCircle';
import Buttons from '@/pages/SignIn/Buttons';
import Inputs from '@/pages/SignIn/Inputs';
import Title from '@/pages/SignIn/Title';
import { userSignUpEmail } from '@/api/authApi';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <LoadingCircle />}
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
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default Login;
