import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setModal, setSaveScrollLocation } from '@/store/modalsControl';

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
    isUserRejectReasonModal,
    isPostOrCommentDetailModal,
    scrollLocation,
  } = useSelectorList();

  const handleModalOpen = ({ modalName }) => {
    dispatch(setSaveScrollLocation(window.scrollY));
    dispatch(setModal({ modalName, modalState: true }));
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = ({ modalName }) => {
    dispatch(setModal({ modalName, modalState: false }));
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
    dispatch(
      setModal({ modalName: 'isHospitalSearchModal', modalState: false })
    );
    dispatch(setModal({ modalName: 'isPostDeleteModal', modalState: false }));
    dispatch(setModal({ modalName: 'isUserBanModal', modalState: false }));
    dispatch(
      setModal({ modalName: 'isPostOrCommentReportModal', modalState: false })
    );
    dispatch(
      setModal({ modalName: 'isReportedCotentModal', modalState: false })
    );
    dispatch(setModal({ modalName: 'isUserWithdrawModal', modalState: false }));
    dispatch(setModal({ modalName: 'isItemDeleteModal', modalState: false }));
    dispatch(
      setModal({ modalName: 'isUserRejectReasonModal', modalState: false })
    );
    document.body.style.overflow = 'auto';
  }, [location]);

  return {
    isHospitalSearchModal,
    isPostDeleteModal,
    isUserBanModal,
    isPostOrCommentReportModal,
    isReportedCotentModal,
    isUserWithdrawModal,
    isItemDeleteModal,
    isUserRejectReasonModal,
    isPostOrCommentDetailModal,
    handleModalOpen,
    handleModalClose,
  };
}
