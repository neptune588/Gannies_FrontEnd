import React from 'react';
import Navbar from '@/layouts/Navbar';
import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Link from '@/pages/Home/Link';
import PopularPost from '@/pages/Home/Post/PopularPost';
import NewPost from '@/pages/Home/Post/NewPost';

function Home() {
  return (
		<>
      <Navbar />
      <Banner />
      <SearchBar />
      <PopularPost />
      <NewPost />
      <Link />
    </>
  )
}

export default Home;