
import Email from "@/pages/SignUp/Info/Inputs/Email";
import Nickname from "@/pages/SignUp/Info/Inputs/Nickname";
import Password from "@/pages/SignUp/Info/Inputs/Password";
import PasswordCheck from "@/pages/SignUp/Info/Inputs/PasswordCheck";
import { useState } from "react";

function Inputs() {
  const [password, setPassword] = useState('');
  
  return (
    <>
      <Nickname />
      <Email />
      <Password password={password} setPassword={setPassword} />
      <PasswordCheck password={password}/>   
    </>
  );
}

export default Inputs;