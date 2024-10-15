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
    label: '게시물 관리',
    path: '/admin/post-management',
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

const memberManagementData = [
  {
    order: 1,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '해당없음',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 2,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '정지',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 3,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '정지',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 4,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '해당없음',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 5,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '탈퇴',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 6,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '해당없음',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 7,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '탈퇴',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 8,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '해당없음',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 9,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '정지',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
  {
    order: 10,
    nickname: '하이하이',
    email: 'hihi@gmail.com',
    postLength: '100+',
    commentLength: '100+',
    signUpDate: '2024-08-26',
    statusValue: '해당없음',
    managementReason: '너무 깝쳐서',
    innerModalState: false,
  },
];

const userApprovalHeaderColumns = [
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

const userApprovalData = [
  {
    order: 1,
    nickname: '바이바이',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인대기',
    innerModalState: false,
  },
  {
    order: 2,
    nickname: '김두한',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인거절',
    innerModalState: false,
  },
  {
    order: 3,
    nickname: '시라소니',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '졸업생',
    attachedFile: '졸업증명서.jpg',
    statusValue: '승인완료',
    innerModalState: false,
  },
  {
    order: 4,
    nickname: '문영철',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인대기',
    innerModalState: false,
  },
  {
    order: 5,
    nickname: '이정재',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인완료',
    innerModalState: false,
  },
  {
    order: 6,
    nickname: '임화수',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '졸업생',
    attachedFile: '졸업증명서.jpg',
    statusValue: '승인거절',
    innerModalState: false,
  },
  {
    order: 7,
    nickname: '낙화유수',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '졸업생',
    attachedFile: '졸업증명서.jpg',
    statusValue: '승인완료',
    innerModalState: false,
  },
  {
    order: 8,
    nickname: '유지광',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인대기',
    innerModalState: false,
  },
  {
    order: 9,
    nickname: '구마적',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인거절',
    innerModalState: false,
  },
  {
    order: 10,
    nickname: '신마적',
    email: 'hihi@gmail.com',
    signUpDate: '2024-08-26',
    enrollmentStatus: '재학생',
    attachedFile: '재학증명서.jpg',
    statusValue: '승인완료',
    innerModalState: false,
  },
];

const postManagementHeaderColumns = [
  {
    header: '순서',
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

const postManagementData = [
  {
    order: 1,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 2,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 3,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 4,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 5,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 6,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 7,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 8,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 9,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
  {
    order: 10,
    category: '이론정보',
    postTitle: '상대방보다 싸움을 잘하는 24가지 방법',
    contributor: '한마유지로',
    postCreatedDate: '2024-08-26',
    postDeleteSelectState: false,
  },
];
export {
  adminTabMenuData,
  reportedPostsHeaderColumns,
  reportedCommentsHeaderColumns,
  memberManagementHeaderColumns,
  memberManagementData,
  userApprovalHeaderColumns,
  userApprovalData,
  postManagementHeaderColumns,
  postManagementData,
};
