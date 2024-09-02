import { useState } from 'react';

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
  const [allow, setAllow] = useState([false, false, false, false]);
  const [visible, setVisible] = useState([true, false, false]);

  return (
    <>
      <Title title="회원가입" onClick={() => setAllow('123')} />
      <Icons identity={identity} info={info} department={department} sequence={sequence}/>
      <Inputs allow={allow} setAllow={setAllow} visible={visible} setVisible={setVisible} />
      {
        visible[2] && 
        <>
          <Agree allow={allow} setAllow={setAllow} />
          <NextButton $margin="80px" text="다음" to="/sign-up/info" active={allow.every(value => value === true) ? true : false} />
        </>
      }
    </>
  );
}

export default Identity;