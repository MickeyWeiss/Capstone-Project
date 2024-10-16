import 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div id = "NavBar">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar