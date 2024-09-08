import { h3_600 } from '@/styles/commonStyle/localTextStyle';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 103px;
  width: 1128px;

  > span {
    ${h3_600}
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 12px;
  }
`;
