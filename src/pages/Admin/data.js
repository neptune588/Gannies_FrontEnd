import bellDefault from '@/assets/icons/bell/bell_default.svg';
import bellActive from '@/assets/icons/bell/bell_active.svg';
import profileDefault from '@/assets/icons/profile/profile_default.svg';
import profileActive from '@/assets/icons/profile/profile_active.svg';
import checkDefault from '@/assets/icons/check/circle_check_default.svg';
import checkActive from '@/assets/icons/check/circle_check_active.svg';
import documentDefault from '@/assets/icons/document/document_default.svg';
import documentActive from '@/assets/icons/document/document_active.svg';

const adminTabMenuData = [
  {
    label: '신고내역',
    path: '/admin/report-history',
    defaultIcon: bellDefault,
    activeIcon: bellActive,
    defaultAlt: 'bell-default',
    activeAlt: 'bell-active',
  },
  {
    label: '회원관리',
    path: '/admin/member-management',
    defaultIcon: profileDefault,
    activeIcon: profileActive,
    defaultAlt: 'profile-default',
    activeAlt: 'profile-active',
  },
  {
    label: '회원 가입승인',
    path: '/admin/user-approval',
    defaultIcon: checkDefault,
    activeIcon: checkActive,
    defaultAlt: 'check-default',
    activeAlt: 'check-active',
  },
  {
    label: '게시물&댓글 관리',
    path: '/admin/item-management',
    defaultIcon: documentDefault,
    activeIcon: documentActive,
    defaultAlt: 'document-default',
    activeAlt: 'document-active',
  },
];

const reportedPostsHeaderColumns = [
  {
    header: '게시물 ID',
  },
  {
    header: '제목',
  },
  {
    header: '작성자',
  },
  {
    header: '신고자',
  },
  {
    header: '신고일자',
  },
  {
    header: '신고사유',
  },
  {
    header: '상태',
  },
];

const reportedCommentsHeaderColumns = [
  {
    header: '댓글 ID',
  },
  {
    header: '내용',
  },
  {
    header: '작성자',
  },
  {
    header: '신고자',
  },
  {
    header: '신고일자',
  },
  {
    header: '신고사유',
  },
  {
    header: '상태',
  },
];

const memberManagementHeaderColumns = [
  {
    header: '회원 ID',
  },
  {
    header: '닉네임',
  },
  {
    header: '이메일',
  },
  {
    header: '게시글',
  },
  {
    header: '댓글',
  },
  {
    header: '가입날짜',
  },
  {
    header: '관리',
  },
  {
    header: '관리사유',
  },
];

const userApprovalHeaderColumns = [
  {
    header: '순서',
  },
  {
    header: '닉네임',
  },
  {
    header: '이메일',
  },
  {
    header: '가입날짜',
  },
  {
    header: '재학여부',
  },
  {
    header: '첨부파일',
  },
  {
    header: '상태',
  },
];

const postManagementHeaderColumns = [
  {
    header: '게시물 ID',
  },
  {
    header: '카테고리',
  },
  {
    header: '제목',
  },
  {
    header: '작성자',
  },
  {
    header: '작성일자',
  },
];

export {
  adminTabMenuData,
  reportedPostsHeaderColumns,
  reportedCommentsHeaderColumns,
  memberManagementHeaderColumns,
  userApprovalHeaderColumns,
  postManagementHeaderColumns,
};
