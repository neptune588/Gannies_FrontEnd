import bellDefault from '@/assets/icons/bell/bell_default.svg';
import bellActive from '@/assets/icons/bell/bell_active.svg';
import profileDefault from '@/assets/icons/profile/profile_default.svg';
import profileActive from '@/assets/icons/profile/profile_active.svg';
import checkDefault from '@/assets/icons/check/circle_check_default.svg';
import checkActive from '@/assets/icons/check/circle_check_active.svg';
import documentDefault from '@/assets/icons/document/document_default.svg';
import documentActive from '@/assets/icons/document/document_active.svg';

export const adminTabMenuData = [
  {
    content: '신고내역',
    defaultIcon: bellDefault,
    activeIcon: bellActive,
    defaultAlt: 'bell-default',
    activeAlt: 'bell-active',
  },
  {
    content: '회원관리',
    defaultIcon: profileDefault,
    activeIcon: profileActive,
    defaultAlt: 'profile-default',
    activeAlt: 'profile-active',
  },
  {
    content: '회원 가입승인',
    defaultIcon: checkDefault,
    activeIcon: checkActive,
    defaultAlt: 'check-default',
    activeAlt: 'check-active',
  },
  {
    content: '게시물',
    defaultIcon: documentDefault,
    activeIcon: documentActive,
    defaultAlt: 'document-default',
    activeAlt: 'document-active',
  },
];
