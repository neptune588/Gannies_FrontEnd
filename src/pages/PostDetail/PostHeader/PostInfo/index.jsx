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
  postViewCount = 0,
  likeCount = 0,
  commentCount = 0,
  postDate,
}) {
  return (
    <PostInfoSection>
      <PostMetricBox>
        <Eye postViewCount={1500} />
        <HeartInactive likeCount={50} />
        <Message commentCount={24} />
      </PostMetricBox>
      <PostDate>2024-08-26</PostDate>
    </PostInfoSection>
  );
}
