import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setIsHospitalModal,
  setIsPostDeleteModal,
  setIsUserBanModal,
  setIsPostOrCommentReportModal,
  setIsReportedCotentModal,
  setIsUserWithdrawModal,
  setIsItemDeleteModal,
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
    isReportedCotentModal,
    isUserWithdrawModal,
    isItemDeleteModal,
    scrollLocation,
  } = useSelectorList();

  const handleModalOpen = ({ modalDispatch }) => {
    dispatch(setSaveScrollLocation(window.scrollY));
    dispatch(modalDispatch(true));
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = ({ modalDispatch }) => {
    dispatch(modalDispatch(false));
    document.body.style.overflow = 'auto';
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
      isPostOrCommentReportModal ||
      isReportedCotentModal ||
      isUserWithdrawModal ||
      isItemDeleteModal;

    if (modalState) {
      dispatch(setIsHospitalModal(false));
      dispatch(setIsPostDeleteModal(false));
      dispatch(setIsUserBanModal(false));
      dispatch(setIsPostOrCommentReportModal(false));
      dispatch(setIsReportedCotentModal(false));
      dispatch(setIsUserWithdrawModal(false));
      dispatch(setIsItemDeleteModal(false));
      document.body.style.overflow = 'auto';
    }
  }, [location]);

  return {
    isHospitalSearchModal,
    isPostDeleteModal,
    isUserBanModal,
    isPostOrCommentReportModal,
    isReportedCotentModal,
    isUserWithdrawModal,
    isItemDeleteModal,
    handleModalOpen,
    handleModalClose,
  };
}
