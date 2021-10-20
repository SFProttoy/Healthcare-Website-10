import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";
const Doctor = (props) => {
  const { name, degrees, img, specialist } = props.doctor;
  return (
    <div>
      <Col>
        <Card className="mt-4 data">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p className="fs-5 info text-center fw-bold mt-5 mb-5">
              Degrees: {degrees}
            </p>
            <p className="fs-5 info text-center fw-bold">
              Specialist: {specialist}
            </p>

            <Link to={`/information`}>
              <Button className="btn btn-primary button">
                Make Appointment
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
