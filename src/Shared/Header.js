import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo2 from "../images/logo2.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="p-0"
        style={{ backgroundColor: "#D6EAF8" }}
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={logo2}
              width="130"
              height="65"
              className="d-inline-block align-top p-0 m-0"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="link" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/doctors">
              Our Doctors
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/about">
              About us
            </Nav.Link>
            {user.email ? (
              <>
                <p className="text-dark mt-3 me-3 fw-bolder">
                  {user?.displayName}
                </p>
                <Button onClick={logOut}>LogOut</Button>
                {/* {history.push("/home")} */}
              </>
            ) : (
              <>
                <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
