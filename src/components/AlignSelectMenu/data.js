//DESC postID 내림차순 (큰것부터 작은)
//ASC postID 오름차순 (큰것부터 작은)

export const communityPageAlignSelectOptions = [
  {
    label: '최신 순',
    query: {
      sortType: 'DATE',
    },
  },
  {
    label: '좋아요 순',
    query: {
      sortType: 'LIKES',
    },
  },
  {
    label: '오름차순',
    query: {
      sortOrder: 'ASC',
    },
  },
  {
    label: '내림차순',
    query: {
      sortOrder: 'DESC',
    },
  },
];

export const myPageAlignSelectOptions = [
  {
    label: '최신순',
    query: {
      sort: 'latest',
    },
  },
  {
    label: '조회순',
    query: {
      sort: 'popular',
    },
  },
];

export const SearchPageSelectOptions = [
  {
    label: '전체',
    path: 'all',
  },
  {
    label: '이론정보',
    path: 'theory',
  },
  {
    label: '실습정보',
    path: 'practice',
  },
  {
    label: '국가고시준비',
    path: 'exam',
  },
  {
    label: '취업정보',
    path: 'job',
  },
  {
    label: '구인구직',
    path: 'employment',
  },
  {
    label: '이벤트',
    path: 'event',
  },
  {
    label: '공지사항',
    path: 'notice',
  },
];

export const adminPageUserSearchTypes = [
  {
    label: '회원 닉네임',
    query: 'nickname',
  },
  {
    label: '회원 이메일',
    query: 'email',
  },
  {
    label: '회원 고유 ID',
    query: 'userId',
  },
];

export const adminPagePostsSearchTypes = [
  {
    label: '게시글 제목',
    query: 'title',
  },
  {
    label: '작성자',
    query: 'nickname',
  },
  {
    label: '게시글 내용',
    query: 'content',
  },
  {
    label: '게시글 ID',
    query: 'postId',
  },
];

export const adminPageCommentsSearchTypes = [
  {
    label: '원 게시글 제목',
    query: 'title',
  },
  {
    label: '작성자',
    query: 'nickname',
  },
  {
    label: '댓글 내용',
    query: 'content',
  },
  {
    label: '댓글 ID',
    query: 'commentId',
  },
];
