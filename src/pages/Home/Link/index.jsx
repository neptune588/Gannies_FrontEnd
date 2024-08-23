import {
	Wrapper,
	LeftWrapper,
	Title,
	Goto,
	ArrowIcon,
	ArrowIconWrapper,
	RightWrapper,
	LinkIcon
} from '@/pages/Home/Link/style';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import department from '@/assets/images/homepage_example.png';

function Link() {
  return (
    <Wrapper>
						<LeftWrapper>
							<Title>우리학교 다른홈페이지</Title>
							<Goto>바로가기<ArrowIconWrapper><ArrowIcon src={chevron_right} alt="chevron_left"/></ArrowIconWrapper></Goto>
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