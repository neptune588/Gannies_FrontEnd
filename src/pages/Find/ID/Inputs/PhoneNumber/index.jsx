import uuid from 'react-uuid';
// import axios from 'axios';

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
import { handleFindIdPasswordData } from '@/store/findIdPasswordSlice';
import { useDispatch, useSelector } from 'react-redux';

function PhoneNumber({ allow, handleAllow }) {
  const numberKinds = ['010', '011', '012', '016', '017', '018', '019'];
  const phoneNumber = useSelector(
    (state) => state.findIdPasswordSlice.phoneNumber
  );
  const dispatch = useDispatch();

  const handlePhoneNumber = (e) => {
    const phoneNumber = e.target.value.slice(0, 8);
    dispatch(
      handleFindIdPasswordData({ key: 'phoneNumber', value: phoneNumber })
    );

    handleAllow(1, false);
  };

  const handleSendButton = async () => {
    try {
      handleAllow(1, true);
      // const response = await axios.post('/auth/phone', { phoneNumber });
    } catch (error) {
      alert('error');
    }
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
          <InactiveButton>인증번호 발송</InactiveButton>
        ) : allow[2] ? (
          <DisabledButton>인증번호 재발송</DisabledButton>
        ) : allow[1] ? (
          <ActiveButton onClick={handleSendButton}>
            인증번호 재발송
          </ActiveButton>
        ) : (
          <ActiveButton onClick={handleSendButton}>인증번호 발송</ActiveButton>
        )}
      </InfoWrapper>
    </InputSection>
  );
}

export default PhoneNumber;
