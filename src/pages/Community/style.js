import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { postsHeaderStyle } from '@/styles/commonStyle/etc';
import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { small_500, small_600 } from '@/styles/commonStyle/localTextStyle';

const ContentsAlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const PostCreateButton = styled(Link)`
  ${primaryColorBoxStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 135px;
  height: 40px;
  padding: 5px 12px;
  ${small_600}
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 15px;
  ${postsHeaderStyle}
  ${small_500}
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

export {
  ContentsAlignBox,
  PostCreateButton,
  TableWrapper,
  TableHeader,
  PageWrapper,
};
