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

//신고된 특정 게시물 삭제
export const deleteReportedPost = async (postId) => {
  const url = `/reports/posts/${postId}`;
  const response = await cookieApi.delete(url);
  return response;
};

//신고된 게시물 게시물 상태 처리완료로 변경
export const setPostStatusToCompleted = async (postId) => {
  const url = `/reports/posts/${postId}/complete`;
  const response = await cookieApi.post(url);
  return response;
};

//신고된 게시물 게시물 상태 신고반려로 변경
export const setPostStatusToRejectReport = async (postId) => {
  const url = `/reports/posts/${postId}/reject`;
  const response = await cookieApi.post(url);
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

//신고된 특정 댓글 삭제 (1개)
export const deleteReportedComment = async (commentId) => {
  const url = `/reports/comments/${commentId}`;
  const response = await cookieApi.delete(url);
  return response;
};

//신고된 댓글 댓글 상태 처리완료로 변경
export const setCommentStatusToCompleted = async (commentId) => {
  const url = `/reports/comment/${commentId}/complete`;
  const response = await cookieApi.post(url);
  return response;
};

//신고된 댓글 댓글 상태 신고반려로 변경
export const setCommentStatusToRejectReport = async (commentId) => {
  const url = `/reports/comment/${commentId}/reject`;
  const response = await cookieApi.post(url);
  return response;
};
