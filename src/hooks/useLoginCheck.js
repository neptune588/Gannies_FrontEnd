import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getSessionStatus } from '@/api/authApi';
import { setLogout } from '@/store/auth';

import useSelectorList from '@/hooks/useSelectorList';

import { userSignOut } from '@/api/authApi';

const useLoginCheck = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin } = useSelectorList();

  const checkLoginStatus = async () => {
    try {
      const response = await getSessionStatus();
      const { expires } = response.data;

      if (expires) {
        await userSignOut();
        dispatch(setLogout());

        const notice = confirm('접속이 만료되었습니다. 다시 로그인 해주세요.');
        notice && navigate('/sign-in');
      } else {
        return true;
      }
    } catch (error) {
      console.error('Login status check failed', error);
      dispatch(setLogout());
    }
  };

  const checkIsLogin = () => {
    if (!isLogin) {
      const notice = confirm('로그인을 하셔야 이용이 가능합니다!');
      notice && navigate('/sign-in');
    } else {
      return checkLoginStatus();
    }
  };

  return {
    checkIsLogin,
  };
};

export default useLoginCheck;
