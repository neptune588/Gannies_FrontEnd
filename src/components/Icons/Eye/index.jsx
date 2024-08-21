import { Icon } from '@/components/Icons/style';
import eye from '@/assets/icons/eyes/eye.svg';

function Eye({ viewCount = 0 }) {
  return <Icon src={eye} alt='eye'></Icon>;
}

export default Eye;
