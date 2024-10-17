import styled from 'styled-components';

import {
  h3_600,
  medium_600,
  small_400,
  xsmall_500,
} from '@/styles/commonStyle/localTextStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary} 180px,
    ${(props) => props.theme.colors.white} 180px
  );
  width: 1128px;
  margin-top: 53px;
`;

export const UpperWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;

  > h3 {
    ${h3_600}
    letter-spacing: 0px;
    margin-top: 44px;
  }

  > p {
    ${small_400}
    margin-top: 13px;
  }
`;

export const LowerWrapper = styled.div`
  width: 1024px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-of-type {
    margin-top: 40px;
  }
`;

export const LinkBox = styled.div`
  width: 220px;
  height: 100px;
  background-color: white;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.primary};
  padding: 22px 20px;
  position: relative;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  > p {
    ${xsmall_500}
    margin-bottom: 5px;
  }
  > h6 {
    ${medium_600}
  }

  > img {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 33px;
    right: 20px;
  }
`;

export const IconBox = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 20px;
  top: 10px;
`;
