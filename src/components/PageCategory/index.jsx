import styled from 'styled-components';
import rightArrow from '@/assets/icons/arrows/chevron_right.svg';

import { small_500 } from '@/styles/commonStyle/localTextStyle';

const CategoryBox = styled.ul`
  display: flex;
  align-items: center;
  user-select: none;
  > img {
    width: 24px;
    height: 24px;
    margin: 0 5px;
  }
`;

const CategoryList = styled.li`
  color: ${({ $isActiveCategory, theme: { colors } }) => {
    return $isActiveCategory ? colors.primary : colors.gray['60'];
  }};
  ${small_500}
  cursor: pointer;
`;

export default function PageCategory() {
  return (
    <CategoryBox>
      <CategoryList>메인</CategoryList>
      <img src={rightArrow} alt='right-arrow' />
      <CategoryList $isActiveCategory={false}>실습정보</CategoryList>
      <img src={rightArrow} alt='right-arrow' />
      <CategoryList $isActiveCategory={true}>게시글 작성</CategoryList>
    </CategoryBox>
  );
}
