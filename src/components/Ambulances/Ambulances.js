import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Ambulance from "../Ambulance/Ambulance";

const Ambulances = () => {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    fetch("./ambulances.json")
      .then((res) => res.json())
      .then((data) => setAmbulances(data));
  }, []);
  return (
    <div>
      <h1 className="mt-4">
        Our
        <span className="services"> Ambulances</span>
      </h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {ambulances.map((ambulance) => (
          <Ambulance key={ambulance.id} ambulance={ambulance}></Ambulance>
        ))}
      </Row>
    </div>
  );
};

export default Ambulances;
