import { Link } from "react-router-dom";
import styled from "styled-components";

const InactiveBox = styled(Link)`
  width: 254px;
  font-size: ${props => props.theme.typo.size.md};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  color: ${props => props.theme.colors.gray[40]};  
  border-bottom: 1px solid ${props => props.theme.colors.gray[40]};
  display: flex;
  justify-content: center;
  height: 33px;
  cursor: pointer;  
`;

function Inactive({type, text}) {
  return (
    <InactiveBox to={`/find/${type}`}>{text}</InactiveBox>
  );
}

export default Inactive;