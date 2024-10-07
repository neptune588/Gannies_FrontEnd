import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setIsHospitalModal,
  setIsPostDeleteModal,
  setIsUserBanModal,
  setIsPostOrCommentReportModal,
  setSaveScrollLocation,
} from '@/store/modalsControl';

import useSelectorList from '@/hooks/useSelectorList';

export default function useModalsControl() {
  const firstRunBlockToModalEffect = useRef(true);
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    isHospitalSearchModal,
    isPostDeleteModal,
    isUserBanModal,
    isPostOrCommentReportModal,
    scrollLocation,
  } = useSelectorList();

  const handleModalOpen = ({ modalDispatch }) => {
    dispatch(setSaveScrollLocation(window.scrollY));
    dispatch(modalDispatch(true));
  };

  const handleModalClose = ({ modalDispatch }) => {
    dispatch(modalDispatch(false));
    setTimeout(() => {
      window.scroll({ top: scrollLocation, left: 0 });
    }, 10);
  };

  useEffect(() => {
    if (firstRunBlockToModalEffect.current) {
      firstRunBlockToModalEffect.current = false;
      return;
    }

    const modalState =
      isHospitalSearchModal ||
      isPostDeleteModal ||
      isUserBanModal ||
      isPostOrCommentReportModal;

    if (modalState) {
      dispatch(setIsHospitalModal(false));
      dispatch(setIsPostDeleteModal(false));
      dispatch(setIsUserBanModal(false));
      dispatch(setIsPostOrCommentReportModal(false));
    }
  }, [location]);

  return {
    isHospitalSearchModal,
    isPostDeleteModal,
    isUserBanModal,
    isPostOrCommentReportModal,
    handleModalOpen,
    handleModalClose,
  };
}
