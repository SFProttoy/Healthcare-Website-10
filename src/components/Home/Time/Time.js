import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Time.css";

const Time = () => {
  return (
    <div>
      <div className="mt-5 time mx-auto">
        <Row>
          <Col className="p-5">
            <h3>Opening hours</h3>
            <h5>Sunday to Thursday: 8:00 AM to 10:00 PM</h5>
            <h5>Friday and Saturday: 9:00 AM to 9:00 PM</h5>
          </Col>
          <Col className="p-4">
            <h3>Emergency Services</h3>
            <h5>Intensive Care Unit(ICU) Booking</h5>
            <h5>Ambulance Call</h5>
            <p className="fw-bold fs-3 text-white">
              Call Us Any Time: +88012344568
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Time;
