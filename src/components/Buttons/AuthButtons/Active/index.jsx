import { primaryColorBoxStyle } from "@/styles/commonStyle";
import { AuthButton } from "@/components/Buttons/AuthButtons/style";

import styled from "styled-components";

const Button = styled(AuthButton)`
  ${primaryColorBoxStyle};
`;

function ActiveButton({ text }) {
 return (
    <Button>{text}</Button>
  );
}

export default ActiveButton;