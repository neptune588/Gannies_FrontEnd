import styled from 'styled-components';

import { medium_400, small_400 } from '@/styles/commonStyle/localTextStyle';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    ${medium_400}
    color: ${(props) => props.theme.colors.gray[100]};
  }

  > span {
    ${small_400}
    color: ${(props) => props.theme.colors.gray[60]};
    margin-top: 23px;
  }
`;
