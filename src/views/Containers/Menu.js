import menu_item_1 from "../../assests/images/menu-images/menu-item-1.png";
import menu_item_2 from "../../assests/images/menu-images/menu-item-2.png";
import menu_item_3 from "../../assests/images/menu-images/menu-item-3.png";
import menu_item_4 from "../../assests/images/menu-images/menu-item-4.png";
import menu_item_5 from "../../assests/images/menu-images/menu-item-5.png";
import menu_item_6 from "../../assests/images/menu-images/menu-item-6.png";
import "../../styles/mixins/mixins.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
const Menu = (props) => {
  const [index, setIndex] = useState(-1);
  const [title, setTitle] = useState("Starters");
  const handleClickTitle = (e) => {
    if (e.target.tagName !== "LI") {
      document
        .querySelector(".menu-food-link.active")
        .classList.remove("active");
      document.querySelector(`#${e.target.id}`).classList.add("active");
      setTitle(e.target.id);
    }
  };
  return (
    <section className="menu-container" id="menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 menu-header">
            <div>OUR MENU</div>
            <p>
              CHECK OUR
              <span> YUMMY MENU</span>
            </p>
          </div>
          <ul className="col-lg-12 menu-food-list">
            <li className="menu-food-list__item">
              <a
                href="#menu"
                onClick={(e, index) => {
                  handleClickTitle(e);
                  setIndex(index);
                }}
                id="starters"
                className="menu-food-link active"
              >
                Starters
              </a>
            </li>
            <li className="menu-food-list__item">
              <a
                href="#menu"
                onClick={(e, index) => {
                  handleClickTitle(e);
                  setIndex(index);
                }}
                data-bs-target="breakfast"
                id="breakfast"
                className="menu-food-link"
              >
                Breakfast
              </a>
            </li>
            <li className="menu-food-list__item">
              <a
                href="#menu"
                onClick={(e, index) => {
                  handleClickTitle(e);
                  setIndex(index);
                }}
                data-bs-target="lunch"
                id="lunch"
                className="menu-food-link"
              >
                Lunch
              </a>
            </li>
            <li className="menu-food-list__item">
              <a
                href="#menu"
                onClick={(e, index) => {
                  handleClickTitle(e);
                  setIndex(index);
                }}
                data-bs-target="dinner"
                id="dinner"
                className="menu-food-link"
              >
                Dinner
              </a>
            </li>
          </ul>
          <div className="menu-content">
            <div className="menu-content-header">
              <h3>MENU</h3>
              <span>{title}</span>
            </div>
            <div className="menu-content-list">
              <div className="row">
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(0)}>
                      <img className="img-fluid" alt="" src={menu_item_1}></img>
                    </div>
                    <div>Magnam Tiste</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$5.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(1)}>
                      <img className="img-fluid" alt="" src={menu_item_2}></img>
                    </div>
                    <div>Aut Luia</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$14.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(2)}>
                      <img className="img-fluid" alt="" src={menu_item_3}></img>
                    </div>
                    <div>Est Eligendi</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$8.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(3)}>
                      <img className="img-fluid" alt="" src={menu_item_4}></img>
                    </div>
                    <div>Eos Luibusdam</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$12.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(4)}>
                      <img className="img-fluid" alt="" src={menu_item_5}></img>
                    </div>
                    <div>Eos Luibusdam</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$12.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <div onClick={() => setIndex(5)}>
                      <img className="img-fluid" alt="" src={menu_item_6}></img>
                    </div>
                    <div>Laboriosam Direva</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$9.95</span>
                  </div>
                </div>
                <Lightbox
                  open={index >= 0}
                  close={() => setIndex(-1)}
                  carousel={{ finite: true }}
                  index={index}
                  controller={{ closeOnBackdropClick: true }}
                  slides={[
                    { src: menu_item_1 },
                    { src: menu_item_2 },
                    { src: menu_item_3 },
                    { src: menu_item_4 },
                    { src: menu_item_5 },
                    { src: menu_item_6 },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
