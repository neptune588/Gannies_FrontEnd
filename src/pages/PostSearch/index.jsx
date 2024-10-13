import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Community from '@/pages/Community';

import { SearchResultBox } from '@/pages/PostSearch/style';

import { setBoardType } from '@/store/navBarOptions';

export default function PostSearch() {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  useEffect(() => {
    dispatch(setBoardType({}));
  }, []);

  return (
    <>
      <SearchResultBox>
        <h2>비가 오는 날</h2>
        <p>검색결과</p>
      </SearchResultBox>
      <Community isSearch={true} searchKeyword={keyword} />
    </>
  );
}
