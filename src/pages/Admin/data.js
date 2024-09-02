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

const reportedHeaderColumns = [
  {
    header: '순서',
  },
  {
    header: '제목',
  },
  {
    header: '작성자',
  },
  {
    header: '신고일자',
  },
  {
    header: '신고자',
  },
  {
    header: '신고사유',
  },
  {
    header: '상태',
  },
];

const reportedData = [
  {
    order: 1,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리 중',
    processingModalState: false,
    handler: true,
  },
  {
    order: 2,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리완료',
    processingModalState: false,
  },
  {
    order: 3,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리완료',
    processingModalState: false,
  },
  {
    order: 4,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '신고반려',
    processingModalState: false,
  },
  {
    order: 5,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리 중',
    processingModalState: false,
  },
  {
    order: 6,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리완료',
    processingModalState: false,
  },
  {
    order: 7,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리 중',
    processingModalState: false,
  },
  {
    order: 8,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리 중',
    processingModalState: false,
  },
  {
    order: 9,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '처리 중',
    processingModalState: false,
  },
  {
    order: 10,
    contents: '우짤래미***',
    contributor: '욕쟁이할아범',
    complainant: '악성민원인',
    reportDate: '2024-02-04',
    reportDetail: '욕을 너무 많이해서 신고 했습니다.',
    processingStatus: '신고반려',
    processingModalState: false,
  },
];

export { adminTabMenuData, reportedHeaderColumns, reportedData };
