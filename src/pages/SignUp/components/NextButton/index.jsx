import {
  ActiveButton,
  InactiveButton,
  ButtonWrapper,
} from '@/pages/SignUp/components/NextButton/style';

function NextButton({ $margin, active = true, text, ...props }) {
  return (
    <ButtonWrapper $margin={$margin}>
      {active ? (
        <ActiveButton {...props}>{text}</ActiveButton>
      ) : (
        <InactiveButton>{text}</InactiveButton>
      )}
    </ButtonWrapper>
  );
}

export default NextButton;
