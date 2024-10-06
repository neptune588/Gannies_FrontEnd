import { checkMembershipStatus } from '@/api/authApi';
import useLoginCheck from '@/hooks/useLoginCheck';
import { statusToNumber } from '@/utils/statusToNumber';
import { useNavigate } from 'react-router-dom';

const useUserStatus = () => {
  const { checkIsLogin } = useLoginCheck();
  const navigate = useNavigate();

  const checkStatus = async () => {
    const isLogin = await checkIsLogin();
    if (!isLogin) return;
    const response = await checkMembershipStatus();
    const status = response.data.membershipStatus;
    return statusToNumber(status);
  };

  const navigateBasedOnStatus = async (path, minStatus) => {
    const statusNumber = await checkStatus();
    if (statusNumber === null) return;
    if (statusNumber >= statusToNumber(minStatus)) {
      navigate(path);
    } else {
      alert('접근 권한이 없습니다.');
      navigate('/');
    }
  };

  return { checkStatus, navigateBasedOnStatus };
};

export default useUserStatus;
