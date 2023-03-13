import chefs1 from "../../assests/images/chefs-images/chefs-1.jpg";
import chefs2 from "../../assests/images/chefs-images/chefs-2.jpg";
import chefs3 from "../../assests/images/chefs-images/chefs-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook, faInstagram, faLinkedin);

const Chefs = (props) => {
  return (
    <section className="chefs-container" id="chefs">
      <div className="container">
        <div className="row gy-4">
          <div className="chefs-header col-lg-12 col-md-12 col-sm-12">
            <div>CHEFS</div>
            <p>
              OUR <span> PROFESSIONAL </span> CHEFS
            </p>
          </div>
          <div className="chefs-content">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 col-sm-12 chefs-content-container">
                <div className="chefs-content-box">
                  <div className="chefs-content-img">
                    <div className="chefs-content-social">
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
                    <img className="img-fluid" alt="" src={chefs1}></img>
                  </div>
                  <div className="chefs-content__item">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>
                      Velit aut quia fugit et et. Dolorum ea voluptate vel
                      tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                      minima enim corporis et voluptate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chefs-content-container">
                <div className="chefs-content-box">
                  <div className="chefs-content-img">
                    <div className="chefs-content-social">
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
                    <img className="img-fluid" alt="" src={chefs2}></img>
                  </div>
                  <div className="chefs-content__item">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chefs-content-container">
                <div className="chefs-content-box">
                  <div className="chefs-content-img">
                    <div className="chefs-content-social">
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
                    <img className="img-fluid" alt="" src={chefs3}></img>
                  </div>
                  <div className="chefs-content__item">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
