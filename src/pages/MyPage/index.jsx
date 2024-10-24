import IsApproval from '@/components/Toast/IsApproval';
import useUserState from '@/hooks/useUserState';
import { Container } from '@/pages/MyPage/PersonalInfo/style';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { statusToNumber } from '@/utils/statusToNumber';
import IsSuspended from '@/components/Toast/IsSuspended';
import IsTempPassword from '@/components/Toast/IsTempPassword';
import Rejected from '@/components/Toast/Rejected';
import { useDispatch } from 'react-redux';
import { setBoardType } from '@/store/navBarOptions';

function MyPage() {
  const dispatch = useDispatch();
  const { checkState } = useUserState();
  const [toastState, setToastState] = useState({
    isApproval: { status: false },
    isTempPassword: { status: false },
    isSuspended: {
      status: false,
      duration: null,
      endDate: null,
      reason: null,
    },
    rejected: {
      status: false,
      reason: null,
    },
  });
  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          isTempPasswordSignIn,
          isSuspended,
          rejected,
          membershipStatus,
          rejectedReason,
          suspensionDuration,
          suspensionEndDate,
          suspensionReason,
        } = await checkState();

        if (isTempPasswordSignIn) {
          handleToastState('isTempPassword', true);
        }
        if (isSuspended) {
          handleToastState('isSuspended', true, {
            duration: suspensionDuration,
            endDate: suspensionEndDate,
            reason: suspensionReason,
          });
        } else if (rejected) {
          handleToastState('rejected', true, {
            reason: rejectedReason,
          });
        } else if (statusToNumber(membershipStatus) === 2) {
          handleToastState('isApproval', true);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    dispatch(setBoardType({}));
    fetch();
  }, []);

  const handleToastState = (field, status, additionalValues = {}) => {
    setToastState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        status: status,
        ...additionalValues,
      },
    }));
  };

  return (
    <Container>
      {toastState.isApproval.status && (
        <IsApproval handleToastState={handleToastState} />
      )}
      {toastState.isSuspended.status && (
        <IsSuspended
          duration={toastState.isSuspended.duration}
          reason={toastState.isSuspended.reason}
          endDate={toastState.isSuspended.endDate}
          handleToastState={handleToastState}
        />
      )}
      {toastState.rejected.status && (
        <Rejected
          reason={toastState.rejected.reason}
          handleToastState={handleToastState}
        />
      )}
      {toastState.isTempPassword.status && (
        <IsTempPassword handleToastState={handleToastState} />
      )}
      <Outlet />
    </Container>
  );
}

export default MyPage;
