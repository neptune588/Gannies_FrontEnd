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

  const checkLoginStatus = async (isAdminPage) => {
    try {
      const response = await getSessionStatus();
      const { expires } = response.data;
      if (expires) {
        dispatch(setLogout());

        alert('접속이 만료되었습니다. 다시 로그인 해주세요.');
        isAdminPage ? navigate('/admin/sign-in') : navigate('/sign-in');
      } else {
        return true;
      }
    } catch (error) {
      console.error('Login status check failed', error);
      dispatch(setLogout());
    }
  };

  const checkIsLogin = ({ isAdminPage = false } = {}) => {
    if (!isLogin) {
      isAdminPage ? navigate('/admin/sign-in') : navigate('/sign-in');
    } else {
      return checkLoginStatus(isAdminPage);
    }
  };

  const boolIsLogin = () => {
    if (!isLogin) {
      return false;
    }
    return true;
  };

  return {
    checkIsLogin,
    boolIsLogin,
  };
};

export default useLoginCheck;
