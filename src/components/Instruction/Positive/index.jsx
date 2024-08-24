import { Font } from "@/components/Instruction";
import styled from "styled-components";

const PositiveFont = styled(Font)`
  color: ${props => props.theme.colors.primary};
`

function Positive({ text }) {

  return (
    <PositiveFont>{text}</PositiveFont>
  );
}

export default Positive;