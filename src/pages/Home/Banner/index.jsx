import styled from 'styled-components';

import banner from '@/assets/images/banner.png';

const Wrapper = styled.img`
  height: 339px;
  margin-top: 16.5px;
`;

function Banner() {
  return <Wrapper src={banner} alt='banner' />;
}

export default Banner;
