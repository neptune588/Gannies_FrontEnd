import { useState } from 'react';

import Modal from "@/pages/Find/Modal";
import InputSection from '@/pages/SignUp/components/InputSection';

import {
  InputBox,
  InfoWrapper,
  // ActiveButton,
  // DisabledButton,
  InactiveButton
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';


function PhoneNumber() {

  const numberKinds = ["010", "011", "012", "016", "017", "018", "019"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <InputSection $margin="37px" title="휴대폰 번호*">
      <InfoWrapper>
        <select>
          {
            numberKinds.map((number, e) => {
              return (
              <option value={number} key={e}>{number}</option>
              )
            })
          }
        </select>
        <form>
          <InputBox type="text" placeholder='-없이 입력해주세요' />  
        </form>
        <InactiveButton onClick={openModal}>인증번호 발송</InactiveButton>
        {/* <DisabledButton>인증번호 발송</DisabledButton> */}
        {/* <ActiveButton>인증번호 발송</ActiveButton> */}
      </InfoWrapper>
      {
        isModalOpen && <Modal openModal={openModal} />
      }            
    </InputSection>
  );
}

export default PhoneNumber;