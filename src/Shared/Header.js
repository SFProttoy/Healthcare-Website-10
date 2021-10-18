import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={logo2}
              width="120"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {/* {user.email ? (
            <>
              <Button onClick={logOut}>LogOut</Button>
              {history.push("/home")}
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button variant="danger" className="btns">
                  Sign up
                </Button>
              </Nav.Link>
            </>
          )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
