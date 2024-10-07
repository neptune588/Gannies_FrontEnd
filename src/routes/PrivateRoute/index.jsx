import { Outlet, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import useUserStatus from '@/hooks/useUserStatus';
import useSelectorList from '@/hooks/useSelectorList';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store/auth';
import { handleModal } from '@/store/modalState';

const PrivateRoute = ({ minStatus }) => {
  const { status } = useSelectorList();
  const { checkStatus } = useUserStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStatus = async () => {
      const resStatus = await checkStatus();
      resStatus !== status && dispatch(setStatus(resStatus));
    };
    fetchStatus();
  }, [checkStatus, status]);

  switch (true) {
    case statusToNumber(status) >= statusToNumber(minStatus):
      return <Outlet />;
    case statusToNumber(status) === 1:
      return <Navigate to='/sign-up/success' replace />;
    case statusToNumber(status) === 2:
      dispatch(handleModal({ field: 'isApproval', value: true }));
      return <Navigate to='/' replace />;
    default:
      return <Navigate to='/sign-in' replace />;
  }
};

export default PrivateRoute;
