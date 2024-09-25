import Document from '@/pages/SignUp/Department/Inputs/Document';
import Status from '@/pages/SignUp/Department/Inputs/Status';

function Inputs({ allow, handleAllow, file, setFile }) {
  return (
    <>
      <Status handleAllow={handleAllow} />
      <Document
        allow={allow}
        handleAllow={handleAllow}
        file={file}
        setFile={setFile}
      />
    </>
  );
}

export default Inputs;
