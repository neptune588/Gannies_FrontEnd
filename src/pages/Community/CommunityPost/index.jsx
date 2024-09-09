import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

import {
  PostContainer,
  PostContentsWrapper,
  PostNumberBox,
  PostBodyBox,
  PostInfoBox,
  PostIconBox,
  PostDateBox,
} from '@/pages/Community/CommunityPost/style';

export default function CommunityPost() {
  return (
    <PostContainer>
      <PostContentsWrapper>
        <PostNumberBox>01</PostNumberBox>
        <PostBodyBox>
          <p>작성자</p>
          <p>나랏말싸미 듕귁에 달아</p>
        </PostBodyBox>
      </PostContentsWrapper>
      <PostInfoBox>
        <PostIconBox>
          <Eye postViewCount={125000} />
          <HeartInactive likeCount={125000} />
        </PostIconBox>
        <PostDateBox>2024-08-22</PostDateBox>
      </PostInfoBox>
    </PostContainer>
  );
}
