import quote from "../../assests/images/quote.svg";
import testimonials_1 from "../../assests/images/testimonials-images/testimonials-1.jpg";
import testimonials_2 from "../../assests/images/testimonials-images/testimonials-2.jpg";
import testimonials_3 from "../../assests/images/testimonials-images/testimonials-3.jpg";
import testimonials_4 from "../../assests/images/testimonials-images/testimonials-4.jpg";
import Carousel from "nuka-carousel";
import star from "../../assests/images/star-fill.svg";
const Testimoninal = (props) => {
  return (
    <div className="testimonial-container">
      <div className="container">
        <div className="row">
          <div className="testimonial-header col-lg-12">
            <div>TESTIMONIALS</div>
            <p>
              WHAT ARE THEY
              <span> SAYING ABOUR US</span>
            </p>
          </div>
          <Carousel
            autoplay={true}
            defaultControlsConfig={{
              nextButtonStyle: {
                visibility: "hidden",
              },
              prevButtonStyle: {
                visibility: "hidden",
              },
              pagingDotsClassName: "carousel-dot",
            }}
          >
            <div className="row testimonial-content gy-4">
              <div className="col-lg-6">
                <div className="testimonial__item">
                  <p>
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-left"
                    ></img>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-right"
                    ></img>
                  </p>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo & Founder</h4>
                  <div className="star">
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  alt=""
                  src={testimonials_1}
                  className="testimonial-content-picture"
                ></img>
              </div>
            </div>
            <div className="row testimonial-content gy-4">
              <div className="col-lg-6">
                <div className="testimonial__item">
                  <p>
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-left"
                    ></img>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-right"
                    ></img>
                  </p>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="star">
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  alt=""
                  src={testimonials_2}
                  className="testimonial-content-picture"
                ></img>
              </div>
            </div>
            <div className="row testimonial-content gy-4">
              <div className="col-lg-6">
                <div className="testimonial__item">
                  <p>
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-left"
                    ></img>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-right"
                    ></img>
                  </p>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="star">
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  alt=""
                  src={testimonials_3}
                  className="testimonial-content-picture"
                ></img>
              </div>
            </div>
            <div className="row testimonial-content gy-4">
              <div className="col-lg-6">
                <div className="testimonial__item">
                  <p>
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-left"
                    ></img>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <img
                      alt=""
                      src={quote}
                      className="testimonial__item-icon-right"
                    ></img>
                  </p>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="star">
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                    <img alt="" src={star}></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  alt=""
                  src={testimonials_4}
                  className="testimonial-content-picture"
                ></img>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Testimoninal;
