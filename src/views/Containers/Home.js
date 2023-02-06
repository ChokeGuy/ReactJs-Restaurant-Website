import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import food_decor from "../../assests/images/food-img.png";

import "../../styles/container.scss";
import "bootstrap/dist/css/bootstrap.min.css";
library.add(faCirclePlay);
const Home = (props) => {
  return (
    <div className="container">
      <div className="container-home-content row">
        <div className="home-content__title col col-5 col-lg-5">
          <div className="home-content__title__intro">
            ENJOY YOUR HEALTHY DELECIOUS FOOD
            </div>
          <div className ="home-content__title__midtro">
            The Yummy restaurant deliver many foods from over 50 countrys in the
            world.Check our websites for details.Enjoy your visitation.
          </div>
          <div className ="home-content-title-trailer">
            <button className="mybtn title-trailer-btn">Book a Table</button>
            <div className="title-trailer-video">
              <FontAwesomeIcon icon="fa-regular fa-circle-play" />
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div className="home-content__image col col-5 col-lg-5">
          <img alt="" src={food_decor}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
