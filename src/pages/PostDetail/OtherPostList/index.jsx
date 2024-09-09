import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

import {
  TableRow,
  CommentLengthView,
} from '@/pages/PostDetail/OtherPostList/style';

export default function OtherPostList({
  currentPostId,
  ownPostId,
  commentLength = 150,
  postViewCount = 1500,
  likeCount = 1500,
}) {
  return (
    <TableRow $currentPostId={currentPostId} $ownPostId={ownPostId}>
      <td>01</td>
      <td>
        자연 친화적인 라이프 스타일을 위한 환경 보호 방법
        <CommentLengthView>[{commentLength}]</CommentLengthView>
      </td>
      <td>동그레</td>
      <td>2024-03-27</td>
      <td>
        <Eye postViewCount={postViewCount} />
      </td>
      <td>
        <HeartInactive likeCount={likeCount} />
      </td>
    </TableRow>
  );
}
