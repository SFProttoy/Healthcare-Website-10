import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
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
    setLoading,
    path,
    saveName,
    setError,
    password,
  } = useAuth();

  const history = useHistory();
  const redirect_url = path || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        history.push(redirect_url);
      })
      .finally(() => setLoading(false));
  };

  const registration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password must contain one special character");
      return;
    }
    handleRegistration()
      .then((result) => {
        saveName();
        history.push(redirect_url);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="login mx-auto">
      <h3 className="mt-5 fw-bold" style={{ color: "#ff4747" }}>
        Please Registration
      </h3>
      <Form onSubmit={registration} className="p-5">
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
      <Button className="google-btn" onClick={handleGoogleSignIn}>
        <svg
          aria-hidden="true"
          className="native svg-icon iconGoogle"
          width="22"
          height="20"
          viewBox="0 0 18 18"
        >
          <path
            d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18Z"
            fill="#4285F4"
          ></path>
          <path
            d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17Z"
            fill="#34A853"
          ></path>
          <path
            d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07Z"
            fill="#FBBC05"
          ></path>
          <path
            d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3Z"
            fill="#EA4335"
          ></path>
        </svg>{" "}
        Google
      </Button>
    </div>
  );
};

export default Register;
