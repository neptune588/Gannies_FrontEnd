import { useDispatch, useSelector } from 'react-redux';

import InputSection from '@/pages/SignUp/components/InputSection';
import DefaultInput from '@/pages/SignUp/components/DefaultInput';
import { handleFindIdPasswordData } from '@/store/findIdPasswordSlice';

function Name({ allow, handleAllow }) {
  const name = useSelector((state) => state.findIdPasswordSlice.name);
  const dispatch = useDispatch();

  const handleName = (e) => {
    const name = e.target.value;
    dispatch(handleFindIdPasswordData({ key: 'name', value: name }));
    handleAllow(0, !!name);
  };

  return (
    <InputSection $margin='15px' title='이름*'>
      <DefaultInput
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={handleName}
        disabled={allow[2]}
      />
    </InputSection>
  );
}

export default Name;
