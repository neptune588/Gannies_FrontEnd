import styled from 'styled-components';

import Eye from '@/components/Icons/Eye';
import HeartInactive from '@/components/Icons/HeartInactive';
import Message from '@/components/Icons/Message';

import { small_400 } from '@/styles/commonStyle/localTextStyle';

import { formatDateToPost, splitDateToYMDHMS } from '@/utils/dateFormatting';

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
  const dateCalc = (() => {
    if (postUpdateDate) {
      const {
        year: createYear,
        month: createMonth,
        day: createDay,
      } = splitDateToYMDHMS(postCreateDate);
      const {
        year: updateYear,
        month: updateMonth,
        day: updateDay,
        hours,
        minutes,
        seconds,
      } = splitDateToYMDHMS(postUpdateDate);

      const condition =
        createYear !== updateYear ||
        createMonth !== updateMonth ||
        createDay !== updateDay;

      return condition
        ? `${formatDateToPost({ date: postCreateDate })} (${formatDateToPost({ date: postUpdateDate, type: 'edit' })} 수정 됨)`
        : `${formatDateToPost({ date: postCreateDate })} (${hours}시 ${minutes}분 ${seconds}초 수정 됨)`;
    }
    return formatDateToPost({ date: postCreateDate });
  })();

  return (
    <PostInfoSection>
      <PostMetricBox>
        <Eye postViewCount={postViewCount} />
        <HeartInactive likeCount={likeCount} />
        <Message commentCount={commentCount} />
      </PostMetricBox>
      <PostDate>{dateCalc}</PostDate>
    </PostInfoSection>
  );
}
