import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColorBoxStyle } from '@/styles/commonStyle/box';
import { postsHeaderStyle, ellipsisStyle } from '@/styles/commonStyle/etc';
import { paginationWrapperStyle } from '@/styles/commonStyle/wrapper';
import { small_500, small_600 } from '@/styles/commonStyle/localTextStyle';

const ContentsAlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
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

const PostWrapper = styled.div`
  padding: 0 43px;
`;
const PostHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 15px;
  ${postsHeaderStyle}
  > div:first-child {
    display: flex;
    align-items: center;
    > p:first-child {
      width: 110px;
      text-align: center;
      margin-right: 15px;
    }
    > p:last-child {
      width: 720px;
      ${ellipsisStyle}
    }
  }
  > div:last-child {
    margin-right: 20px;
  }
  p {
    ${small_500}
  }
`;

const PageWrapper = styled.section`
  ${paginationWrapperStyle}
  margin: 50px auto 95px;
`;

export {
  ContentsAlignBox,
  PostCreateButton,
  PostWrapper,
  PostHeaderBox,
  PageWrapper,
};
