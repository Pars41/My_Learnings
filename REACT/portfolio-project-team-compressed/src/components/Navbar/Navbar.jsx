import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      {/* <div>NAVBAR</div> */}
      <div className="navbar">
        <NavLink
          to={"/"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "white",
          })}
        >
          About Me
        </NavLink>
        <NavLink
          to={"/projects"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "white",
          })}
        >
          My Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "white",
          })}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
