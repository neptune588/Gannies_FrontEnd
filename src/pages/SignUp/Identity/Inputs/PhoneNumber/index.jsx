import { useState } from 'react';

import Modal from '@/pages/Find/Modal';
import InputSection from '@/pages/SignUp/components/InputSection';
import chevronDown from '@/assets/icons/arrows/chevron_down.svg';

import {
  InputBox,
  InfoWrapper,
  // ActiveButton,
  // DisabledButton,
  InactiveButton,
  ActiveButton,
  ImageWrapper,
  DisabledButton,
} from '@/pages/SignUp/Identity/Inputs/PhoneNumber/style';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { handleSignUpData } from '@/store/signUpSlice';

function PhoneNumber({ allow, handleAllow }) {
  const dispatch = useDispatch();

  const phoneNumber = useSelector((state) => state.signUpSlice.phoneNumber);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numberKinds = ['010', '011', '012', '016', '017', '018', '019'];

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePhoneNumber = (e) => {
    const phoneNumber = e.target.value.slice(0, 8);
    dispatch(handleSignUpData({ key: 'phoneNumber', value: phoneNumber }));
    handleAllow(1, false);
  };

  const handleSendButton = () => {
    handleAllow(1, true);
  };

  return (
    <InputSection $margin='37px' title='휴대폰 번호*'>
      <InfoWrapper>
        <select disabled={allow[2]}>
          {numberKinds.map((number) => {
            return (
              <option value={number} key={uuid()}>
                {number}
              </option>
            );
          })}
        </select>
        <ImageWrapper>
          <img src={chevronDown} alt='chevronDown' />
        </ImageWrapper>
        <form>
          <InputBox
            type='text'
            placeholder='-없이 입력해주세요'
            value={phoneNumber}
            onChange={handlePhoneNumber}
            disabled={allow[2]}
          />
        </form>
        {!allow[0] || phoneNumber.length < 7 ? (
          <InactiveButton onClick={openModal}>인증번호 발송</InactiveButton>
        ) : allow[2] ? (
          <DisabledButton>인증번호 재발송</DisabledButton>
        ) : (
          <ActiveButton onClick={handleSendButton}>인증번호 발송</ActiveButton>
        )}
      </InfoWrapper>
      {isModalOpen && <Modal openModal={openModal} />}
    </InputSection>
  );
}

export default PhoneNumber;
