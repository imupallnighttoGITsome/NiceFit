import { Form, Button, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <NavbarBrand>
        NICE 'FIT ---------------
        <img
          className="smiley"
          src="../../../../Images/Icon.png"
          alt="smiley"
        />
      </NavbarBrand>
      <div className="form-container">
        <span>LOGIN</span>
        <Form>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <br></br>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Button className="submit" variant="btn btn-dark" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <div className="new-user">
          <p>not a member...</p>
          <p className="sign-up">
            sign up{" "}
            <span>
              &#8594;
            </span>
              <NavLink to="/nicefit/newprofile">New User</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
