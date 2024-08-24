import { inactiveColorBoxStyle } from "@/styles/commonStyle";
import { AuthButton } from "@/components/Buttons/AuthButtons/style";

import styled from "styled-components";

const Button = styled(AuthButton)`
  ${inactiveColorBoxStyle};
`;

function InactiveButton({ text }) {
 return (
    <Button>{text}</Button>
  );
}

export default InactiveButton;