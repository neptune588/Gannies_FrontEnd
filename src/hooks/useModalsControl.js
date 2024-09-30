import { useLocation, useEffect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setIsHospitalModal,
  setIsDeleteModal,
  setIsUserBanModal,
} from '@/store/modalsControl';

import useSelectorList from '@/hooks/useSelectorList';

export default function useModalsControl() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { isHospitalSearchModal, isDeleteModal, isUserBanModal } =
    useSelectorList();

  useEffect(() => {
    const modalState = isHospitalSearchModal || isDeleteModal || isUserBanModal;

    if (modalState) {
      dispatch(setIsHospitalModal(false));
      dispatch(setIsDeleteModal(false));
      dispatch(setIsUserBanModal(false));
    }
  }, [location]);

  return {
    isHospitalSearchModal,
    isDeleteModal,
    isUserBanModal,
  };
}
