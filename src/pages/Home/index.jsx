import { useState } from 'react';

import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Link from '@/pages/Home/Link';
import Post from '@/pages/Home/Post';

import { posts } from '@/pages/Home/data';

function Home() {
  const [data] = useState(posts);
  return (
    <>
      <Banner />
      <SearchBar />
      <Post title={'인기 게시글'} posts={data} />
      <Post title={'새 게시글'} posts={data} />
      <Link />
    </>
  );
}

export default Home;
