import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setIsHospitalModal,
  setIsPostDeleteModal,
  setIsUserBanModal,
} from '@/store/modalsControl';

import useSelectorList from '@/hooks/useSelectorList';

export default function useModalsControl() {
  const firstRunBlockToModalEffect = useRef(true);
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentScrollLoaction, setCurrentScrollLoaction] = useState(null);
  const { isHospitalSearchModal, isPostDeleteModal, isUserBanModal } =
    useSelectorList();

  const handleModalOpen = ({ modalDispatch }) => {
    setCurrentScrollLoaction(window.scrollY);
    dispatch(modalDispatch(true));
  };

  const handleModalClose = ({ modalDispatch }) => {
    dispatch(modalDispatch(false));
    setTimeout(() => {
      window.scroll({ top: currentScrollLoaction, left: 0 });
    }, 10);
  };

  useEffect(() => {
    if (firstRunBlockToModalEffect.current) {
      firstRunBlockToModalEffect.current = false;
      return;
    }

    const modalState =
      isHospitalSearchModal || isPostDeleteModal || isUserBanModal;

    if (modalState) {
      dispatch(setIsHospitalModal(false));
      dispatch(setIsPostDeleteModal(false));
      dispatch(setIsUserBanModal(false));
    }
  }, [location]);

  return {
    isHospitalSearchModal,
    isPostDeleteModal,
    isUserBanModal,
    handleModalOpen,
    handleModalClose,
  };
}
