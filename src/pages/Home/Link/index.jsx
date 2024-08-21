import React from 'react';
import { Wrapper } from './style';
import { LeftWrapper } from './style';
import { Title } from './style';
import { Button } from './style';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import department from '@/assets/images/department.png';
import { ArrowIcon } from './style';
import { ArrowIconWrapper } from './style';
import { RightWrapper } from './style';
import { LinkIcon } from './style';

function Link() {
  return (
    <Wrapper>
			<LeftWrapper>
				<Title>우리학교 다른홈페이지</Title>
				<Button>바로가기<ArrowIconWrapper><ArrowIcon src={chevron_right} alt="chevron_left"/></ArrowIconWrapper></Button>
			</LeftWrapper>
			<RightWrapper>
				<LinkIcon src={department} alt="LinkIcon"/>
				<LinkIcon src={department} alt="LinkIcon"/>
				<LinkIcon src={department} alt="LinkIcon"/>
				<LinkIcon src={department} alt="LinkIcon"/>
				<LinkIcon src={department} alt="LinkIcon"/>
				<LinkIcon src={department} alt="LinkIcon"/>
			</RightWrapper>
    </Wrapper>
  );
}

export default Link;