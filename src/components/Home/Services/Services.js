import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="mt-4">
        Our
        <span className="services"> Test Services</span>
        <Row xs={1} md={3} className="container g-4 mx-auto">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </h1>
    </div>
  );
};

export default Services;
