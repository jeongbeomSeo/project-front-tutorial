import { styled } from "styled-components";
import Card from "../components/card";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  border: 2px solid var(--gray);
  border-radius: 5px;
  padding: 15px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-weight: 600;
  }
`;

const Btn = styled.button`
  background-color: rgba(45, 54, 72, 1);
  color: white;
  font-weight: 600;
  font-size: 21px;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  margin: 10px 0;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  div:last-child {
    span {
      margin-left: 10px;
    }
    span:nth-child(2) {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

function Login() {
  return (
    <Card>
      <Form action="">
        <Input type="text" placeholder="이메일" />
        <Input type="text" placeholder="비밀번호" />
        <Btn>로그인</Btn>
      </Form>
      <Footer>
        <div>
          <span>회원 가입</span>
        </div>
        <div>
          <span>계정 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
        </div>
      </Footer>
    </Card>
  );
}

export default Login;
