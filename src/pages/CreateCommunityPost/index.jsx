import CommunityBanner from '@/components/CommunityBanner';
import CommunityBannerText from '@/components/CommunityBannerText';

export default function CreateCommunityPost() {
  //전역 변수 사용해서 text 넣어야할것같은
  return (
    <>
      <CommunityBanner>
        <CommunityBannerText
          title='실습정보'
          text='실습에 관련된 유용한 정보를 제공합니다.'
        />
      </CommunityBanner>
    </>
  );
}
