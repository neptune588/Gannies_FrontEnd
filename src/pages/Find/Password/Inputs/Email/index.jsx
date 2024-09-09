import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import InputSection from '@/pages/SignUp/components/InputSection';
import { handleFindIdPasswordData } from '@/store/findIdPasswordSlice';
import { useDispatch, useSelector } from 'react-redux';

function Email({ handleAllow }) {
  const email = useSelector((state) => state.findIdPasswordSlice.email);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    const email = e.target.value;
    dispatch(handleFindIdPasswordData({ key: 'email', value: email }));
    handleAllow(1, true);
  };

  return (
    <InputSection $margin='37px' title='이메일*'>
      <DefaultInput
        placeholder='예) abc@gmail.com'
        onChange={handleEmail}
        value={email}
      />
    </InputSection>
  );
}

export default Email;
