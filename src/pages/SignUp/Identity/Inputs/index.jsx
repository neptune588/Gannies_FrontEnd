import { useState } from 'react';

import Name from '@/pages/SignUp/Identity/Inputs/Name';
import PhoneNumber from '@/pages/SignUp/Identity/Inputs/PhoneNumber';
import VerifyNumber from '@/pages/SignUp/Identity/Inputs/VerifyNumber';

function Inputs({ allow, setAllow, visible, setVisible }) {
  const [buttonAllow, setButtonAllow] = useState([false, false]);

  return (
    <>
      <Name allow={allow} setAllow={setAllow} setButtonAllow={setButtonAllow} />
      <PhoneNumber
        allow={allow}
        setAllow={setAllow}
        setVisible={setVisible}
        buttonAllow={buttonAllow}
        setButtonAllow={setButtonAllow}
      />
      {visible[1] && (
        <VerifyNumber
          allow={allow}
          setAllow={setAllow}
          setVisible={setVisible}
        />
      )}
    </>
  );
}

export default Inputs;
