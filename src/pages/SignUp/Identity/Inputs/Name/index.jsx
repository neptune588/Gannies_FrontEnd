import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import { useState } from 'react';
import Negative from '@/components/Instruction/Negative';
import { useInputValid } from '@/hooks/useInputValid';
import { preventEnterKey } from '@/utils/PreventEnterKey';

function Name({ allow, handleAllow }) {
  const [name, setName] = useState('');
  const instruction = ['', '필수 정보입니다'];
  const [instructionIndex, setInstructionIndex] = useState(undefined);
  const { isFocused, focusIfEmpty, blurIfEmpty, setIsFocused, checkIsValid } =
    useInputValid(undefined);

  const handleName = async (e) => {
    const name = e.target.value;
    setName(name);
    const allow = await checkIsValid(name);
    setInstructionIndex(allow);

    handleAllow(0, allow === 0 ? true : false);
  };

  return (
    <InputSection $margin='15px' title='이름*'>
      <DefaultInput
        $isFocused={isFocused}
        $isValid={allow[0]}
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={handleName}
        disabled={allow[2]}
        onFocus={() => {
          setIsFocused(true);
          if (allow[0] === undefined) {
            const instructionIndex = focusIfEmpty(0, handleAllow);
            setInstructionIndex(instructionIndex);
          }
        }}
        onBlur={() => {
          setIsFocused(false);
          if (!allow[0] && !name) {
            const instructionIndex = blurIfEmpty(0, handleAllow);
            setInstructionIndex(instructionIndex);
          }
        }}
        onKeyDown={(e) => {
          preventEnterKey(e);
        }}
      />
      {allow[0] === false && <Negative text={instruction[instructionIndex]} />}
    </InputSection>
  );
}

export default Name;
