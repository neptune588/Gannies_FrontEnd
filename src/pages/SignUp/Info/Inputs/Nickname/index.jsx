import Positive from '@/components/Instruction/Positive';
import Instruction from '@/components/Instruction';
import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import Negative from '@/components/Instruction/Negative';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useInputFocus } from '@/hooks/useInputFocus';

function Nickname({ handleAllow }) {
  const [nickname, setNickname] = useState('');
  const { handleDataToSend } = useOutletContext();
  const validate = (nickname) => nickname.length >= 2 && regex.test(nickname);
  const regex = /^[a-zA-Z가-힣]{2,8}$/;
  const { isFocused, isValid, handleIsFocused, handleInputBorder } =
    useInputFocus(undefined, validate);

  useEffect(() => {
    handleAllow(0, isValid ? true : false);
  }, [isValid]);

  const handleNickname = (e) => {
    const nickname = e.target.value;
    setNickname(nickname);
    handleDataToSend('nickname', nickname);
  };

  return (
    <InputSection $margin='10px' title='닉네임*'>
      <DefaultInput
        placeholder='닉네임을 입력해주세요'
        onChange={handleNickname}
        value={nickname}
        $isFocused={isFocused}
        $isValid={isValid}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
          handleInputBorder(nickname);
        }}
      />
      {isValid ? (
        <Positive text='사용가능한 닉네임입니다' />
      ) : (
        <>
          <Instruction text='*한글 또는 영문 2-8자' />
          <Instruction text='*숫자 및 특수문자 불가' />
          {isValid === false && <Negative text='사용할 수 없는 닉네임입니다' />}
        </>
      )}
    </InputSection>
  );
}

export default Nickname;
