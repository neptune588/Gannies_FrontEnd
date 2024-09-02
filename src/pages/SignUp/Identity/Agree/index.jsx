import uuid from 'react-uuid';

import Modal from '@/pages/SignUp/Identity/Agree/Modal';

import {
  Wrapper,
  SectionWrapper,
  Info,
  AgreeWrapper,
  ShowButton,
} from '@/pages/SignUp/Identity/Agree/style';

// import InactiveButton from '@/components/Buttons/AuthButtons/Inactive';
import { CheckBox } from '@/pages/SignUp/Identity/Agree/style';
import { useState } from 'react';

function Agree() {
  const agreeCount = 2;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      {isModalOpen ? <Modal closeModal={closeModal} /> : <></>}
      <SectionWrapper>
        <Info>회원약관</Info>
        <AgreeWrapper>
          <CheckBox type='checkbox' />
          <p>전체약관동의</p>
        </AgreeWrapper>
        {Array.from({ length: agreeCount }).map((_, index) => (
          <AgreeWrapper key={uuid()}>
            <CheckBox type='checkbox' />
            <span>[필수]</span>
            <p>약관동의</p>
            <ShowButton onClick={openModal}>약관보기</ShowButton>
          </AgreeWrapper>
        ))}
      </SectionWrapper>
    </Wrapper>
  );
}

export default Agree;
