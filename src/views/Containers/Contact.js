import map from "../../assests/images/contact-images/map.svg";
import email from "../../assests/images/contact-images/envelope.svg";
import phone from "../../assests/images/contact-images/telephone.svg";
import share from "../../assests/images/contact-images/share.svg";
const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="contact-header">
              <div>CONTACT</div>
              <p>
                NEED HELP? <span> CONTACT US</span>
              </p>
            </div>
            <div className="contact-content">
              <div className="google-map mb-3">
                <iframe
                  title="g-map"
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.336679747903!2d106.77792441533022!3d10.84310035613824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273ddcc91d09%3A0x2f8405032ede86e2!2zVMSDbmcgTmjGoW4gUGjDuiBBLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1676262074845!5m2!1svi!2s"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-info">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info__item">
                      <div className="contact__item-pic">
                        <img alt="" src={map}></img>
                      </div>
                      <div>
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info__item">
                      <div className="contact__item-pic">
                        <img alt="" src={email}></img>
                      </div>
                      <div>
                        <h3>Email</h3>
                        <p>contact@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info__item">
                      <div className="contact__item-pic">
                        <img alt="" src={phone}></img>
                      </div>
                      <div>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info__item">
                      <div className="contact__item-pic">
                        <img alt="" src={share}></img>
                      </div>
                      <div>
                        <h3>Opening Hours</h3>
                        <p>
                          <strong>Mon-Sat: </strong>
                          11AM - 23PM;
                          <strong> Sunday: </strong>
                          Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row g-4">
                    <div className="col-xl-6 form-group">
                      <input
                        className="contact-form__input form-control"
                        type="text"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div className="col-xl-6 form-group">
                      <input
                        className="contact-form__input form-control"
                        type="text"
                        placeholder="Your Email"
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        className="contact-form__input form-control"
                        type="text"
                        placeholder="Subject"
                      ></input>
                    </div>
                    <div className="form-group contact-textarea-box">
                      <textarea
                        className="contact-from__textarea form-control"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="mybtn contact-btn my-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
