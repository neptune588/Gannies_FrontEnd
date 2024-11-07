import arrow_up_right from '@/assets/icons/arrows/arrow_up_right.svg';

import { links } from '@/pages/Home/Link/data.js';
import {
  Wrapper,
  UpperWrapper,
  LowerWrapper,
  IconBox,
  LinkBox,
  LinkContainer,
} from '@/pages/Home/Link/style';
import { getSocket } from '@/utils/socket';

function Link() {
  const handleClick = (path) => {
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper>
      <UpperWrapper>
        <h3>간호 관련 중요 사이트들을 한 곳에</h3>
        <p>원하는 사이트를 클릭해보세요</p>
      </UpperWrapper>
      <LowerWrapper>
        {links.map((group, groupIndex) => (
          <LinkContainer key={groupIndex}>
            {group.map((link, index) => (
              <LinkBox key={index} onClick={() => handleClick(link.path)}>
                <IconBox>
                  <img src={arrow_up_right} alt='arrow_up_right' />
                </IconBox>
                {link.subtitle && <p>{link.subtitle}</p>}
                <h6>{link.title}</h6>
                <img src={link.icon} alt='LinkIcon' />
              </LinkBox>
            ))}
          </LinkContainer>
        ))}
      </LowerWrapper>
      <button onClick={() => console.log(getSocket())}>뀨</button>
    </Wrapper>
  );
}

export default Link;
