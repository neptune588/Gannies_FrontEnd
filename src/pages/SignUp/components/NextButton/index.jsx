import {
  ActiveButton,
  InactiveButton,
  ButtonWrapper,
} from '@/pages/SignUp/components/NextButton/style';

function NextButton({ $margin, active = true, text, to }) {
  return (
    <ButtonWrapper $margin={$margin}>
      {active ? (
        <ActiveButton to={to}>{text}</ActiveButton>
      ) : (
        <InactiveButton>{text}</InactiveButton>
      )}
    </ButtonWrapper>
  );
}

export default NextButton;
