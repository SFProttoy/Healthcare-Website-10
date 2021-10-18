import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, description, img } = props.service;
  return (
    <div>
      <Col>
        <Card className="card-data mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p className="fs-6 info">{description}</p>

            <Link to={`order/${id}`}>
              <Button className="btn btn-primary button">See Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
