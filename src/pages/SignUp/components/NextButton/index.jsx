import { ActiveButton, ButtonWrapper } from "@/pages/SignUp/components/NextButton/style";

function NextButton({$margin, text}) {
  return (
    <ButtonWrapper $margin={$margin}>
      {/* <InactiveButton>{text}</InactiveButton> */}
      <ActiveButton>{text}</ActiveButton>
    </ButtonWrapper>
  )
}

export default NextButton;