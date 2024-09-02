import React from 'react';

import {
  Wrapper,
  ButtonWrapper,
  DetailsWrapper
} from '@/layouts/Footer/style';

function Footer() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <button>회사소개</button>
        <button>약관</button>
        <button>개인정보처리방침</button>
      </ButtonWrapper>
      <DetailsWrapper>
        <span>서울특별시 동작구 흑석로 84 중앙대학교 적십자간호대학</span>
        <span>
          교학지원팀: <span>02)820-5672</span>
        </span>
        <span>
          Fax : <span>02-824-7961</span>
        </span>
        <span>
          이메일 : <span>nursing@cau.ac.kr</span>
        </span>
        <div>
          COPYRIGHT ⓒ 2021 Red Cross College of Nursing, Chung-Ang University.
          All rights reserved.
        </div>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default Footer;
