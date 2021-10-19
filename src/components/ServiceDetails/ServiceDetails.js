import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  if (serviceDetails.length) {
    const findService = serviceDetails.filter(
      (service) => service.id === parseInt(serviceId)
    );
    setServiceDetails(findService[0]);
    console.log(findService[0]);
  }

  const { name, description, img, price } = serviceDetails;

  return (
    <Container>
      <Row className="mt-5 d-flex justify-content-center align-items-center">
        <Col>
          <img style={{ width: "700px", height: "500px" }} src={img} alt="" />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p className="mt-5 mb-4 fs-5">{description}</p>
          <h5 className="text-dark fw-bolder">Price: ${price}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
