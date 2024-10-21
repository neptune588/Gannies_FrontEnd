import { userSignUpEmailVerify } from '@/api/authApi';
import Fail from '@/pages/EmailVerification/Modal/Fail';
import Success from '@/pages/EmailVerification/Modal/Success';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EmailVerification() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await userSignUpEmailVerify(token);
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        setSuccess(false);
      }
    };
    if (token) {
      verifyEmail();
    }
  }, []);
  return (
    <>
      {success && <Success />}
      {success === false && <Fail />}
    </>
  );
}

export default EmailVerification;
