import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Ambulance.css";
const Ambulance = (props) => {
  const { img, rent } = props.ambulance;
  return (
    <div>
      <Col>
        <Card className="card-data mt-4 amb">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="mt-4 mb-4">Rent: ${rent}</Card.Title>

            <Link to={"/information"}>
              <Button className="btn btn-primary mt-4 amb-btn">Hire</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Ambulance;
