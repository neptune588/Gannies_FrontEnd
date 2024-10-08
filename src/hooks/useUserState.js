import { checkMemberState } from '@/api/authApi';
import useLoginCheck from '@/hooks/useLoginCheck';
import useSelectorList from '@/hooks/useSelectorList';
import { setLogout, setState } from '@/store/auth';
import { handleModal } from '@/store/modalState';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useUserState = () => {
  const dispatch = useDispatch();
  const { isSuspended, rejected, membershipStatus } = useSelectorList();

  const { checkIsLogin } = useLoginCheck();
  const navigate = useNavigate();

  const checkState = async () => {
    const isLogin = await checkIsLogin();
    if (!isLogin) return null;
    const response = await checkMemberState();
    const data = response.data;
    dispatch(setState(data));
    return data;
  };

  const navigateBasedOnState = async (path, minStatus) => {
    const numMinStatus = statusToNumber(minStatus);
    const numStatus = statusToNumber(membershipStatus);
    if (rejected) {
      dispatch(handleModal({ field: 'rejected', value: rejected }));
      return;
    } else if (isSuspended) {
      alert('정지');
      return;
    }

    if (numStatus < numMinStatus) {
      if (numStatus === 1) {
        navigate('/sign-up/success');
      } else if (numStatus === 2) {
        dispatch(handleModal({ field: 'isApproval', value: true }));
      } else {
        dispatch(setLogout());
        navigate('/sign-in');
      }
      return null;
    }

    const {
      isSuspended: resSuspended,
      rejected: resRejected,
      membershipStatus: resMembershipStatus,
    } = await checkState();
    const resNumStatus = statusToNumber(resMembershipStatus);
    if (resRejected) {
      dispatch(handleModal({ field: 'rejected', value: resRejected }));
      return;
    } else if (resSuspended) {
      alert('정지');
      return;
    }

    if (resNumStatus < numMinStatus) {
      if (resNumStatus === 1) {
        navigate('/sign-up/success');
      } else if (resNumStatus === 2) {
        dispatch(handleModal({ field: 'isApproval', value: true }));
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
