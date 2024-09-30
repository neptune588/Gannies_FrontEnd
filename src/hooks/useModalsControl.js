import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

  const [currentScrollLoaction, setCurrentScrollLoaction] = useState(null);
  const { isHospitalSearchModal, isDeleteModal, isUserBanModal } =
    useSelectorList();

  const handleModalOpen = (modalDispatch, boolean) => {
    setCurrentScrollLoaction(window.scrollY);
    dispatch(modalDispatch(boolean));
    //console.log(currentScrollLoaction);
  };

  const handleModalClose = (modalDispatch, boolean) => {
    dispatch(modalDispatch(boolean));
    setTimeout(() => {
      window.scroll({ top: currentScrollLoaction, left: 0 });
    }, 10);
  };

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
    handleModalOpen,
    handleModalClose,
  };
}
