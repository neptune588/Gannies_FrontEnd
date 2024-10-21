import styled from 'styled-components';
import {
  small_600,
  xsmall_400,
  xsmall_500,
} from '@/styles/commonStyle/localTextStyle';

export const ToastBox = styled.div`
  width: 442px;
  padding: 10px 10px 10px 20px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.highlight} 3px,
    ${(props) => props.theme.colors.white} 3px
  );
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 4px 8px 8px 4px;
  top: -174px;
  left: 423px;
  position: absolute;
  z-index: 1;
  > button {
    ${xsmall_500}
    color: ${(props) => props.theme.colors.primary};
    width: 50px;
    height: 30px;
    margin-left: auto;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  margin-right: auto;
  > img {
    width: 34px;
    height: 34px;
  }

  > h4 {
    margin-left: 10px;
    margin-top: 12px;
    ${small_600}
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export const ContentBox = styled.div`
  width: 412px;
  padding: 0px 8px;
  margin-top: 11px;

  > p {
    ${xsmall_400}
    color: ${(props) => props.theme.colors.gray['60']};
    line-height: 1.9rem;
  }
`;
