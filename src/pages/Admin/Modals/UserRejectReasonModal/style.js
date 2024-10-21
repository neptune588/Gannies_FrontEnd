import styled from 'styled-components';

import { adminPageModalInnerDataBoxStyle } from '@/styles/commonStyle/box';

const InfoBox = styled.div`
  display: block;
  margin-bottom: 20px;

  > div,
  > textarea {
    width: 100%;
    ${adminPageModalInnerDataBoxStyle}
  }

  > textarea {
    height: 150px;
    overflow: auto;
  }
`;

const FlexBoxChildInfoBox = styled.div`
  width: 48%;
  margin-bottom: 20px;

  > div {
    ${adminPageModalInnerDataBoxStyle}
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { InfoBox, FlexBoxChildInfoBox, FlexBox };
