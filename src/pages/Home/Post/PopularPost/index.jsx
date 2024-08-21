import React from 'react';
import Post from '@/pages/Home/Post';

function PopularPost() {
 const title = "인기 게시글";

  const posts = [
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    },
    {
      category: "이론정보",
      title: "효율적인 업무 관리를 위한 5가지 팁",
      comment: 10,      
      views: "12,520",
      likes: "134",
      date: "2024-08-01",
    }        
  ]

  return (
    <Post title={title} data={posts}/>
  );

}

export default PopularPost;