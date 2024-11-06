import { api, cacheApi, cookieApi } from '@/api/axiosInstance';
import axios from 'axios';

//이메일 중복 확인
export const checkEmailDuplicate = async (email) => {
  const url = '/users/check/email';
  const response = await api.post(url, email);
  return response;
};

//닉네임 중복 확인
export const checkNicknameDuplicate = async (nickname) => {
  const url = '/users/check/nickname';
  const response = await api.post(url, nickname);
  return response;
};

//회원가입
export const userSignUp = async (signUpData) => {
  const url = '/auth/sign-up';
  const response = await api.post(url, signUpData);
  return response;
};

//회원탈퇴
export const userDelete = async () => {
  const url = '/auth/withdrawal';
  const response = await cookieApi.delete(url);
  return response;
};

//로그인
export const userSignIn = async (signInData, autoLogin = {}) => {
  const url = '/auth/sign-in';
  const response = await cookieApi.post(url, signInData, autoLogin);
  return response;
};

//로그아웃
export const userSignOut = async () => {
  const url = '/auth/sign-out';
  const response = await cookieApi.post(url);
  return response;
};

//회원가입 -> 이메일 인증 테스트
export const userSignUpEmailTest = async (email) => {
  const url = '/test-email';
  const response = await api.post(url, email);
  return response;
};

//회원가입 -> 이메일 인증
export const userSignUpEmail = async (email) => {
  const url = '/auth/sign-up/email';
  const response = await api.post(url, email);
  return response;
};

//회원가입 -> 이메일 인증 확인
export const userSignUpEmailVerify = async (token) => {
  const url = `/auth/sign-up/email-verification?token=${token}`;
  const response = await api.get(url);
  return response;
};

//회원가입 -> 휴대폰 인증번호 발급
export const sendPhoneNumber = async (phoneNumber) => {
  const url = '/auth/phone';
  const response = await api.post(url, phoneNumber);
  return response;
};

//회원가입 -> 휴대폰 인증번호 발급 확인
export const sendPhoneNumberVerify = async (phoneNumberData) => {
  const url = '/auth/phone-verification';
  const response = await api.post(url, phoneNumberData);
  return response;
};

//이메일 찾기
export const findEmail = async (emailFindData) => {
  const url = '/auth/email';
  const response = await api.post(url, emailFindData);
  return response;
};

//비밀번호 찾기
export const findPassWord = async (pwFindData) => {
  const url = '/auth/password';
  const response = await api.post(url, pwFindData);
  return response;
};

//사용자 상태 확인
export const userStatusVerify = async (pwFindData) => {
  const url = '/auth/status';
  const response = await api.get(url, pwFindData);
  return response;
};

// 인증서 업로드
export const certificatesImageUpload = async (url, formData) => {
  const response = await axios.post(url, formData);
  return response;
};

//인증서 업로드 하기 위해 필요한 URL 받기
export const getPresignedUrl = async (fileTypeData) => {
  const url = '/files/presigned-url';
  const response = await api.post(url, fileTypeData);
  return response;
};

//받아온 URL에 IMAGE url 보내기
export const s3ImageUpload = async (url, formData) => {
  const response = await axios.post(url, formData);
  return response;
};

//증명서image에서 이름 추출
export const getOCR = async (imageUri) => {
  const url = `/ocr/detect-text`;
  const response = await api.post(url, imageUri);
  return response;
};

//세션 만료 체크(로그인 기한 다됐는지)
export const getSessionStatus = async () => {
  const url = `/auth/session-status`;
  const response = await cacheApi.get(url);
  return response;
};

//회원 상태 확인
export const checkMemberState = async () => {
  const url = `/auth/user-status`;
  const response = await cacheApi.get(url);
  return response;
};

//관리자 계정 확인
export const checkAdminStatus = async () => {
  const url = `/auth/is-admin`;
  const response = await cookieApi.get(url);
  return response;
};
