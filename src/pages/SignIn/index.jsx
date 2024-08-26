import Header from '@/layouts/Header';
import Buttons from '@/pages/SignIn/Buttons';
import Inputs from '@/pages/SignIn/Inputs';
import Title from '@/pages/SignIn/Title';

function Login() {
 return (
   <>
     <Header />
     <Title title="로그인" />
     <Inputs />
     <Buttons />
   </>
  );
}

export default Login;