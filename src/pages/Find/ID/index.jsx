import { useState } from 'react';

import PhoneNumber from '@/pages/SignUp/Identity/Inputs/PhoneNumber';
import Name from '@/pages/SignUp/Identity/Inputs/Name';
import VerifyNumber from '@/pages/SignUp/Identity/Inputs/VerifyNumber';
import NextButton from '@/pages/SignUp/components/NextButton';
import Active from '@/pages/Find/components/Active';
import FindBox from '@/pages/Find/components/FindBox';
import Inactive from '@/pages/Find/components/Inactive';
import Wrapper from '@/pages/Find/components/Wrapper';
import { useAuthAllow } from '@/hooks/useAuthAllow';

function ID() {
  const { allow, handleAllow } = useAuthAllow([false, false, false]);

  const [buttonAllow, setButtonAllow] = useState([false, false]);
  const [visible, setVisible] = useState([true, false]);

  return (
    <Wrapper>
      <FindBox $margin='30px'>
        <Active type='id' text={'이메일 찾기'} />
        <Inactive type='password' text={'비밀번호 찾기'} />
      </FindBox>
      <Name
        allow={allow}
        handleAllow={handleAllow}
        setButtonAllow={setButtonAllow}
      />
      <PhoneNumber
        allow={allow}
        handleAllow={handleAllow}
        setVisible={setVisible}
        buttonAllow={buttonAllow}
        setButtonAllow={setButtonAllow}
      />
      {visible[1] && (
        <>
          <VerifyNumber allow={allow} handleAllow={handleAllow} />
          <NextButton
            $margin='80px'
            text='다음'
            to='/find/id/success'
            active={allow.every((value) => value === true) ? true : false}
          />
        </>
      )}
    </Wrapper>
  );
}

export default ID;
