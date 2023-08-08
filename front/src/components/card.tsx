import { styled } from "styled-components";
import Header from "./cardComponents/header";
import Footer from "./cardComponents/footer";
import { CardProps } from "../types/card";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`;
const Logo = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  background-color: rgba(45, 54, 72, 1);
  width: 36%;
  text-align: center;
  padding: 20px 0;
  border-radius: 5px;
`;

const Box = styled.div`
  margin-top: 20px;
  border: 2px solid var(--gray);
  border-radius: 5px;
`;

const InnerBox = styled.div`
  padding: 90px;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

function Card({ children }: CardProps) {
  return (
    <Container>
      <Logo>로고</Logo>
      <Box>
        <InnerBox>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </InnerBox>
      </Box>
    </Container>
  );
}

export default Card;
