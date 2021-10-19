import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <Container>
      <h1 className="fw-bold">Who We Are?</h1>
      <p className="mt-5 about-para">
        The MediCare Medical Team works closely with a team of over 100
        nationwide doctors and health experts across a broad range of specialty
        areas to ensure its content is up to date, accurate, and helps you live
        a healthier life.
      </p>
      <h1 className="fw-bold mt-5">What We Do For Our Patients?</h1>
      <p className="mt-5 about-para">
        MediCare has created an organization that we believe fulfills the
        promise of health information on the Internet. We provide credible
        information, supportive communities, and in-depth reference material
        about health subjects that matter to you. We are a source for original
        and timely health information as well as material from well known
        content providers. The MediCare content staff blends award-winning
        expertise in journalism, content creation, community services, expert
        commentary, and medical review to give our users a variety of ways to
        find what they are looking for.
      </p>
      <h1 className="fw-bold">Terms and Conditions of Use</h1>
      <h3 className="fw-bold">READ THIS CAREFULLY..</h3>
      <p className="mt-5 about-para">
        The contents of the MediCare Site, such as text, graphics, images, and
        other materials created by MediCare or obtained from its licensors, and
        other materials contained on the MediCare Site (collectively, "Content")
        are for informational purposes only. The Content is not intended to be a
        substitute for professional medical advice, diagnosis, or treatment.
        Always seek the advice of your physician or other qualified health
        provider with any questions you may have regarding a medical condition.
        Never disregard professional medical advice or delay in seeking it
        because of something you have read on the MediCare Site! If you think
        you may have a medical emergency, call your doctor or 911 immediately.
        MediCare does not recommend or endorse any specific tests, physicians,
        products, procedures, opinions, or other information that may be
        mentioned on the Site. Reliance on any information provided by Medicare
        employees, others appearing on the Site at the invitation of MediCare,
        or other visitors to the Site is solely at your own risk.
      </p>
    </Container>
  );
};

export default About;
