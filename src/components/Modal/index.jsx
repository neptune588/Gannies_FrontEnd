import { useSelector } from 'react-redux';
import Rejected from '@/components/Modal/Rejected';
import IsApproval from '@/components/Modal/IsApproval';
import IsTempPassword from '@/components/Modal/IsTempPassword';
import IsSuspended from '@/components/Modal/IsSuspended';
const Modal = () => {
  const modalState = useSelector((state) => state.modalState);

  return (
    <>
      {modalState.rejected && <Rejected />}
      {modalState.isApproval && <IsApproval />}
      {modalState.isTempPassword && <IsTempPassword />}
      {modalState.isSuspended && <IsSuspended />}
    </>
  );
};

export default Modal;
