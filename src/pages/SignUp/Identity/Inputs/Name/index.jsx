import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import { useState } from 'react';
import { useInputBorder } from '@/hooks/useInputBorder';
import Negative from '@/components/Instruction/Negative';

function Name({ allow, handleAllow }) {
  const [name, setName] = useState('');
  const validate = (name) => !!name;
  const instruction = '필수 정보입니다';
  const {
    isFocused,
    isValid,
    handleIsValid,
    handleIsFocused,
    handleInputBlur,
  } = useInputBorder(undefined, validate);

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    handleAllow(0, !!name);
  };

  return (
    <InputSection $margin='15px' title='이름*'>
      <DefaultInput
        $isFocused={isFocused}
        $isValid={isValid}
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={handleName}
        disabled={allow[2]}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBlur(name);
          if (!name) {
            handleIsValid(false);
          }
        }}
      />
      {isValid === false && <Negative text={instruction} />}
    </InputSection>
  );
}

export default Name;
