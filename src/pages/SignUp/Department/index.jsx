import Inputs from '@/pages/SignUp/Department/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_finished.svg';
import info from '@/assets/icons/etc/info_input_finished.svg';
import department from '@/assets/icons/etc/department_verification_active.svg';
import NextButton from '@/pages/SignUp/components/NextButton';
import Icons from '@/pages/SignUp/components/Icons';

function Department() {
  const sequence = ['finished', 'finished', 'active'];

  return (
    <>
      <Title title="회원가입" />
      <Icons identity={identity} info={info} department={department} sequence={sequence}/>
      <Inputs />
      <NextButton $margin="80px" text="다음" to="/sign-up/success"/>
   </>
  );
}

export default Department;