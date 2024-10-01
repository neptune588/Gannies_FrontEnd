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
