
import Email from "@/pages/SignUp/Info/Inputs/Email";
import Nickname from "@/pages/SignUp/Info/Inputs/Nickname";
import Password from "@/pages/SignUp/Info/Inputs/Password";
import PasswordCheck from "@/pages/SignUp/Info/Inputs/PasswordCheck";

function Inputs() {
  return (
    <>
      <Nickname />
      <Email />
      <Password />
      <PasswordCheck />   
    </>
  );
}

export default Inputs;