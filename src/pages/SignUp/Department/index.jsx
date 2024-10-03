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
  getPresignedUrl,
  userSignUp,
  userSignUpEmail,
} from '@/api/authApi';

function Department() {
  const navigate = useNavigate();
  const { steps, handleSteps, stepsIcon, dataToSend } = useOutletContext();
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

  const signUp = async () => {
    try {
      handleSteps(2, true);
      const presignedUrl = await getPresignedUrl({ fileType: file.type });
      const { url, fields, key } = presignedUrl.data;
      const formData = setFormData({ fields });
      await certificatesImageUpload(url, key, formData);
      await userSignUp(dataToSend);
      await userSignUpEmail({
        email: dataToSend.email,
      });
      navigate('/sign-up/success', {
        state: { email: dataToSend.email },
      });
    } catch (error) {
      console.log(error.response);
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
