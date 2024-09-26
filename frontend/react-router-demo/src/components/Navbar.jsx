import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Navbar = () => {
  const navbarStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const auth = useAuth();

  return (
    <nav>
      <NavLink to="/" style={navbarStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={navbarStyle}>
        About
      </NavLink>
      <NavLink to="/product" style={navbarStyle}>
        Product
      </NavLink>
      <NavLink to="/users" style={navbarStyle}>
        Users
      </NavLink>
      {auth.user && (
        <NavLink to="/profile" style={navbarStyle}>
          Profile
        </NavLink>
      )}
      {!auth.user && (
        <NavLink to="/login" style={navbarStyle}>
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
