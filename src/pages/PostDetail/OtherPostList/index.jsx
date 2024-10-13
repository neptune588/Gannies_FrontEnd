import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';

import {
  TableRow,
  CommentLengthView,
} from '@/pages/PostDetail/OtherPostList/style';

export default function OtherPostList({
  number,
  title,
  nickname,
  createDate,
  postViewCount,
  likeCount,
  numberOfCommentsAndReplies,
  ownPostId,
  currentPostId,
  handlePostClick,
}) {
  return (
    <TableRow
      $currentPostId={currentPostId}
      $ownPostId={ownPostId}
      onClick={handlePostClick || undefined}
    >
      <td>{number}</td>
      <td>
        {title}
        <CommentLengthView>[{numberOfCommentsAndReplies}]</CommentLengthView>
      </td>
      <td>{nickname}</td>
      <td>{createDate}</td>
      <td>
        <Eye postViewCount={postViewCount} />
      </td>
      <td>
        <HeartInactive likeCount={likeCount} />
      </td>
    </TableRow>
  );
}
