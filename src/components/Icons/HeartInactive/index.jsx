import { Icon } from '@/components/Icons/style';
import heartInactive from '@/assets/icons/hearts/heart_inactive.svg';

function HeartInactive({ likeCount }) {
  return (
    <Icon src={heartInactive} alt='heart'>
      {likeCount}
    </Icon>
  );
}

export default HeartInactive;
