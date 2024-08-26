import PhoneNumber from "@/pages/SignUp/Identity/Inputs/PhoneNumber";
import Name from "@/pages/SignUp/Identity/Inputs/Name";
import VerifyNumber from "@/pages/SignUp/Identity/Inputs/VerifyNumber";
import NextButton from "@/pages/SignUp/components/NextButton";
import Active from "@/pages/Find/components/Active";
import FindBox from "@/pages/Find/components/FindBox";
import Inactive from "@/pages/Find/components/Inactive";
import Wrapper from "@/pages/Find/components/Wrapper";
import Header from "@/layouts/Header";

function ID() {
  return (
    <>
      <Header />
      <Wrapper>
        <FindBox $margin="30px">
          <Active type="id" text={"이메일 찾기"}/>
          <Inactive type="password" text={"비밀번호 찾기"} />
        </FindBox>
        <Name />
        <PhoneNumber />
        <VerifyNumber />
        <NextButton $margin="80px" text="다음" to="/find/id/success"/>
        </Wrapper>
    </>
  );
}

export default ID;