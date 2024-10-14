import Inputs from '@/pages/SignUp/Department/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_finished.svg';
import info from '@/assets/icons/etc/info_input_finished.svg';
import department from '@/assets/icons/etc/department_verification_active.svg';
import Icons from '@/pages/SignUp/components/Icons';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAuthAllow } from '@/hooks/useAuthAllow';
import NextButton from '@/pages/SignUp/components/NextButton';
import {
  certificatesImageUpload,
  getOCR,
  getPresignedUrl,
  userSignUp,
  userSignUpEmail,
} from '@/api/authApi';

function Department() {
  const navigate = useNavigate();
  const { steps, handleSteps, stepsIcon, dataToSend, handleDataToSend } =
    useOutletContext();
  const { allow, handleAllow } = useAuthAllow([false, false]);
  const [file, setFile] = useState('');

  useEffect(() => {
    steps[0] && steps[1]
      ? navigate('/sign-up/department')
      : navigate('/sign-up/identity');
  }, [steps, navigate]);

  const setFormData = ({ fields }) => {
    const formData = new FormData();
    formData.append('Content-Type', file.type);
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('file', file);
    return formData;
  };

  const setCertificationUrl = async (s3Url) => {
    handleDataToSend('certificationDocumentUrl', s3Url);
  };

  const setUsername = async (username) => {
    handleDataToSend('username', username);
  };

  useEffect(() => {
    if (dataToSend.certificationDocumentUrl && dataToSend.username) {
      const signUpProcess = async () => {
        try {
          const data = {
            nickname: '마마미',
            email: 'kseng11@naver.com',
            phoneNumber: '01094238723',
            password: 'Qqwer1234!',
            status: 'current_student',
            certificationDocumentUrl:
              'https://caugannies.s3.ap-northeast-2.amazonaws.com…24/10/14/71c96f52-1492-4b68-b97f-f7b807281a38.png',
            username: '박뀨스',
          };
          await userSignUp(data);
          await userSignUpEmail({
            email: data.email,
          });
          navigate('/sign-up/success', {
            state: { email: data.email },
          });
        } catch (error) {
          alert('회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      };
      signUpProcess();
    }
  }, [dataToSend]);

  const signUp = async () => {
    try {
      handleSteps(2, true);
      const resPresignedUrl = await getPresignedUrl({ fileType: file.type });
      const { url, fields } = resPresignedUrl.data;
      const formData = setFormData({ fields });
      const resS3Url = await certificatesImageUpload(url, formData);
      const s3Url = resS3Url.config.url + fields.key;
      setCertificationUrl(s3Url);
      const ocr = await getOCR({
        imageUri: s3Url,
      });
      setUsername(ocr.data.name);
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Title title='회원가입' />
      <Icons
        identity={identity}
        info={info}
        department={department}
        sequence={stepsIcon[2]}
      />
      <Inputs
        allow={allow}
        handleAllow={handleAllow}
        file={file}
        setFile={setFile}
      />
      {allow[1] && (
        <NextButton
          $margin='80px'
          active={allow.every((element) => element === true)}
          text='다음'
          // to='/sign-up/success'
          onClick={signUp}
        />
      )}
    </>
  );
}

export default Department;
