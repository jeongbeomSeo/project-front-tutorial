import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <>
      <Link to={`/login`}>Go Login Page</Link>
      <Outlet />
    </>
  );
}

export default User;
