import { useState } from 'react';

import NextButton from '@/pages/SignUp/components/NextButton';
import Document from '@/pages/SignUp/Department/Inputs/Document';
import Status from '@/pages/SignUp/Department/Inputs/Status';

function Inputs() {
  const [allow, setAllow] = useState([false, false]);

  return (
    <>
      <Status setAllow={setAllow} />
      {allow[0] && <Document setAllow={setAllow} />}
      {allow[0] && allow[1] && (
        <NextButton $margin='80px' text='다음' to='/sign-up/success' />
      )}
    </>
  );
}

export default Inputs;
