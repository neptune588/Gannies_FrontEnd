import Agree from '@/pages/SignUp/Verify/Agree';
import Icons from '@/pages/SignUp/components/Icons';
import Inputs from '@/pages/SignUp/Verify/Inputs';
import Title from '@/pages/SignUp/components/Title';
import identity from '@/assets/icons/etc/identity_verification_active.svg';
import info from '@/assets/icons/etc/info_input_inactive.svg';
import department from '@/assets/icons/etc/department_verification_inactive.svg';


function Verify() {
  const sequence = [true, false, false];

  return (
   <>
     <Title title="회원가입" />
     <Icons identity={identity} info={info} department={department} sequence={sequence}/>
     <Inputs />
     <Agree />
   </>
  );
}

export default Verify;