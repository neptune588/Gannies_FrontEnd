import { useNavigate, useLocation, useEffect } from 'react-router-dom';

import styled from 'styled-components';
import rightArrow from '@/assets/icons/arrows/chevron_right.svg';

import { small_500 } from '@/styles/commonStyle/localTextStyle';

import useSelectorList from '@/hooks/useSelectorList';

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
  const navigate = useNavigate();
  const location = useLocation();

  const { bannerTitle } = useSelectorList();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <CategoryBox>
      <CategoryList
        onClick={() => {
          navigate('/');
        }}
      >
        메인
      </CategoryList>
      <img src={rightArrow} alt='right-arrow' />
      <CategoryList
        $isActiveCategory={false}
        onClick={() => {
          navigate('/community');
        }}
      >
        {bannerTitle}
      </CategoryList>
      <img src={rightArrow} alt='right-arrow' />
      <CategoryList $isActiveCategory={true}>게시글 작성</CategoryList>
    </CategoryBox>
  );
}
