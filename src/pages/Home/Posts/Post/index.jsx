import PostList from '@/components/PostList';
import chevron_right from '@/assets/icons/arrows/chevron_right.svg';
import uuid from 'react-uuid';

import {
  Container,
  PostListWrapper,
  ShowMoreButton,
  Wrapper,
} from '@/pages/Home/Posts/Post/style';
import { useEffect, useState } from 'react';
import { getPosts } from '@/api/postApi';
import { mainPageViewLimit } from '@/utils/itemLimit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBoardType } from '@/store/navBarOptions';
import useSelectorList from '@/hooks/useSelectorList';
import { navBarMenuData } from '@/layouts/Navbar/data';

function Post({ title, boardType }) {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navBarMenu, setNavbarMenu] = useState([]);

  const { currentActiveMenuNumber } = useSelectorList();

  const handleNavBarMenuClick = (data) => {
    dispatch(setBoardType(data));
  };

  const fetch = async () => {
    try {
      const res = await getPosts(boardType, {
        limit: mainPageViewLimit,
        sortType: 'LIKES',
      });
      setPosts(res.data.items);
    } catch (error) {
      alert('게시물을 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const foundMenu = () => {
    const data = navBarMenuData.find((menu) => menu.boardType === boardType);
    setNavbarMenu(data);
  };

  useEffect(() => {
    foundMenu();
    fetch();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h3>{title}</h3>
        <ShowMoreButton
          to={navBarMenu.path}
          $currentActiveMenuNumber={currentActiveMenuNumber}
          $myMenuNumber={navBarMenu.number}
          onClick={async () => {
            handleNavBarMenuClick({
              menuNumber: navBarMenu.number,
              boardType: navBarMenu.boardType,
              bannerTitle: navBarMenu.bannerTitle,
              bannerDesc: navBarMenu.bannerDesc,
            });
            navigate(navBarMenu.path);
          }}
        >
          <span>더보기</span>
          <img src={chevron_right} alt='chevron_right' />
        </ShowMoreButton>
      </Wrapper>
      <PostListWrapper height={posts.length === 0 ? '375px' : 'auto'}>
        {posts.map((post) => {
          return (
            <PostList
              key={uuid()}
              title={post.title}
              comment={post.numberOfCommentsAndReplies}
              views={post.viewCounts}
              likes={post.likeCounts}
              date={post.createAt}
              boardType={boardType}
              postId={post.postId}
            />
          );
        })}
      </PostListWrapper>
    </Container>
  );
}

export default Post;
