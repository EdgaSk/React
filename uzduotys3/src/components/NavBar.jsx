import { Link } from "react-router-dom";
import "./styles/NavBar.css"

const NavBar = () => {
    return (
        <nav className="navBarCointainer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
        </nav>
    )
}

export default NavBar;