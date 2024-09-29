import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleModal } from '@/store/modalState';

const PrivateRoute = () => {
  const { membershipStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    membershipStatus === 'email_verified' &&
      dispatch(handleModal({ field: 'isApproval', value: true }));
    console.log(123, membershipStatus);
  }, [membershipStatus]);

  return membershipStatus === 'email_verified' ? (
    <Navigate to='/' replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
