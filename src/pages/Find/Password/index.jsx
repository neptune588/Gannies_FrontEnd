import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthAllow } from '@/hooks/useAuthAllow';

import NextButton from '@/pages/SignUp/components/NextButton';
import Active from '@/pages/Find/components/Active';
import FindBox from '@/pages/Find/components/FindBox';
import Inactive from '@/pages/Find/components/Inactive';
import Wrapper from '@/pages/Find/components/Wrapper';
import Modal from '@/pages/Find/Modal';
import Email from '@/pages/Find/Password/Inputs/Email';
import Name from '@/pages/Find/ID/Inputs/Name';
import { findPassWord } from '@/api/authApi';

function Password() {
  const navigate = useNavigate();

  const { allow, handleAllow } = useAuthAllow([false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const findPassword = async () => {
    try {
      const response = await findPassWord({
        username: name,
        email: email,
      });
      navigate('/find/password/success', {
        state: { email: response.data.maskedEmail },
      });
    } catch (error) {
      openModal();
    }
  };

  return (
    <Wrapper>
      <FindBox $margin='30px'>
        <Inactive type='id' text={'이메일 찾기'} />
        <Active type='password' text={'비밀번호 찾기'} />
      </FindBox>
      <Name
        name={name}
        setName={setName}
        allow={allow}
        handleAllow={handleAllow}
      />
      <Email email={email} setEmail={setEmail} handleAllow={handleAllow} />
      <NextButton
        $margin='80px'
        text='다음'
        active={allow[0] && allow[1]}
        onClick={findPassword}
      />
      {isModalOpen && <Modal openModal={openModal} />}
    </Wrapper>
  );
}

export default Password;
