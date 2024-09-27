import { userSignUpEmailVerify } from '@/api/authApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EmailVerification() {
  const [message, setMessage] = useState('인증 요청 중입니다.');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  useEffect(() => {
    console.log(token, '우아앙');
    const verifyEmail = async () => {
      try {
        // 서버에 인증 요청 보내기
        const response = await userSignUpEmailVerify(token);

        if (response.status === 200) {
          // 성공적으로 인증된 경우
          alert('인증되었습니다!');
          setMessage('인증이 완료되었습니다!');
        } else {
          // 인증 실패
          alert('인증에 실패했습니다.');
          setMessage('인증에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        // 요청 실패 시 처리
        console.error('인증 요청 중 오류 발생:', error);
        alert('인증 요청에 실패했습니다.');
        setMessage('인증 요청에 실패했습니다. 다시 시도해주세요.');
      }
    };

    if (token) {
      verifyEmail(); // 토큰이 존재하면 이메일 인증 요청
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
