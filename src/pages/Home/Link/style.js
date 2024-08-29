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

  > h3 {
    color: ${props => props.theme.colors.gray[10]};
    font-size: ${props => props.theme.typo.size.h4};
    font-weight: ${props => props.theme.typo.weight.regular};
    letter-spacing: 0px;  
  }
`;

export const LowerBox = styled.div`
  margin-top: 11px;
  font-size: ${props => props.theme.typo.size.h4};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.typo.weight.semiBold};
  display: flex;
  align-items: center;

  > div {
    display: flex;
    margin-left: 9px;
    background-color: rgba(256, 256, 256, 0.5);
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 4px;  
  }
`;

export const RightWrapper = styled.div`
  margin-right: 48px;
  margin-left: 20px;

  > img {
    width: 106px;
    height: 106px;
    margin-left: 20px;
    cursor: pointer;  
  }
`;