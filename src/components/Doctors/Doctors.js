import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <h1 className="mt-4">
        Our
        <span className="services"> Qualified Doctors</span>
        <Row xs={1} md={3} className="container g-4 mx-auto">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </h1>
    </div>
  );
};

export default Doctors;
