import { large_600 } from '@/styles/commonStyle/localTextStyle';
import styled from 'styled-components';

export const ModalBox = styled.div`
  min-height: 100px;
  min-width: 456px;
  max-width: 1128px;
  max-height: 80%;
  background-color: white;
  align-items: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
`;

export const UpperWrapper = styled.div`
  height: 84px;
  width: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  > div {
    flex: 1;
    width: 0;
    padding-right: 50px;

    > p {
      ${large_600}
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: normal;
    }
  }
`;

export const LowerWrapper = styled.div`
  height: 84px;
  width: 100%;
  flex-shrink: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  text-align: center;
  overflow: auto;
`;
