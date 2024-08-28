import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 103px;

  > span {
    font-size: ${props => props.theme.typo.size.h3};
    font-weight: ${props => props.theme.typo.weight.semiBold};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 12px;
  }
`;

function Title() {
  return (
    <Wrapper>
      <span>로그인</span>
    </Wrapper>
  );
}

export default Title;