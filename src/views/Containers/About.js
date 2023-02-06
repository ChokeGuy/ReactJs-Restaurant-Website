import about2 from "../../assests/images/about-2.jpg";
import check2 from "../../assests/images/check2-all.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlay);
const About = (props) => {
  return (
    <div className="container-about-content">
      <div className="container container-about">
        <div className="container-about-header">
          <div>ABOUT US</div>
          <div>
            LEARN MORE
            <span> ABOUT US</span>
          </div>
        </div>
        <div className="row container-about-content-image">
          <div alt="" className="content-image-picture col-7 col-lg-7">
            <div className="content-image-phone">
              <span>Book a Table</span>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="container-about-content-intro col-5 col-lg-5">
            <div className="content-intro__info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="intro__info-list">
                <li>
                  <img
                    className="info-list-item__icon"
                    alt=""
                    src={check2}
                  ></img>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <img
                    className="info-list-item__icon"
                    alt=""
                    src={check2}
                  ></img>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <img
                    className="info-list-item__icon"
                    alt=""
                    src={check2}
                  ></img>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
            </div>
            <div className="content-intro__video">
              <img alt="" src={about2} className="intro__video-picture"></img>
              <a className="intro__video-clip" href="/"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
