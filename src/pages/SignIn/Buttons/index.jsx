import { useState } from "react";

import NextButton from '@/pages/SignUp/components/NextButton';
import Modal from "@/pages/SignIn/Buttons/Modal";

import {
  Wrapper,
  FindButton,
  SignUpButton
} from '@/pages/SignIn/Buttons/style';


function Buttons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const openModal = () => { setIsModalOpen(true); console.log(123)}
  const closeModal = () => setIsModalOpen(false);

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  }

  return (
    <>
      {
        isModalOpen ? <Modal closeModal={closeModal} /> : <></>
      }
      <Wrapper>
        <div>
          <button onClick={handleAutoLogin}>
            <input type="checkbox" checked={autoLogin} readOnly/>
            <span>자동로그인</span>
          </button>
          <FindButton to="/find/id">아이디 / 비밀번호 찾기</FindButton>
        </div>
        <NextButton $margin="47px" text="로그인" />
        <span>아직 회원이 아니신가요?&nbsp;&nbsp;<SignUpButton to="/sign-up/identity">회원가입</SignUpButton></span>
        <button onClick={openModal}>모달 확인</button>
      </Wrapper>
    </>      
  );
}

export default Buttons;