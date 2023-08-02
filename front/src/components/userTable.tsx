import { IUser } from "../types/user";

function UserTable(users: IUser[]) {
  //console.log(users);
  return (
    <table>
      <thead>
        <th>Email</th>
        <th>Name</th>
        <th>Password</th>
        <th>isManager</th>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.password}</td>
            <td>{user.isManager}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
