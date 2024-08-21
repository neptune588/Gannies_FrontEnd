import { Icon } from '@/components/Icons/style';
import eye from '@/assets/icons/eyes/eye.svg';

function Eye({ viewCount }) {
  return (
    <Icon src={eye} alt='eye'>
      {viewCount}
    </Icon>
  );
}

export default Eye;
