import { useEffect, useState } from "react";

import PhoneNumber from "@/pages/SignUp/Identity/Inputs/PhoneNumber";
import Name from "@/pages/SignUp/Identity/Inputs/Name";
import VerifyNumber from "@/pages/SignUp/Identity/Inputs/VerifyNumber";
import NextButton from "@/pages/SignUp/components/NextButton";
import Active from "@/pages/Find/components/Active";
import FindBox from "@/pages/Find/components/FindBox";
import Inactive from "@/pages/Find/components/Inactive";
import Wrapper from "@/pages/Find/components/Wrapper";


function ID() {
  const [allow, setAllow] = useState([false, false, false]);
  const [buttonAllow, setButtonAllow] = useState([false, false]);
  const [visible, setVisible] = useState([true, false]);

  useEffect(() => {console.log(buttonAllow)}, [buttonAllow])
  return (
    <Wrapper>
      <FindBox $margin="30px">
        <Active type="id" text={"이메일 찾기"}/>
        <Inactive type="password" text={"비밀번호 찾기"} />
      </FindBox>
      <Name allow={allow} setAllow={setAllow} setButtonAllow={setButtonAllow}/>
      <PhoneNumber allow={allow} setAllow={setAllow} setVisible={setVisible} buttonAllow={buttonAllow} setButtonAllow={setButtonAllow}/>
      {visible[1] &&
        <>
        <VerifyNumber allow={allow} setAllow={setAllow} />
          <NextButton $margin="80px" text="다음" to="/find/id/success" active={allow.every(value => value === true) ? true : false} />        
        </>
      }
    </Wrapper>
  );
}

export default ID;