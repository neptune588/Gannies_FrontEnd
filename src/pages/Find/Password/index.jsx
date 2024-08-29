import { useState } from "react";

import Name from "@/pages/SignUp/Identity/Inputs/Name";
import NextButton from "@/pages/SignUp/components/NextButton";
import Active from "@/pages/Find/components/Active";
import FindBox from "@/pages/Find/components/FindBox";
import Inactive from "@/pages/Find/components/Inactive";
import Wrapper from "@/pages/Find/components/Wrapper";
import Email from "@/pages/SignUp/Info/Inputs/Email";
import Modal from "@/pages/Find/Password/Modal";

function Password() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  
  return (
    <Wrapper>
      <FindBox $margin="30px">
        <Inactive type="id" text={"이메일 찾기"}/>
        <Active type="password" text={"비밀번호 찾기"} />
      </FindBox>
      <Name />
      <Email />     
      <NextButton $margin="80px" text="다음" to="/find/password/success" />
      <button onClick={openModal}>모달 확인</button>
      {
        isModalOpen && <Modal openModal={openModal} />
      }          
    </Wrapper>
  );
}

export default Password;