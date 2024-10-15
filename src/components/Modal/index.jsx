import Rejected from '@/components/Modal/Rejected';
import IsApproval from '@/components/Modal/IsApproval';
import IsTempPassword from '@/components/Modal/IsTempPassword';
import IsSuspended from '@/components/Modal/IsSuspended';
import useSelectorList from '@/hooks/useSelectorList';
const Modal = () => {
  const { isApproval, isSuspended, isTempPassword, rejected } =
    useSelectorList();

  return (
    <>
      {rejected.status && <Rejected />}
      {isApproval.status && <IsApproval />}
      {isTempPassword.status && <IsTempPassword />}
      {isSuspended.status && <IsSuspended />}
    </>
  );
};

export default Modal;
