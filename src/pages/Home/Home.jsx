import React from 'react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import Navbar from '@/layouts/Navbar';
import Banner from '@/pages/Home/Banner';
import SearchBar from '@/pages/Home/SearchBar';
import Post from '@/pages/Home/Post';
import Link from '@/pages/Home/Link';

function Home() {
  return (
		<>
      <Header />
      <Navbar />
      <Banner />
      <SearchBar />
      <Post />
      <Link />
      <Footer />
    </>
  )
}

export default Home;