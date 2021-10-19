import {
  faAmbulance,
  faClinicMedical,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Time.css";
const Time = () => {
  const ambulance = <FontAwesomeIcon icon={faAmbulance} />;
  const call = <FontAwesomeIcon icon={faPhone} />;
  const bed = <FontAwesomeIcon icon={faClinicMedical} />;
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
            <h5>{bed} Intensive Care Unit(ICU) Booking</h5>
            <h5>{ambulance} Ambulance Call</h5>
            <p className="fw-bold fs-3 text-white">
              {call} Call Us Any Time: +88012344568
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Time;
