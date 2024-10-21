import { Outlet, Navigate, useParams } from 'react-router-dom';
import useUserState from '@/hooks/useUserState';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { handleModal } from '@/store/modalState';
import { useEffect, useState } from 'react';
import { setLogout } from '@/store/auth';
import { checkAdminStatus } from '@/api/authApi';

const PrivateRoute = ({
  minStatus,
  blockSuspended = false,
  blockMember = false,
}) => {
  const dispatch = useDispatch();
  const numMinStatus = statusToNumber(minStatus);
  const { boardType } = useParams();
  const { checkState } = useUserState();
  const [navigatePath, setNavigatePath] = useState(null);

  useEffect(() => {
    const checkUserState = async () => {
      if (blockMember && (boardType === 'notice' || boardType === 'event')) {
        const res = await checkAdminStatus();
        if (!res.isAdmin) {
          setNavigatePath('/');
          alert('해당 게시판의 글은 관리자만 작성 가능합니다!');
        }
      }
      const {
        isSuspended,
        rejected,
        membershipStatus,
        rejectedReason,
        suspensionDuration,
        suspensionEndDate,
        suspensionReason,
      } = await checkState();

      const numStatus = statusToNumber(membershipStatus);
      if (numStatus < numMinStatus) {
        if (numStatus === 1) {
          setNavigatePath('/sign-up/success');
        } else if (numStatus === 2) {
          if (rejected) {
            dispatch(
              handleModal({
                field: 'rejected',
                value: { status: rejected, reason: rejectedReason },
              })
            );
            setNavigatePath('/');
          } else {
            dispatch(
              handleModal({
                field: 'isApproval',
                value: { status: membershipStatus === 'email_verified' },
              })
            );
            setNavigatePath('/');
          }
        } else {
          dispatch(setLogout());
          setNavigatePath('/sign-in');
        }
      } else {
        if (blockSuspended && isSuspended) {
          dispatch(
            handleModal({
              field: 'isSuspended',
              value: {
                status: isSuspended,
                duration: suspensionDuration,
                endDate: suspensionEndDate,
                reason: suspensionReason,
              },
            })
          );
          setNavigatePath('/');
        } else {
          setNavigatePath(null);
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
