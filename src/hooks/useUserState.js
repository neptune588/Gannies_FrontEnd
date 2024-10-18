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
    const { nickname } = response.data;
    dispatch(
      setState({
        nickname,
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
    const numStatus = statusToNumber(membershipStatus);
    if (numStatus < numMinStatus) {
      if (numStatus === 1) {
        navigate('/sign-up/success');
      } else if (numStatus === 2) {
        if (rejected) {
          dispatch(
            handleModal({
              field: 'rejected',
              value: { status: rejected, reason: rejectedReason },
            })
          );
          return;
        } else {
          dispatch(
            handleModal({
              field: 'isApproval',
              value: { status: membershipStatus === 'email_verified' },
            })
          );
        }
      } else {
        dispatch(setLogout());
        navigate('/sign-in');
      }
      return;
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
        return;
      }
      navigate(path);
    }
  };

  return { checkState, navigateBasedOnState };
};

export default useUserState;
