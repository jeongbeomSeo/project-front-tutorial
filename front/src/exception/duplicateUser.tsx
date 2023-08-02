import { styled } from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Message = styled.h1`
  font-size: 3em;
  color: #333;
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <Message>User 중복</Message>
    </NotFoundWrapper>
  );
}

export default NotFound;
