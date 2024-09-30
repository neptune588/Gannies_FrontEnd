export const getCategoryLabel = (boardType) => {
  switch (boardType) {
    case 'employment':
      return '취업정보';
    case 'event':
      return '이벤트';
    case 'exam':
      return '국가고시준비';
    case 'job':
      return '구인구직';
    case 'notice':
      return '공지사항';
    case 'practice':
      return '실습정보';
    case 'theory':
      return '이론정보';
    default:
      return '메인';
  }
};
