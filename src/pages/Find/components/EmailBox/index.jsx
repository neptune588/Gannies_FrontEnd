import { authEmailColorBoxStyle } from "@/styles/commonStyle";
import styled from "styled-components";

const StyledEmailBox = styled.div`
  ${authEmailColorBoxStyle};
  margin-top: 40px;
`;

function EmailBox({text}) {
  return (
    <StyledEmailBox>{text}</StyledEmailBox>
  );
}

export default EmailBox;