import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

import {
  TableRow,
  PostNumberBox,
  PostTitleBox,
  PostNicknameBox,
  PostIconBox,
  PostDateBox,
} from '@/pages/Community/CommunityPost/style';

export default function CommunityPost() {
  return (
    <TableRow>
      <PostNumberBox>01</PostNumberBox>
      <PostTitleBox>나랏말싸미 듕귁에 달아</PostTitleBox>
      <PostNicknameBox>둥그레차</PostNicknameBox>
      <PostDateBox>2024-08-22</PostDateBox>
      <PostIconBox>
        <Eye postViewCount={125000} />
        <HeartInactive likeCount={125000} />
      </PostIconBox>
    </TableRow>
  );
}
