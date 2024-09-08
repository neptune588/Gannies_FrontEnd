import { Button, Wrapper } from '@/pages/Error/style';

import background from '@/assets/images/505.png';

function Error500() {
  return (
    <Wrapper>
      <img src={background} alt='background' />
      <h2>서버에서 요청을 처리하는 도중 오류가 발생하였습니다.</h2>
      <h4>잠시 후 다시 시도해주시기 바랍니다.</h4>
      <h4>이용에 불편을 드려 죄송합니다.</h4>
      <Button to='/'>홈으로 돌아가기</Button>
    </Wrapper>
  );
}

export default Error500;
