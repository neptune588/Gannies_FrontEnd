import Icons from '@/pages/SignUp/components/Icons';
import Inputs from '@/pages/SignUp/Info/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_finished.svg';
import info from '@/assets/icons/etc/info_input_active.svg';
import department from '@/assets/icons/etc/department_verification_inactive.svg';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import NextButton from '@/pages/SignUp/components/NextButton';
import { useAuthAllow } from '@/hooks/useAuthAllow';

function Info() {
  const navigate = useNavigate();
  const { steps, stepsIcon, handleSteps } = useOutletContext();
  const { allow, handleAllow } = useAuthAllow([false, false, false, false]);

  useEffect(() => {
    steps[0] && !steps[1]
      ? navigate('/sign-up/info')
      : navigate('/sign-up/identity');
  }, [steps, navigate]);

  const handleNextButton = () => {
    handleSteps(1, true);
  };

  useEffect(() => {
    console.log(allow);
  }, [allow]);
  return (
    <>
      <Title title='회원가입' />
      <Icons
        identity={identity}
        info={info}
        department={department}
        sequence={stepsIcon[1]}
      />
      <Inputs allow={allow} handleAllow={handleAllow} />
      <NextButton
        $margin='80px'
        active={allow.every((element) => element === true)}
        text='다음'
        to='/sign-up/department'
        onClick={handleNextButton}
      />
    </>
  );
}

export default Info;
