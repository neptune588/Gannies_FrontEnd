import React from 'react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import Navbar from '@/layouts/Navbar';
import Banner from '@/components/Home/Banner';
import SearchBar from '@/components/Home/SearchBar';
import Post from '@/components/Home/Post';
import Link from '@/components/Home/Link';

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