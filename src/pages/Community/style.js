import styled from 'styled-components';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { postsHeaderStyle } from '@/styles/commonStyle/etc';
import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import {
  small_500,
  small_600,
  large_500,
} from '@/styles/commonStyle/localTextStyle';
import { centerAlignStyle } from '@/styles/commonStyle/etc';

const ContentsAlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const PostCreateButton = styled.button`
  ${primaryColorBoxStyle}
  ${small_600}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 135px;
  height: 40px;
  padding: 5px 12px;
  > img {
    width: 24px;
    height: 24px;
  }
`;

const TableWrapper = styled.div`
  width: 1042px;
  margin: 0 auto;
  > table {
    width: 100%;
  }
`;

const TableHeader = styled.tr`
  ${postsHeaderStyle}
  ${small_500}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 15px;
  text-align: left;
  > th:first-child {
    display: flex;
    align-items: center;
    > p:first-child {
      flex: 0 0 8.5rem;
    }
    > p:last-child {
      flex: 0 0 50rem;
    }
  }
`;

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 50px auto 95px;
`;

const NoSearchResults = styled.p`
  ${centerAlignStyle}
  ${large_500}
  
  padding: 150px 0;
`;

export {
  ContentsAlignBox,
  PostCreateButton,
  TableWrapper,
  TableHeader,
  PageWrapper,
  NoSearchResults,
};
