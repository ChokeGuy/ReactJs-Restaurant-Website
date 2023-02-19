import menu_item_1 from "../../assests/images/menu-images/menu-item-1.png";
import menu_item_2 from "../../assests/images/menu-images/menu-item-2.png";
import menu_item_3 from "../../assests/images/menu-images/menu-item-3.png";
import menu_item_4 from "../../assests/images/menu-images/menu-item-4.png";
import menu_item_5 from "../../assests/images/menu-images/menu-item-5.png";
import menu_item_6 from "../../assests/images/menu-images/menu-item-6.png";
const Menu = (props) => {
  return (
    <div className="menu-container">
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
              <a className="active" href="/starters">
                Starters
              </a>
            </li>
            <li className="menu-food-list__item">
              <a className="" href="/breakfast">
                Breakfast
              </a>
            </li>
            <li className="menu-food-list__item">
              <a className="" href="/lunch">
                Lunch
              </a>
            </li>
            <li className="menu-food-list__item">
              <a className="" href="/dinner">
                Dinner
              </a>
            </li>
          </ul>
          <div className="menu-content">
            <div className="menu-content-header">
              <h3>MENU</h3>
              <span>Starters</span>
            </div>
            <div className="menu-content-list">
              <div className="row">
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_1}></img>
                    <div>Magnam Tiste</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$5.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_2}></img>
                    <div>Aut Luia</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$14.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_3}></img>
                    <div>Est Eligendi</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$8.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_4}></img>
                    <div>Eos Luibusdam</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$12.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_5}></img>
                    <div>Eos Luibusdam</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$12.95</span>
                  </div>
                </div>
                <div className="menu-content-box col-lg-4 ">
                  <div className="menu-box__item">
                    <img alt="" src={menu_item_6}></img>
                    <div>Laboriosam Direva</div>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>$9.95</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
