import "../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faLocationDot,
  faPhone,
  faClock
);
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row gy-3 footer-underline">
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-content">
            <div className="footer-box">
              <div className="footer-icon">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              </div>
              <div className="footer-info">
                <h3>Address</h3>
                <p>
                  A108 Adam Street
                  <br />
                  New York, NY 535022 - US
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-content">
            <div className="footer-box">
              <div className="footer-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </div>
              <div className="footer-info">
                <h3>Reservations</h3>
                <p>
                  <strong>Phone:</strong>
                  +1 5589 55488 55
                  <br />
                  <strong>Email:</strong>
                  info@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-content">
            <div className="footer-box">
              <div className="footer-icon">
                <FontAwesomeIcon icon="fa-regular fa-clock" />
              </div>
              <div className="footer-info">
                <h3>Opening Hours</h3>
                <p>
                  <strong>Mon-Sat: 11AM </strong>
                  - 23PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-content">
            <div className="footer-box">
              <div className="footer-icon"></div>
              <div className="footer-info">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="/">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="copyright">
              © Copyright
              <strong>Yummy</strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by
              <a href="/">Ngoc Thang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
