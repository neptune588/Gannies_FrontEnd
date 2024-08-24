import Agree from '@/pages/SignUp/Identity/Agree';
import Icons from '@/pages/SignUp/components/Icons';
import Inputs from '@/pages/SignUp/Identity/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_active.svg';
import info from '@/assets/icons/etc/info_input_inactive.svg';
import department from '@/assets/icons/etc/department_verification_inactive.svg';
import NextButton from '@/pages/SignUp/components/NextButton';


function Identity() {
  const sequence = ['active', 'inactive', 'inactive'];

  return (
    <>
      <Title title="회원가입" />
      <Icons identity={identity} info={info} department={department} sequence={sequence}/>
      <Inputs />
      <Agree />
      <NextButton $margin="80px" text="다음" to="/sign-up/info"/>
    </>
  );
}

export default Identity;