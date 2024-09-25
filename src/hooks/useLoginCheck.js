import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { handleLogin, handleLogout } from '@/store/auth';

const useCheckLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/api/check-login');
        if (response.status === 200) {
          dispatch(handleLogin(true));
        } else {
          dispatch(handleLogout());
        }
      } catch (error) {
        console.error('Login status check failed', error);
        dispatch(handleLogout());
      }
    };

    checkLoginStatus();
  }, [dispatch]);
};

export default useCheckLogin;
