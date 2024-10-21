import DefaultInput from '@/pages/SignUp/components/DefaultInput';

import Positive from '@/components/Instruction/Positive';
import Negative from '@/components/Instruction/Negative';

import InputSection from '@/pages/SignUp/components/InputSection';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { checkEmailDuplicate } from '@/api/authApi';
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function Email({ allow, handleAllow }) {
  const [email, setEmail] = useState('');
  const { handleDataToSend } = useOutletContext();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validate = (email) => regex.test(email);
  const instruction = [
    '사용 가능한 이메일입니다',
    '필수 정보입니다',
    '유효하지 않은 이메일 형식입니다',
    '중복된 이메일입니다',
  ];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, focusIfEmpty, blurIfEmpty, setIsFocused, checkIsValid } =
    useInputValid(undefined, validate);

  const handleEmail = async (e) => {
    const email = e.target.value;
    setEmail(email);
    handleDataToSend('email', email);
    const allow = await checkIsValid(email, 'email', checkEmailDuplicate);
    setInstructionIndex(allow);

    handleAllow(1, allow === 0 ? true : false);
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
        $isFocused={isFocused}
        $isValid={allow[1]}
        onFocus={() => {
          setIsFocused(true);
          if (allow[1] === undefined) {
            const instructionIndex = focusIfEmpty(1, handleAllow);
            setInstructionIndex(instructionIndex);
          }
        }}
        onBlur={() => {
          setIsFocused(false);
          if (!allow[1] && !email) {
            const instructionIndex = blurIfEmpty(1, handleAllow);
            setInstructionIndex(instructionIndex);
          }
        }}
        onKeyDown={(e) => {
          preventEnterKey(e);
        }}
      />
      {allow[1] ? (
        <Positive text={instruction[instructionIndex]} />
      ) : (
        <Negative text={instruction[instructionIndex]} />
      )}
    </InputSection>
  );
}

export default Email;
