import chevron_right_white from '@/assets/icons/arrows/chevron_right_white.svg';
import department from '@/assets/images/homepage_example.png';

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  LowerBox,
} from '@/pages/Home/Link/style';

function Link() {
  return (
    <Wrapper>
      <LeftWrapper>
        <h3>우리학교 다른홈페이지</h3>
        <LowerBox>
          바로가기
          <div>
            <img src={chevron_right_white} alt='chevron_left_white' />
          </div>
        </LowerBox>
      </LeftWrapper>
      <RightWrapper>
        <img src={department} alt='LinkIcon' />
        <img src={department} alt='LinkIcon' />
        <img src={department} alt='LinkIcon' />
        <img src={department} alt='LinkIcon' />
        <img src={department} alt='LinkIcon' />
        <img src={department} alt='LinkIcon' />
      </RightWrapper>
    </Wrapper>
  );
}

export default Link;
