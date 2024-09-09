import NextButton from '@/pages/SignUp/components/NextButton';
import Document from '@/pages/SignUp/Department/Inputs/Document';
import Status from '@/pages/SignUp/Department/Inputs/Status';
import { useAuthAllow } from '@/hooks/useAuthAllow';

function Inputs() {
  const { allow, handleAllow } = useAuthAllow([false, false]);

  return (
    <>
      <Status handleAllow={handleAllow} />
      {allow[0] && <Document handleAllow={handleAllow} />}
      {allow[0] && allow[1] && (
        <NextButton $margin='80px' text='다음' to='/sign-up/success' />
      )}
    </>
  );
}

export default Inputs;
