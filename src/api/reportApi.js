import { api, cookieApi } from '@/api/axiosInstance';

//신고된 게시물 페이지 단위로 조회
export const getReportedPosts = async (params) => {
  const url = '/reports/posts';
  const response = await cookieApi.get(url, { params });
  return response;
};

//신고된 특정 게시물 조회 (1개)
export const getReportedPost = async (postId) => {
  const url = `/reports/posts/${postId}`;
  const response = await cookieApi.get(url);
  return response;
};

//신고된 게시물 상태 변경
export const setPostStatusChange = async (postData) => {
  const url = `/reports/posts/status`;
  const response = await cookieApi.post(url, postData);
  return response;
};

//신고된 댓글 페이지 단위로 조회
export const getReportedComments = async (params) => {
  const url = `/reports/comments`;
  const response = await cookieApi.get(url, { params });
  return response;
};

//신고된 특정 댓글 조회 (1개)
export const getReportedComment = async (commentId) => {
  const url = `/reports/comments/${commentId}`;
  const response = await cookieApi.get(url);
  return response;
};

//신고된 댓글 상태 변경
export const setCommentStatusChange = async (commentData) => {
  const url = `/reports/comments/status`;
  const response = await cookieApi.post(url, commentData);
  return response;
};
