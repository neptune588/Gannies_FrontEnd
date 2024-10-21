import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import { useInputBorder } from '@/hooks/useInputBorder';

function Name({ name, setName, allow, handleAllow }) {
  const { isFocused, handleIsFocused } = useInputBorder(undefined);

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    handleAllow(0, !!name);
  };

  return (
    <InputSection $margin='15px' title='이름*'>
      <DefaultInput
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={handleName}
        disabled={allow[2]}
        $isFocused={isFocused}
        onFocus={() => handleIsFocused(true)}
        onBlur={() => {
          handleIsFocused(false);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      />
    </InputSection>
  );
}

export default Name;
