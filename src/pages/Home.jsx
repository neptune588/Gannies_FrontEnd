import React from 'react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import Navbar from '@/layouts/Navbar';
import Banner from '@/components/Home/Banner';
import SearchBar from '@/components/Home/SearchBar';
import Post from '@/components/Home/Post';

function Home() {
  return (
		<>
      <Header />
      <Navbar />
      <Banner />
      <SearchBar />
      <Post />
      <Footer />
    </>
  )
}

export default Home;