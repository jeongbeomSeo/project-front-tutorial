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
      <Message>404 Page Not Found</Message>
    </NotFoundWrapper>
  );
}

export default NotFound;
