import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
`;
const LoginBox = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(251, 247, 242, 1);
`;

const Header = styled.div`
  font-size: 20px;
  height: 50px;
  font-weight: 600;
  color: rgba(255, 126, 54, 1);
  line-height: 50px;
  text-align: center;
  border-bottom: 2px solid rgba(255, 126, 54, 1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Input = styled.input`
  margin-top: 10px;
`;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: rgba(251, 247, 242, 0.5);
  color: rgba(255, 126, 54, 1);
  transform: scale(1);
  transition: transform 1.5s ease-in-out;
  cursor: pointer;
  border: 1px solid rgba(255, 126, 54, 1);
`;

// 나중에 Interface 많아지면 빼야되는 것도 고려
interface IForm {
  email: string;
  name: string;
  username: string;
  password: string;
  password1: string;
}

function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const password = watch("password");

  const onSubmit = (data: IForm) => {
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error: ", error));
  };
  return (
    <Container>
      <LoginBox>
        <Header>회원가입</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            // TypeScript를 사용함으로써 Ctrl누르고 register를 누르면 사용가능한 옵션을 확인 가능
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
            })}
            type="email"
            placeholder="Email"
          />
          <span>{errors?.email?.message}</span>
          <Input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Name"
          />
          <span>{errors?.name?.message}</span>
          <Input
            {...register("username", {
              required: {
                value: true,
                message: "Username is Required",
              },
            })}
            type="text"
            placeholder="UserName"
            // ID Check Btn => Ajax 통신을 통해서 중복 여부 확인
          />
          <span>{errors?.username?.message}</span>
          <Input
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 5,
                message: "Please enter 5 characters or more",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <span>{errors?.password?.message}</span>
          <Input
            {...register("password1", {
              required: {
                value: true,
                message: "Password1 is Required",
              },
              // 제출하고 나서 onSubmit함수에서 다뤄도 되고, 여기서 해도 된다.
              // 차라리 방식을 바꿔서, 입력을 다하고 2초뒤에 validation검사가 이루어진다음, 통과한다면 submit을 하도록 구현 가능
              // setTimeout을 두고, 입력 다한 시점을 체크 통과를 했다면 state 변수 하나 더 이용해서 제출 가능하도록 button활성화
              // 이때, 주의할 점은 다시 입력했을 때(password, password1) state 변수는 다시 false로 돌아가고 setTimeout도 다시 체크
              validate: (value) =>
                value === password || "The Passwords do not match",
            })}
            type="password"
            placeholder="Password Confirmation"
          />
          <span>{errors?.password1?.message}</span>
          <Btn>회원 가입</Btn>
        </Form>
      </LoginBox>
    </Container>
  );
}

export default Login;
