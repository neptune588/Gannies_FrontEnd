import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Link from '@/pages/Home/Link';
import Post from '@/pages/Home/Post';

import { posts } from '@/pages/Home/data';

import { setBoardType } from '@/store/navBarOptions';
import IsApproval from '@/components/Modal/IsApproval';
import IsTempPassword from '@/components/Modal/IsTempPassword';

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalState);

  const [data] = useState(posts);

  useEffect(() => {
    const url = location.pathname;
    if (url === '/') {
      dispatch(
        setBoardType({
          menuNumber: 0,
          boardType: '',
          bannerTitle: '',
          bannerDesc: '',
        })
      );
    }
  }, []);

  return (
    <>
      {modalState.isApproval && <IsApproval />}
      {modalState.isTempPassword && <IsTempPassword />}
      <Banner />
      <SearchBar />
      <Post title={'인기 게시글'} posts={data} />
      <Post title={'새 게시글'} posts={data} />
      <Link />
    </>
  );
}

export default Home;
