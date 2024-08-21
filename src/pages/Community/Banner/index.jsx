import styled from 'styled-components';

const BannerBox = styled.div`
  width: 100%;
  height: 232px;
  background: linear-gradient(
    to bottom,
    rgba(229, 229, 229, 0.5) 0%,
    rgba(229, 229, 229, 0) 80%
  );
  padding: 77px 0 89px 56px;
`;

export default function Banner({ children }) {
  return <BannerBox>{children}</BannerBox>;
}
