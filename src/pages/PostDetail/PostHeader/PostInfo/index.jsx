import styled from 'styled-components';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';
import Message from '@/components/Icons/Message';

import { small_400 } from '@/styles/commonStyle/localTextStyle';

const PostInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const PostMetricBox = styled.div`
  display: flex;
  width: 190px;
  justify-content: space-between;
`;

const PostDate = styled.p`
  ${small_400}
  color: ${({ theme: { colors } }) => {
    return colors.gray['60'];
  }};
`;

export default function PostInfo({
  postViewCount,
  likeCount,
  commentCount,
  postCreateDate,
  postUpdateDate,
}) {
  return (
    <PostInfoSection>
      <PostMetricBox>
        <Eye postViewCount={postViewCount} />
        <HeartInactive likeCount={likeCount} />
        <Message commentCount={commentCount} />
      </PostMetricBox>
      <PostDate>
        {postCreateDate === postUpdateDate
          ? postCreateDate
          : `${postUpdateDate}(수정됨)`}
      </PostDate>
    </PostInfoSection>
  );
}
