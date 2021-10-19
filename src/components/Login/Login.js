import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const {
    handleEmailInput,
    handlePasswordInput,
    handleLogin,
    error,
    googleSignIn,
  } = useAuth();
  return (
    <div className="login mx-auto">
      <h3 className="mt-5 fw-bold" style={{ color: "#ff4747" }}>
        Please Login
      </h3>
      <Form onSubmit={handleLogin} className="p-3">
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
          Login
        </Button>
      </Form>
      <p>
        New User?
        <Link className="toggle-link" to="/register">
          Create Account
        </Link>
      </p>
      <p className="fw-bold text-dark ">Or, login with</p>
      <Button className="google-btn" onClick={googleSignIn}>
        Google
      </Button>
    </div>
  );
};

export default Login;
