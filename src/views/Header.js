import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

const Header = (props) => {
  return (
    <div className="mynavbar">
      <div className="mynavbar-content">
        <a href="/" className=" mynavbar-logo">
          Yummy
          <span>.</span>
        </a>
        <div className=" mynavbar-list">
          <ul className="mynavbar-list-container">
            <li className="mynavbar-list__item">
              <a href="/" className="mynavbar-list__link active">
                Home
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/about" className="mynavbar-list__link">
                About
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/menu" className="mynavbar-list__link">
                Menu
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/events" className="mynavbar-list__link">
                Events
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/chefs" className="mynavbar-list__link">
                Chefs
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/gallery" className="mynavbar-list__link">
                Gallery
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/" className="mynavbar-list__link">
                <span>Drop Down</span>
                <ul className="mynavbar-list__item__content">
                  <li className="mynavbar-list__item__content-tag">
                    Drop Down 1
                  </li>
                  <li className="mynavbar-list__item__content-tag">
                    Deep Drop Down
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                    <ul className="deepdropdown-list">
                      <li className="deepdropdown-list__item">
                        Deep Drop Down 1
                      </li>
                      <li className="deepdropdown-list__item">
                        Deep Drop Down 2
                      </li>
                      <li className="deepdropdown-list__item">
                        Deep Drop Down 3
                      </li>
                      <li className="deepdropdown-list__item">
                        Deep Drop Down 4
                      </li>
                      <li className="deepdropdown-list__item">
                        Deep Drop Down 5
                      </li>
                    </ul>
                  </li>
                  <li className="mynavbar-list__item__content-tag">
                    Drop Down 2
                  </li>
                  <li className="mynavbar-list__item__content-tag">
                    Drop Down 3
                  </li>
                  <li className="mynavbar-list__item__content-tag">
                    Drop Down 4
                  </li>
                </ul>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                </span>
              </a>
            </li>
            <li className="mynavbar-list__item">
              <a href="/" className="mynavbar-list__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="mybtn mynavbar-btn">Book a Table</button>
      </div>
    </div>
  );
};
export default Header;
