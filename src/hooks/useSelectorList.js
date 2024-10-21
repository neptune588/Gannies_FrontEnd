import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const navBarOptions = useSelector((state) => state.navBarOptions);
  const auth = useSelector((state) => state.auth);
  const modalsControl = useSelector((state) => state.modalsControl);
  const modalState = useSelector((state) => state.modalState);

  const locations = useSelector((state) => state.locations);

  const { currentActiveMenuNumber, currentBoardType, bannerTitle, bannerDesc } =
    navBarOptions;
  const { isLogin, userId, membershipStatus, nickname, isAdmin } = auth;

  const {
    isHospitalSearchModal,
    isUserBanModal,
    isPostDeleteModal,
    isPostOrCommentReportModal,
    isReportedCotentModal,
    isUserWithdrawModal,
    isItemDeleteModal,
    isUserRejectReasonModal,
    isPostOrCommentDetailModal,
    scrollLocation,
  } = modalsControl;

  const { isApproval, isTempPassword, isSuspended, rejected } = modalState;
  const { comentWrapperLocation } = locations;

  return {
    currentActiveMenuNumber,
    currentBoardType,
    bannerTitle,
    bannerDesc,
    isLogin,
    userId,
    nickname,
    isAdmin,
    membershipStatus,
    isApproval,
    isTempPassword,
    isSuspended,
    rejected,
    isHospitalSearchModal,
    isUserBanModal,
    isPostDeleteModal,
    isPostOrCommentReportModal,
    isReportedCotentModal,
    isUserWithdrawModal,
    isItemDeleteModal,
    isUserRejectReasonModal,
    isPostOrCommentDetailModal,
    scrollLocation,
    comentWrapperLocation,
  };
}
