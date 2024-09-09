import Name from '@/pages/SignUp/Identity/Inputs/Name';
import PhoneNumber from '@/pages/SignUp/Identity/Inputs/PhoneNumber';
import VerifyNumber from '@/pages/SignUp/Identity/Inputs/VerifyNumber';

function Inputs({ allow, handleAllow }) {
  return (
    <>
      <Name allow={allow} handleAllow={handleAllow} />
      <PhoneNumber allow={allow} handleAllow={handleAllow} />
      <VerifyNumber allow={allow} handleAllow={handleAllow} />
    </>
  );
}

export default Inputs;
