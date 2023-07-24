import { IUser } from "../types/user";

function UserTable(users: IUser) {
  return (
    <table>
      <thead>
        <th>Email</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Password</th>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
