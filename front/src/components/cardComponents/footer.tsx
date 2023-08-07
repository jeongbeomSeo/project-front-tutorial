import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  margin-bottom: 15px;
`;

const Bottom = styled.div`
  border: 2px solid rgba(45, 54, 72, 1);
  border-radius: 5px;
  width: 65%;
  text-align: center;
  padding: 13px 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: rgba(45, 54, 72, 1);
  }
`;

function Footer() {
  return (
    <Container>
      <Top>SNS 계정으로 로그인</Top>
      <Bottom>Google 로그인</Bottom>
    </Container>
  );
}

export default Footer;
