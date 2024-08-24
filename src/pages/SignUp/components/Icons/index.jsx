import {
    Arrow,
    FontWrapper,
    Icon,
    Wrapper,
    IconsWrapper,
    FontActive,
    FontInactive
  } from '@/pages/SignUp/components/Icons/style';
  import arrow from '@/assets/icons/arrows/chevron_right.svg';
  
  function Icons({identity, info, department, sequence}) {
    const fonts = ['본인인증', '정보인증', '학과인증'];

    return (
      <Wrapper>
        <IconsWrapper>
          <Icon src={identity} alt="verify" />
          <Arrow src={arrow} alt="arrow" />
          <Icon src={info} alt="info" />
          <Arrow src={arrow} alt="arrow" />
          <Icon src={department} alt="department"/>     
        </IconsWrapper>
        <FontWrapper>
          {
            sequence.map((s, e) => {
                const FontComponent = s ? FontActive : FontInactive;
                return <FontComponent key={e}>{fonts[e]}</FontComponent>;
            })
          }
        </FontWrapper>
        {/* <>필수항목</> */}
      </Wrapper>
    );
  }
  
  export default Icons;