import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const fb = <FontAwesomeIcon icon={faFacebook} />;
  const yt = <FontAwesomeIcon icon={faYoutube} />;
  const ld = <FontAwesomeIcon icon={faLinkedin} />;

  const ig = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <div className="footer">
      <div className="row w-100">
        <div className="col-md-4 footer-sections">
          <h2 className="text-danger">Contact us:</h2>
          <h4>Phone: +88-0155555555</h4>
          <h5 className="text-dark">Email: abd05@gmail.com</h5>
        </div>
        <div className="col-md-4 footer-sections">
          <h2 className="text-danger">Useful Links:</h2>
          <h5 className="text-dark">Discounts</h5>
          <h5 className="text-dark">Coupons</h5>
          <h5 className="text-dark">Blog Posts</h5>
        </div>
        <div className="col-md-4 footer-sections">
          <h2 className="text-danger">Connect with us via:</h2>
          <span className="icons">{fb}</span>
          <span className="icons">{yt}</span>
          <span className="icons">{ld}</span>
          <span className="icons">{ig}</span>
        </div>
      </div>
      <hr className="mx-auto hr" />
      <span className="fw-bold">Copyright &copy; 2021 - SFP</span>
    </div>
  );
};

export default Footer;
