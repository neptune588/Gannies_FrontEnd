import Rejected from '@/components/Modal/Rejected';
import IsApproval from '@/components/Modal/IsApproval';
import IsTempPassword from '@/components/Modal/IsTempPassword';
import IsSuspended from '@/components/Modal/IsSuspended';
import useSelectorList from '@/hooks/useSelectorList';
import ExtendSession from '@/components/Modal/ExtendSession';
const Modal = () => {
  const { isApproval, isSuspended, isTempPassword, rejected, extendSession } =
    useSelectorList();
  return (
    <>
      {rejected.status && <Rejected />}
      {isApproval.status && <IsApproval />}
      {isTempPassword.status && <IsTempPassword />}
      {isSuspended.status && <IsSuspended />}
      {extendSession.status && <ExtendSession />}
    </>
  );
};

export default Modal;
