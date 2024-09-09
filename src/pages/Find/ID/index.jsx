import VerifyNumber from '@/pages/SignUp/Identity/Inputs/VerifyNumber';
import NextButton from '@/pages/SignUp/components/NextButton';
import Active from '@/pages/Find/components/Active';
import FindBox from '@/pages/Find/components/FindBox';
import Inactive from '@/pages/Find/components/Inactive';
import Wrapper from '@/pages/Find/components/Wrapper';
import { useAuthAllow } from '@/hooks/useAuthAllow';
import Name from '@/pages/Find/ID/Inputs/Name';
import PhoneNumber from '@/pages/Find/ID/Inputs/PhoneNumber';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ID() {
  const { allow, handleAllow } = useAuthAllow([false, false, false]);
  const { name, phoneNumber } = useSelector(
    (state) => state.findIdPasswordSlice
  );
  const navigator = useNavigate();
  const findID = async () => {
    try {
      // const response = await axios.post('/auth/email', { username: name, phoneNumber });
      if (name === 'abc' && phoneNumber === 'abc') {
        navigator('/find/id/success');
      } else {
        alert('error');
      }
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
      <Name allow={allow} handleAllow={handleAllow} />
      <PhoneNumber allow={allow} handleAllow={handleAllow} />
      <VerifyNumber allow={allow} handleAllow={handleAllow} />
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
