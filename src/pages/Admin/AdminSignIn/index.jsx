import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';

import logo from '@/assets/images/admin_page_logo.png';

import Eye from '@/components/Icons/Eye';
import EyeSlash from '@/components/Icons/EyeSlash';
import CommonLoadingCircle from '@/components/Loading/CommonLoadingCircle';

import {
  Container,
  Wrapper,
  ImageLogo,
  InputBox,
  SubmitButton,
} from '@/pages/Admin/AdminSignIn/style';

import { setAdminLogin } from '@/store/auth';

import { adminSignIn } from '@/api/adminApi';

import { isIncludesWhiteSpaceCheck } from '@/utils/whiteSpaceCheck';

export default function AdminSignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPasswordView, setIsPasswordView] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    control,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm({
    defaultValues: {
      adminEmail: '',
      adminPassword: '',
    },
  });

  const handlePasswordViewClick = () => {
    setIsPasswordView((prev) => !prev);
  };

  const onSubmit = async (data) => {
    if (isSubmit) {
      return;
    }

    const { adminEmail, adminPassword } = data;

    const adminEmailValue = isIncludesWhiteSpaceCheck(adminEmail);
    const adminPasswordValue = isIncludesWhiteSpaceCheck(adminPassword);

    if (adminEmailValue) {
      setError('adminEmail', {
        type: 'manual',
        message: '이메일에 공백이 들어갈 수 없습니다.',
      });
      return;
    }

    if (adminPasswordValue) {
      setError('adminPassword', {
        type: 'manual',
        message: '비밀번호에 공백이 들어갈 수 없습니다.',
      });
      return;
    }

    setIsSubmit(true);

    try {
      const res = await adminSignIn({
        email: adminEmail,
        password: adminPassword,
      });

      const {
        user: { userId, nickname },
      } = res.data;

      dispatch(setAdminLogin({ userId, nickname }));
      navigate('/admin/report-history');
    } catch (error) {
      //400: 잘못된 요청입니다.
      //401: 비밀번호가 일치하지 않습니다.
      //403: 관리자 계정이 아닙니다.
      //404: 해당 회원이 존재하지 않습니다.
      console.error(error);

      if (error.response && error.response.status === 401) {
        setError('adminPassword', {
          type: 'manual',
          message: error.response.data.message,
        });
      } else if (error.response) {
        setError('formError', {
          type: 'manual',
          message: error.response.data.message,
        });
      }
    }

    setIsSubmit(false);
  };

  const emailValue = useWatch({
    control, // useWatch에 control 객체 전달
    name: 'adminEmail', // 감시할 필드 이름
  });

  const passwordValue = useWatch({
    control, // useWatch에 control 객체 전달
    name: 'adminPassword', // 감시할 필드 이름
  });

  return (
    <>
      {isSubmit && <CommonLoadingCircle />}
      <Container>
        <Wrapper>
          <ImageLogo
            onClick={() => {
              navigate('/admin/sign-in');
              setValue('adminEmail', '');
              setValue('adminPassword', '');
              clearErrors();
            }}
          >
            <img src={logo} alt='logo' />
          </ImageLogo>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputBox>
              <div>
                <input
                  placeholder='이메일'
                  type='text'
                  {...register('adminEmail')}
                />
              </div>
              <p>{errors.adminEmail?.message}</p>
            </InputBox>
            <InputBox>
              <div>
                <input
                  id='password-input'
                  placeholder='비밀번호'
                  type={isPasswordView ? 'text' : 'password'}
                  {...register('adminPassword')}
                />
                {isPasswordView ? (
                  <Eye handlePasswordViewClick={handlePasswordViewClick} />
                ) : (
                  <EyeSlash handlePasswordViewClick={handlePasswordViewClick} />
                )}
              </div>
              <p>{errors.adminPassword?.message}</p>
            </InputBox>
            <SubmitButton
              type='submit'
              disabled={!emailValue || !passwordValue}
            >
              로그인
            </SubmitButton>
            <p>{errors.formError?.message}</p>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}
