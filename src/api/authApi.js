import { api, cookieApi } from '@/api/axiosInstance';

//이메일 중복 확인
export const checkEmailDuplicate = async (email) => {
  const url = '/users/check/email';
  const response = await api.post(url, { email: email });
  return response;
};

//닉네임 중복 확인
export const checkNicknameDuplicate = async (nickname) => {
  const url = '/users/check/nickname';
  const response = await api.post(url, { nickname: nickname });
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
export const userSignIn = async (signInData) => {
  const url = '/auth/sign-in';
  const response = await api.post(url, signInData, { withCredentials: true });
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
  const response = await api.post(url, { email: email });
  return response;
};

//회원가입 -> 이메일 인증
export const userSignUpEmail = async (email) => {
  const url = '/auth/sign-up/email';
  const response = await api.post(url, { email: email });
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

//인증서 업로드 하기 위해 필요한 URL 받기
export const getPresignedUrl = async (fileType) => {
  const url = '/certificates/upload-info';
  const response = await api.post(url, { fileType: fileType });
  return response;
};

//받아온 URL에 IMAGE url 보내기
export const certificatesImageUpload = async (
  presignedUrl,
  imageData,
  fields
) => {
  const formData = new FormData();

  // fields에 있는 각 필드를 FormData에 추가합니다.
  for (const key in fields) {
    formData.append(key, fields[key]);
  }
  // 이미지 데이터 추가
  formData.append('Content-Type', imageData.type);
  formData.append('file', imageData);
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response; // 성공적인 응답 반환
};

//증명서image에서 이름 추출
export const getOCR = async (userId) => {
  const url = `/me/${userId}/name-extraction`;
  const response = await api.post(url);
  return response;
};
