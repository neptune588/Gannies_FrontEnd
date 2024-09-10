import Document from '@/pages/SignUp/Department/Inputs/Document';
import Status from '@/pages/SignUp/Department/Inputs/Status';

function Inputs({ allow, handleAllow }) {
  return (
    <>
      <Status handleAllow={handleAllow} />
      <Document allow={allow} handleAllow={handleAllow} />
    </>
  );
}

export default Inputs;
