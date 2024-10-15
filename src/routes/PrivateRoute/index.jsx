import { Outlet, Navigate } from 'react-router-dom';
import useUserState from '@/hooks/useUserState';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { handleModal } from '@/store/modalState';
import { useEffect, useState } from 'react';
import { setLogout } from '@/store/auth';

const PrivateRoute = ({ minStatus, blockSuspended = false }) => {
  const dispatch = useDispatch();
  const numMinStatus = statusToNumber(minStatus);

  const { checkState } = useUserState();
  const [navigatePath, setNavigatePath] = useState(null);

  useEffect(() => {
    const checkUserState = async () => {
      const {
        isSuspended: resSuspended,
        rejected: resRejected,
        membershipStatus: resMembershipStatus,
      } = await checkState();

      if (resRejected) {
        dispatch(handleModal({ field: 'rejected', value: resRejected }));
        setNavigatePath('/');
      } else if (blockSuspended && resSuspended) {
        alert('정지');
        setNavigatePath('/');
      } else {
        const numResStatus = statusToNumber(resMembershipStatus);
        if (numResStatus >= numMinStatus) {
          setNavigatePath(null);
        } else if (numResStatus === 1) {
          setNavigatePath('/sign-up/success');
        } else if (numResStatus === 2) {
          dispatch(handleModal({ field: 'isApproval', value: true }));
          setNavigatePath('/');
        } else {
          dispatch(setLogout());
          setNavigatePath('/sign-in');
        }
      }
    };

    checkUserState();
  }, []);

  if (navigatePath) {
    return <Navigate to={navigatePath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
