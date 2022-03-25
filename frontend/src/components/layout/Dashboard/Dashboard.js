import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="nav-container">
<div className="homebase">
        <NavLink className="btn btn-dark" to="/">Logout</NavLink>
        </div>
      <Navbar variant="dark">
      <Navbar.Brand>
        NICE 'FIT ----------
        <img
          className="smiley"
          src="../../../../Images/Icon.png"
          alt="smiley"
        />
      <Nav className="menu">
          <NavDropdown title="Menu" menuVariant="dark" >
          <NavLink to="/nicefit">Home</NavLink>

            <NavLink to="/nicefit/profile">My Profile</NavLink>
            <NavLink to="/nicefit/newpost">
              Post 'Fit
            </NavLink>
   
          </NavDropdown>
          </Nav>
      </Navbar.Brand>
      </Navbar>
     
    </div>
  );
};

export default Dashboard;
