import {
  ActiveButton,
  ButtonWrapper
} from "@/pages/SignUp/components/NextButton/style";

function NextButton({$margin, text, to}) {
  return (
    <ButtonWrapper $margin={$margin}>
      {/* <InactiveButton>{text}</InactiveButton> */}
      <ActiveButton to={to}>{text}</ActiveButton>
    </ButtonWrapper>
  )
}

export default NextButton;