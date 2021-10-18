import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Time from "../Time/Time";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Time></Time>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
