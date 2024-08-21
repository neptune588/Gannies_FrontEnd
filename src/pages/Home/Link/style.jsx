import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 197px;
  width: 1128px;
  margin-top: 53px;
  border-radius: 8px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-left: 48px;
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.gray[10]};
  font-size: ${props => props.theme.typo.size.h4};
  font-weight: ${props => props.theme.typo.weight.regular};
  letter-spacing: 0px;
`
export const Goto = styled.div`
  margin-top: 11px;
  font-size: ${props => props.theme.typo.size.h4};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  display: flex;
  align-items: center;
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9px;
  background-color: ${props => props.theme.colors.white};
  opacity:0.45;
  width: 30px;
  height: 30px;
  border-radius: 4px;
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LinkIcon = styled.img`
  width: 106px;
  height: 106px;
  margin-left: 20px;
  cursor: pointer;
`;

export const RightWrapper = styled.div`
  margin-right: 48px;
  margin-left: 20px;
`;