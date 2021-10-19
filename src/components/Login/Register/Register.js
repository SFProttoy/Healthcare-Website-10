import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {
    error,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleRegistration,
    googleSignIn,
  } = useAuth();
  return (
    <div className="login mx-auto">
      <h3 className="mt-5 fw-bold" style={{ color: "#ff4747" }}>
        Please Registration
      </h3>
      <Form onSubmit={handleRegistration} className="p-5">
        <Form.Group className="size mx-auto mb-5" controlId="formBasicName">
          <Form.Control
            onBlur={handleNameInput}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="size mx-auto mb-5" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailInput}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="size mx-auto mb-5" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordInput}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <h5 className="text-danger mb-4">{error}</h5>

        <Button className="btn sub-btn" type="submit">
          Create Account
        </Button>
      </Form>
      <p>
        New Registerd?
        <Link className="toggle-link" to="/login">
          Login
        </Link>
      </p>
      <p className="fw-bold text-dark">Or, Sign up with</p>
      <Button className="google-btn" onClick={googleSignIn}>
        Google
      </Button>
    </div>
  );
};

export default Register;
