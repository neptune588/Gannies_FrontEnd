import { Icon } from '@/components/Icons/style';
import heartInactive from '@/assets/icons/hearts/heart_inactive.svg';

function HeartInactive({ likeCount = 0 }) {
  return <Icon src={heartInactive} alt='heart'></Icon>;
}

export default HeartInactive;
