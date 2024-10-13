import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

export default function PageCategory({ currentBoardType }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { bannerTitle } = useSelectorList();

  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const url = location.pathname.split('/');

    console.log(url);
    url[3] && url[3].startsWith('post')
      ? setCurrentCategory(`게시글 #${url[4]}`)
      : setCurrentCategory(`게시글 작성`);
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
          navigate(`/community/${currentBoardType}`);
        }}
      >
        {bannerTitle}
      </CategoryList>
      <img src={rightArrow} alt='right-arrow' />
      <CategoryList $isActiveCategory={true}>{currentCategory}</CategoryList>
    </CategoryBox>
  );
}
