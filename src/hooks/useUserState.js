import { checkMemberState } from '@/api/authApi';
import useLoginCheck from '@/hooks/useLoginCheck';
import { setLogout, setState } from '@/store/auth';
import { handleModal } from '@/store/modalState';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useUserState = () => {
  const dispatch = useDispatch();

  const { checkIsLogin } = useLoginCheck();
  const navigate = useNavigate();

  const checkState = async () => {
    const isLogin = await checkIsLogin();
    if (!isLogin) return null;
    const response = await checkMemberState();
    const {
      nickname,
      rejectedReason,
      suspensionDuration,
      suspensionEndDate,
      suspensionReason,
    } = response.data;
    dispatch(
      setState({
        nickname,
        ...(rejectedReason && { rejectedReason }),
        ...(suspensionDuration && { suspensionDuration }),
        ...(suspensionEndDate && { suspensionEndDate }),
        ...(suspensionReason && { suspensionReason }),
      })
    );
    return response.data;
  };

  const navigateBasedOnState = async (
    path,
    minStatus,
    blockSuspended = false
  ) => {
    const numMinStatus = statusToNumber(minStatus);
    const {
      isSuspended,
      rejected,
      membershipStatus,
      rejectedReason,
      suspensionDuration,
      suspensionEndDate,
      suspensionReason,
    } = await checkState();
    const resNumStatus = statusToNumber(membershipStatus);
    if (rejected) {
      dispatch(
        handleModal({
          field: 'rejected',
          value: { status: rejected, reason: rejectedReason },
        })
      );
      return;
    } else if (blockSuspended && isSuspended) {
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
      return;
    } else if (resNumStatus < numMinStatus) {
      console.log(resNumStatus);
      if (resNumStatus === 1) {
        navigate('/sign-up/success');
      } else if (resNumStatus === 2) {
        dispatch(
          handleModal({
            field: 'isApproval',
            value: { status: membershipStatus === 'email_verified' },
          })
        );
      } else {
        dispatch(setLogout());
        navigate('/sign-in');
      }
      return null;
    } else {
      navigate(path);
    }
  };

  return { checkState, navigateBasedOnState };
};

export default useUserState;
