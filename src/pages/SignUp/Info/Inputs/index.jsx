import { useAuthAllow } from '@/hooks/useAuthAllow';
import NextButton from '@/pages/SignUp/components/NextButton';
import Email from '@/pages/SignUp/Info/Inputs/Email';
import Nickname from '@/pages/SignUp/Info/Inputs/Nickname';
import Password from '@/pages/SignUp/Info/Inputs/Password';
import PasswordCheck from '@/pages/SignUp/Info/Inputs/PasswordCheck';
import { handleSignUpData } from '@/store/signUpSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Inputs() {
  const { allow, handleAllow } = useAuthAllow([false, false, false, false]);
  const password = useSelector((state) => state.signUpSlice.password);
  const [passwordCheck, setPasswordCheck] = useState('');
  const dispatch = useDispatch();

  const handleNextButton = () => {
    dispatch(handleSignUpData({ key: 'infoCompleted', value: true }));
  };

  useEffect(() => {
    handleAllow(3, password === passwordCheck);
  }, [password, passwordCheck]);

  return (
    <>
      <Nickname handleAllow={handleAllow} />
      <Email handleAllow={handleAllow} />
      <Password handleAllow={handleAllow} />
      <PasswordCheck
        allow={allow}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
      />
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

export default Inputs;
