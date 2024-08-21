import { Icon } from '@/components/Icons/style';
import heartInactive from '@/assets/icons/hearts/heart_inactive.svg';

function HeartInactive(props) {
  return (
    <Icon src={heartInactive} alt="heart" {...props}/>
  );
}

export default HeartInactive;
