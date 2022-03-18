
import { Link, NavLink } from "react-router-dom";


const Navbar = ({ isloggedin }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand " to="/" style={({ isActive }) => {
                return { backgroundColor: isActive ? 'white' : '' }
            }}>
                <img src="/images.jpeg" width="128" height="70" alt="" />
            </NavLink>

            <NavLink className="navbar-brand" to="/" style={({ isActive }) => {
                return { backgroundColor: isActive ? '' : '' }
            }}>Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/" style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'red' : '' }
                    }}>Home </NavLink>
                    <NavLink className="nav-item nav-link" to="/Colors" style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'red' : '' }
                    }}>Colors</NavLink>
                    <NavLink className="nav-item nav-link" to="/About" style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'red' : '' }
                    }}>About</NavLink>
                    <NavLink className="nav-item nav-link disabled" to="/Contacts" style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'red' : '' }
                    }}>Contacts</NavLink>
                    <NavLink className="nav-item nav-link" to="/Posts/mobile/3" style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'red' : '' }
                    }}>Posts</NavLink>
                    <NavLink className="nav-item nav-link b-primary" to={isloggedin ? "/Logout" : "/Login"} >{isloggedin ? "Logout" : "Login"}</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;