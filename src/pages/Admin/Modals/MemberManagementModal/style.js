import styled from 'styled-components';

import { adminPageModalInnerDataBoxStyle } from '@/styles/commonStyle/box';

const InfoArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoBox = styled.div`
  flex: 0 0 auto;
  width: 48%;
  margin-bottom: 20px;
  margin-right: 2%;

  > div {
    ${adminPageModalInnerDataBoxStyle}
  }

  &:nth-child(2n) {
    margin-right: 0;
  }

  &:nth-child(7) {
    width: 100%;
    > div {
      height: 120px;
      overflow-y: auto;
    }
  }
`;

export { InfoArea, InfoBox };
