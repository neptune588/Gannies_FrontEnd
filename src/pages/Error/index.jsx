import {
  Button,
  Wrapper
} from '@/pages/Error/style';

import background from '@/assets/images/404.png';

function Error() {

  return (
    <Wrapper>
      <img src={background} alt="background" />
      <h2>원하시는 페이지를 찾을 수 없습니다.</h2>
      <h4>찾으시는 페이지의 주소 또는 올바르지 않은 검색어 입력, 게시물의</h4>
      <h4>삭제 또는 변경 등으로 원하시는 페이지를 찾을 수 없습니다.</h4>
      <Button to='/'>홈으로 돌아가기</Button>
    </Wrapper>
  );
}

export default Error;