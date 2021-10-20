import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Information = () => {
  const { user } = useAuth();
  return (
    <div className="login mx-auto">
      <h3 className="mt-5 fw-bold" style={{ color: "#ff4747" }}>
        Please Give Your Information
      </h3>
      <Form className="p-5">
        <Form.Group className="size mx-auto mb-5">
          <Form.Control type="text" defaultValue={user.email} />
        </Form.Group>

        <Form.Group className="size mx-auto mb-5">
          <Form.Control type="text" defaultValue={user.displayName} required />
        </Form.Group>

        <Form.Group className="size mx-auto mb-5">
          <Form.Control type="text" placeholder="Address" required />
        </Form.Group>
        <Form.Group className="size mx-auto mb-5">
          <Form.Control type="text" placeholder="City" required />
        </Form.Group>
        <Link to="/doctors/thanks">
          <Button className="btn sub-btn" type="submit">
            Add
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Information;
