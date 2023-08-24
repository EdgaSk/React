import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
    return(
        <div>
            <ul className="linksCointainer">
                <li><Link to="/">Postpage</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;