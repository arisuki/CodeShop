import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import IanLogo from "./logo.svg";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={IanLogo} alt="logo" className="logo"></img>
        {/* {logo} */}
      </Link>
      &nbsp;&nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp;&nbsp;|&nbsp;
      {user ? (
        <>
          &nbsp;&nbsp;<span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/users">Log In</Link>
          <div>Welcome, guest</div>
        </>
      )}
    </nav>
  );
}
