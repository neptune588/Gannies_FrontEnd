import VerifyNumber from '@/pages/SignUp/Identity/Inputs/VerifyNumber';
import NextButton from '@/pages/SignUp/components/NextButton';
import Active from '@/pages/Find/components/Active';
import FindBox from '@/pages/Find/components/FindBox';
import Inactive from '@/pages/Find/components/Inactive';
import Wrapper from '@/pages/Find/components/Wrapper';
import { useAuthAllow } from '@/hooks/useAuthAllow';
import Name from '@/pages/Find/ID/Inputs/Name';
import PhoneNumber from '@/pages/Find/ID/Inputs/PhoneNumber';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ID() {
  const { allow, handleAllow } = useAuthAllow([false, false, false]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigator = useNavigate();

  const findID = async () => {
    try {
      // const response = await axios.post('/auth/email', { username: name, phoneNumber });
      navigator('/find/id/success');
    } catch (error) {
      alert('error');
    }
  };

  return (
    <Wrapper>
      <FindBox $margin='30px'>
        <Active type='id' text={'이메일 찾기'} />
        <Inactive type='password' text={'비밀번호 찾기'} />
      </FindBox>
      <Name
        name={name}
        setName={setName}
        allow={allow}
        handleAllow={handleAllow}
      />
      <PhoneNumber
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        allow={allow}
        handleAllow={handleAllow}
      />
      <VerifyNumber
        phoneNumber={phoneNumber}
        allow={allow}
        handleAllow={handleAllow}
      />
      {allow[2] && (
        <NextButton
          $margin='80px'
          text='다음'
          onClick={findID}
          active={allow.every((value) => value === true)}
        />
      )}
    </Wrapper>
  );
}

export default ID;
