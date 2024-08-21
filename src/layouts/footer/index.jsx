import React from 'react';
import {
  Wrapper,
  Button,
  ButtonWrapper,
  DetailsWrapper,
  Detail,
  Copyright,
  Underline,
} from '@/layouts/Footer/style';

function Footer() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button>회사소개</Button>
        <Button>약관</Button>
        <Button>개인정보처리방침</Button>
      </ButtonWrapper>
      <DetailsWrapper>
        <Detail>서울특별시 동작구 흑석로 84 중앙대학교 적십자간호대학</Detail>
        <Detail>
          교학지원팀: <Underline>02)820-5672</Underline>
        </Detail>
        <Detail>
          Fax : <Underline>02-824-7961</Underline>
        </Detail>
        <Detail>
          이메일 : <Underline>nursing@cau.ac.kr</Underline>
        </Detail>
        <Copyright>
          COPYRIGHT ⓒ 2021 Red Cross College of Nursing, Chung-Ang University.
          All rights reserved.
        </Copyright>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default Footer;
