import { Font } from "@/components/Instruction";
import styled from "styled-components";

const NegativeFont = styled(Font)`
  color: ${props => props.theme.colors.negative};
`

function Negative({ text }) {

  return (
    <NegativeFont>{text}</NegativeFont>
  );
}

export default Negative;