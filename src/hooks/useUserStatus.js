import { checkMembershipStatus } from '@/api/authApi';
import useLoginCheck from '@/hooks/useLoginCheck';
import useSelectorList from '@/hooks/useSelectorList';
import { setStatus } from '@/store/auth';
import { handleModal } from '@/store/modalState';
import { statusToNumber } from '@/utils/statusToNumber';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useUserStatus = () => {
  const dispatch = useDispatch();
  const { status } = useSelectorList();

  const { checkIsLogin } = useLoginCheck();
  const navigate = useNavigate();

  const checkStatus = async () => {
    const isLogin = await checkIsLogin();
    if (!isLogin) return null;
    const response = await checkMembershipStatus();
    const resStatus = response.data.membershipStatus;
    status !== resStatus && dispatch(setStatus(resStatus));
    return resStatus;
  };

  const navigateBasedOnStatus = async (path, minStatus) => {
    if (statusToNumber(status) < statusToNumber(minStatus)) {
      if (status === 'pending_verification') {
        navigate('/sign-up/success');
      } else if (status === 'email_verified') {
        dispatch(handleModal({ field: 'isApproval', value: true }));
      }
      return null;
    }
    const stringStatus = await checkStatus();
    const statusNumber = statusToNumber(stringStatus);
    if (statusNumber === null) return;
    if (statusNumber >= statusToNumber(minStatus)) {
      navigate(path);
    } else {
      alert('접근 권한이 없습니다.');
    }
  };

  return { checkStatus, navigateBasedOnStatus };
};

export default useUserStatus;
