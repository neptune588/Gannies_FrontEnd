import Inputs from '@/pages/SignUp/Department/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_finished.svg';
import info from '@/assets/icons/etc/info_input_finished.svg';
import department from '@/assets/icons/etc/department_verification_active.svg';
import Icons from '@/pages/SignUp/components/Icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Department() {
  const navigate = useNavigate();
  const sequence = ['finished', 'finished', 'active'];
  const { identityCompleted, infoCompleted } = useSelector(
    (state) => state.signUpSlice
  );

  useEffect(() => {
    identityCompleted && infoCompleted
      ? navigate('/sign-up/department')
      : navigate('/sign-up/identity');
  }, [identityCompleted, infoCompleted, navigate]);

  return (
    <>
      <Title title='회원가입' />
      <Icons
        identity={identity}
        info={info}
        department={department}
        sequence={sequence}
      />
      <Inputs />
    </>
  );
}

export default Department;
