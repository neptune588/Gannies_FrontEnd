import { useState } from 'react';

import Modal from "@/pages/Find/Modal";
import InputSection from '@/pages/SignUp/components/InputSection';
import chevronDown from "@/assets/icons/arrows/chevron_down.svg";

import {
  InputBox,
  InfoWrapper,
  // ActiveButton,
  // DisabledButton,
  InactiveButton,
  ActiveButton,
  ImageWrapper,
  DisabledButton
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';


function PhoneNumber({allow, setAllow, setVisible, buttonAllow, setButtonAllow}) {

  const numberKinds = ["010", "011", "012", "016", "017", "018", "019"];
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handlePhoneNumber = (e) => {
    e.target.value = e.target.value.slice(0,8);
    setPhoneNumber(e.target.value);
    setAllow((prev) => {
        const newAllow = [...prev];
        newAllow[1] = false;      
        return newAllow;
      }
    );
    setVisible((prev) => {
      const newVisible = [...prev];
      newVisible[1] = false;      
      return newVisible;
    });
    setButtonAllow((prev) => {
      const newButtonAllow = [...prev];
      newButtonAllow[1] = false;
      return newButtonAllow;
    });
    if (e.target.value.length >= 7 && allow[0]) {
      setButtonAllow((prev) => {
        const newButtonAllow = [...prev];
        newButtonAllow[1] = true;
        return newButtonAllow;
      });      
    }  
  }

  const handleAllow = () => {
    setAllow((prev) => {
      const newAllow = [...prev];
      newAllow[1] = true;      
      return newAllow;
    });
    setVisible((prev) => {
      const newVisible = [...prev];
      newVisible[1] = true;      
      return newVisible;
    });
  }

  return (
    <InputSection $margin="37px" title="휴대폰 번호*">
      <InfoWrapper>
        <select disabled={allow[2]} >
          {
            numberKinds.map((number, e) => {
              return (
              <option value={number} key={e}>{number}</option>
              )
            })
          }
        </select>   
        <ImageWrapper>
          <img src={chevronDown} alt="chevronDown"/>
        </ImageWrapper>
        <form>
          <InputBox type="text" placeholder='-없이 입력해주세요' value={phoneNumber} onChange={handlePhoneNumber} disabled={allow[2]} />  
        </form>
        {
          !buttonAllow[0] || !buttonAllow[1] ? 
            <InactiveButton onClick={openModal}>인증번호 발송</InactiveButton> :
            allow[2] ? <DisabledButton>인증번호 재발송</DisabledButton>: <ActiveButton onClick={handleAllow}>인증번호 발송</ActiveButton>
        }        
      </InfoWrapper>
      {
        isModalOpen && <Modal openModal={openModal} />
      }            
    </InputSection>
  );
}

export default PhoneNumber;