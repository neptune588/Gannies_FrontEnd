import { userSignUpEmailVerify } from '@/api/authApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EmailVerification() {
  const [message, setMessage] = useState('인증 요청 중입니다.');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await userSignUpEmailVerify(token);

        if (response.status === 200) {
          alert('인증되었습니다!');
          setMessage('인증이 완료되었습니다!');
        } else {
          alert('인증에 실패했습니다.');
          setMessage('인증에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        alert('인증 요청에 실패했습니다.');
        setMessage('인증 요청에 실패했습니다. 다시 시도해주세요.');
      }
    };

    if (token) {
      verifyEmail();
    }
  }, []);
  return (
    <>
      <div>
        <h4>이메일 인증 페이지</h4>
        <p>{message}</p>
      </div>
    </>
  );
}

export default EmailVerification;
