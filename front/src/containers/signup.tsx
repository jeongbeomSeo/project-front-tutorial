import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { IForm as IFormUser } from "../types/user";
import { fetchSignUp } from "../services/user";
import { useNavigate } from "react-router";

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

function SignUp() {
  //  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUser>();
  const password = watch("password");

  /*
  setState는 비동기적으로 작동하며, 즉시 업데이트되지 않습니다. 
  이것은 종종 초기 개발자들이 혼란스럽게 느끼는 부분입니다. state를 설정하고 그 값을 즉시 읽으려고 하면, 
  업데이트가 즉시 반영되지 않기 때문에 예상한 값을 얻지 못할 수 있습니다.
  즉, setUser는 바로 반환해서 await를 설정해도 의미 없고, 업데이트만 비동기적으로 작동하기 때문에 해당 방식 자체가 이용하기 힘듬.
  const makeUser = async (data: IFormUser) => {
    const { password1, ...newData } = data;
    setUser(newData);
  };
  */

  // async 와 await를 사용함으로써 아래에서 가져온 데이터를 사용해서 로직을 구현할 수 있음(비동기 요청의 특징)
  // 사용했을 때와 사용하지 않았을 때의 반환 내용도 다르다.
  const onSubmit = async (data: IFormUser) => {
    // 임시 예외 처리
    if (data.password != data.password1) {
      throw new Error("Not Validation Password");
    }

    const { password1, ...user } = data;

    //makeUser(data);

    if (user) {
      // Status Code
      const sc = await fetchSignUp(user);

      console.log(sc);
      if (sc.status === 200 || sc.status === 201) {
        navigate("/");
      } else {
        throw new Error("not success signup");
      }
    } else {
      throw new Error("Not Validation User Data");
    }
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

export default SignUp;
