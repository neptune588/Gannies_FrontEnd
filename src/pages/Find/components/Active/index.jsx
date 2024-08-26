import { Link } from "react-router-dom";
import styled from "styled-components";

const ActiveBox = styled(Link)`
  width: 254px;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.primary};  
  height: 33px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

function Active({type, text}) {
  return (
    <ActiveBox to={`/find/${type}`}>{text}</ActiveBox>
  );
}

export default Active;