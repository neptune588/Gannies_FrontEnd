import Active from "@/pages/Find/components/Active";
import EmailBox from "@/pages/Find/components/EmailBox";
import FindBox from "@/pages/Find/components/FindBox";
import Inactive from "@/pages/Find/components/Inactive";
import Wrapper from "@/pages/Find/components/Wrapper";

import {
  ButtonWrapper,
  LeftButton,
  RightButton,
} from "@/pages/SignUp/Success/style";

import { useState } from "react";
import Modal from "@/pages/Find/ID/Success/Modal";
import Header from "@/layouts/Header";

function Success() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    
  return (
    <>
      <Header />
      <Wrapper>
        {
          isModalOpen ? <Modal closeModal={closeModal} /> : <></>
        }      
        <FindBox $margin="80px">
          <Active type="id" text={"이메일 찾기"}/>
          <Inactive type="password" text={"비밀번호 찾기"} />
        </FindBox>
        <p>입력하신 회원님의 정보와 일치하는 이메일 주소입니다</p>
        <span>개인정보 보호를 위해 일부 주소는 *처리되었습니다</span>    
        <EmailBox text="hihi@gmail.com" />
        <ButtonWrapper>
          <LeftButton onClick={openModal}>모달 확인</LeftButton>
          <RightButton />
        </ButtonWrapper>    
      </Wrapper>
    </>
  );
}

export default Success;