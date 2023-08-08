import { styled } from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
  }
  margin-bottom: 60px;
`;

function Header() {
  return (
    <Title>
      <h1>로그인</h1>
    </Title>
  );
}

export default Header;
