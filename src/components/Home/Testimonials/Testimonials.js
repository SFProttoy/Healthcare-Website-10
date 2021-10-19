import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="mt-5">
      <h2>
        Patients <span style={{ color: "#E74C3C" }}>Experiences</span>
      </h2>
      <Row className="w-100">
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Img
              className="mx-auto image"
              variant="top"
              src="https://i.ibb.co/vLZp450/man1.jpg"
            />
            <Card.Body>
              <Card.Title>Peterson Smith</Card.Title>
              <p className="fw-bolder">
                Amazing services. They took care throughout my tough journey.
                Very happy with services.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Img
              className="mx-auto image"
              variant="top"
              src="https://i.ibb.co/drMHzxL/man2.jpg"
            />
            <Card.Body>
              <Card.Title>William Harvey</Card.Title>
              <p className="fw-bolder">
                Satisfied with their approach. Just Awesome....
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Img
              className="mx-auto image"
              variant="top"
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1845651797.1630368000"
            />
            <Card.Body>
              <Card.Title>Mark Peterson</Card.Title>
              <p className="fw-bolder">
                Doctors are so friendly. Love all staffs who took care me a lot.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
