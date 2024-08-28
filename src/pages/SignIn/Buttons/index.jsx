import {
  Wrapper,
  Description,
  LoginOptionsWrapper,
  CheckBox,
  AutoLoginButton,
  FindButton,
  Instruction,
  InstructionPrimary
} from '@/pages/SignIn/Buttons/style';

import NextButton from '@/pages/SignUp/components/NextButton';
import { useState } from "react";
import Modal from "@/pages/SignIn/Buttons/Modal";

function Buttons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const openModal = () => { setIsModalOpen(true); console.log(123)}
  const closeModal = () => setIsModalOpen(false);

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  }

  return (
    <Wrapper>
      {
        isModalOpen ? <Modal closeModal={closeModal} /> : <></>
      }
      <LoginOptionsWrapper>
        <AutoLoginButton onClick={handleAutoLogin}>
          <CheckBox type="checkbox" checked={autoLogin} />
          <Description>자동로그인</Description>
        </AutoLoginButton>
        <FindButton to="/find/id">아이디 / 비밀번호 찾기</FindButton>
      </LoginOptionsWrapper>
      <NextButton $margin="47px" text="로그인" />
      <button  onClick={openModal}>모달 확인</button>
      <Instruction>아직 회원이 아니신가요?&nbsp;&nbsp;<InstructionPrimary to="/sign-up/identity">회원가입</InstructionPrimary></Instruction>
    </Wrapper>
  );
}

export default Buttons;