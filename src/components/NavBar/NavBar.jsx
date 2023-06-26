import { Link } from 'react-router-dom'
import * as userService from "../../utilities/users-service"
import logo from "../Logo/Logo.jsx"

export default function NavBar({user, setUser}){

function handleLogOut(){
    userService.logOut()
    setUser(null)
}

    return (
        <nav>
            {logo}
            <Link to="/">Store Front</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/orders">Order History</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp;&nbsp;<span>Welcome, {user.name}</span>
  &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>

        </nav>
        )
}