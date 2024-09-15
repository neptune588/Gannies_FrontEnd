import Inputs from '@/pages/SignUp/Department/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_finished.svg';
import info from '@/assets/icons/etc/info_input_finished.svg';
import department from '@/assets/icons/etc/department_verification_active.svg';
import Icons from '@/pages/SignUp/components/Icons';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAuthAllow } from '@/hooks/useAuthAllow';
import NextButton from '@/pages/SignUp/components/NextButton';

function Department() {
  const navigate = useNavigate();
  const { steps, handleSteps, stepsIcon, dataToSend } = useOutletContext();
  const { allow, handleAllow } = useAuthAllow([false, false]);

  useEffect(() => {
    steps[0] && steps[1]
      ? navigate('/sign-up/department')
      : navigate('/sign-up/identity');
  }, [steps, navigate]);

  const signUp = async () => {
    try {
      handleSteps(2, true);
      // const responseSignUp = await axios.post('/auth/sign-up', { dataToSend });
      // const responseEmail = await axios.post('/auth/sign-up/email', { email: dataToSend.email });
    } catch (error) {
      alert('error');
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
      <Inputs allow={allow} handleAllow={handleAllow} />
      {allow[1] && (
        <NextButton
          $margin='80px'
          active={allow.every((element) => element === true)}
          text='다음'
          to='/sign-up/success'
          onClick={signUp}
        />
      )}
    </>
  );
}

export default Department;
