import { useLoaderData } from "react-router";
import { styled } from "styled-components";
import { IUser, IUsers } from "../types/user";
import UserTable from "../components/userTable";

const Container = styled.div`
  width: 100vw;
  height: 100vh - 100px;
`;

const Box = styled.div`
  width: 800px;
  height: 500px;
  background-color: rgba(128, 128, 128, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Home() {
  const users = useLoaderData() as IUser[];
  return (
    <Container>
      <Box>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
              <th>isManager</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.isManager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Container>
  );
}

export default Home;
