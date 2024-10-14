import { Outlet, Navigate } from 'react-router-dom';
import useSelectorList from '@/hooks/useSelectorList';
import { useEffect, useState } from 'react';
import useLoginCheck from '@/hooks/useLoginCheck';

const SignOutRoute = () => {
  const { isLogin } = useSelectorList();

  const { boolIsLogin } = useLoginCheck();
  const [navigatePath, setNavigatePath] = useState(null);

  useEffect(() => {
    const checkIsLogin = async () => {
      if (isLogin) {
        setNavigatePath('/');
        return;
      }

      const resIsLogin = await boolIsLogin();

      if (resIsLogin) {
        setNavigatePath('/');
      } else {
        setNavigatePath(null);
      }
    };

    checkIsLogin();
  }, []);

  if (navigatePath) {
    return <Navigate to={navigatePath} replace />;
  }

  return <Outlet />;
};

export default SignOutRoute;
