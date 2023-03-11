import "../styles/header.scss";
import "../styles/transition/header_transition.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CSSTransition } from "react-transition-group";
import {
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";
import "../styles/responsive/responsive.scss";
library.add(faChevronDown, faBars, faXmark);

const Header = (props) => {
  const [headermenu, ShowHeaderMenu] = useState(false);
  const [headerbtn, ShowHeaderBtn] = useState(true);
  const [dropdown, ShowDropDown] = useState(false);
  const [deepdropdown, ShowDeepDropDown] = useState(false);

  const nodeRef = useRef(null);
  const dropdownRef = useRef(null);
  const handleShowHeaderMenu = () => {
    ShowHeaderMenu(true);
    handleShowHeaderBtn();
    document.body.style = "overflow:hidden";
  };
  const handleHideHeaderMenu = () => {
    ShowHeaderMenu(false);
    handleShowHeaderBtn();
    document.body.style = "overflow:inherit";
  };
  const handleShowHeaderBtn = () => {
    ShowHeaderBtn(!headerbtn);
  };
  const handleShowDropDown = () => {
    ShowDropDown(!dropdown);
    if (dropdown === false) {
      document.querySelector(".dropdown-link").style =
        "border-bottom: 2px solid #ce1212;color:#000;";
      document.querySelector(".dropdown-link span").style =
        "transform:rotate(180deg)";
    } else {
      document.querySelector(".dropdown-link").style =
        "border-bottom: 2px solid rgba(255, 255, 255, 0.8);";
      document.querySelector(".dropdown-link span").style =
        "transform:rotate(0deg)";
    }
  };
  const handleDeepShowDropDown = () => {
    ShowDeepDropDown(!deepdropdown);
    if (deepdropdown === false) {
      document.querySelector(".deepdropdown").style =
        "border-bottom: 2px solid #ce1212;color:#000;";
      document.querySelector(".deepdropdown span").style =
        "transform:rotate(180deg)";
    } else {
      document.querySelector(".deepdropdown").style =
        "border-bottom: 2px solid rgba(255, 255, 255, 0.8);";
      document.querySelector(".deepdropdown span").style =
        "transform:rotate(0deg)";
    }
  };
  const handleClickLink = (e) => {
    if (e.target.tagName !== "LI") {
      document
        .querySelector(".mynavbar-list__link.active")
        .classList.remove("active");
      let thishref = e.target.href.replace("http://localhost:3000/", "");
      const link = document.querySelector(
        `.mynavbar-list__link[href='${thishref}']`
      );
      if (headermenu === false) {
        link.classList.add("active");
      } else {
        handleHideHeaderMenu();
        link.classList.add("active");
      }
    }
  };
  return (
    <div className="header">
      <div className="mynavbar">
        <div className="container d-flex align-items-center justify-content-between mynavbar-content">
          <a href="#home" className=" mynavbar-logo">
            Yummy
            <span>.</span>
          </a>
          <div className="mynavbar-list">
            <ul className="mynavbar-list-container">
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#home" className="mynavbar-list__link active">
                  Home
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#about" className="mynavbar-list__link">
                  About
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#menu" className="mynavbar-list__link">
                  Menu
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#events" className="mynavbar-list__link">
                  Events
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#chefs" className="mynavbar-list__link">
                  Chefs
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#gallery" className="mynavbar-list__link">
                  Gallery
                </a>
              </li>
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#home" className="mynavbar-list__link">
                  Drop Down
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
              <li
                className="mynavbar-list__item"
                onClick={(e) => {
                  handleClickLink(e);
                }}
              >
                <a href="#contact" className="mynavbar-list__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="mybtn mynavbar-btn">Book a Table</button>
          {headerbtn && headerbtn === true && (
            <div
              onClick={handleShowHeaderMenu}
              className="header-moblie__menu-icon"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
          )}
          <CSSTransition
            in={headermenu}
            nodeRef={nodeRef}
            timeout={{
              appear: 300,
              enter: 300,
              exit: 300,
            }}
            classNames="mynavbar-list-mobile"
            unmountOnExit
          >
            <>
              <div ref={nodeRef} className="mynavbar-list-mobile">
                <div>
                  <ul className="mynavbar-list-container">
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#home" className="mynavbar-list__link active">
                        Home
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#about" className="mynavbar-list__link">
                        About
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#menu" className="mynavbar-list__link">
                        Menu
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#events" className="mynavbar-list__link">
                        Events
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#chefs" className="mynavbar-list__link">
                        Chefs
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#gallery" className="mynavbar-list__link">
                        Gallery
                      </a>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a
                        href="#home"
                        className="mynavbar-list__link dropdown-link"
                        onClick={handleShowDropDown}
                      >
                        Drop Down
                        <span>
                          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </span>
                      </a>
                      <CSSTransition
                        in={dropdown}
                        nodeRef={dropdownRef}
                        timeout={{
                          appear: 300,
                          enter: 100,
                          exit: 0,
                        }}
                        classNames="mynavbar-list__item__content"
                        unmountOnExit
                      >
                        <ul
                          ref={dropdownRef}
                          className="mynavbar-list__item__content"
                        >
                          <li className="mynavbar-list__item__content-tag">
                            Drop Down 1
                          </li>
                          <li className="mynavbar-list__item__content-tag">
                            <div
                              className="deepdropdown"
                              onClick={handleDeepShowDropDown}
                            >
                              Deep Drop Down
                              <span>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                              </span>
                            </div>
                            <CSSTransition
                              in={deepdropdown}
                              nodeRef={dropdownRef}
                              timeout={{
                                appear: 300,
                                enter: 100,
                                exit: 0,
                              }}
                              classNames="deepdropdown-list"
                              unmountOnExit
                            >
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
                            </CSSTransition>
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
                      </CSSTransition>
                    </li>
                    <li
                      className="mynavbar-list__item"
                      onClick={(e) => {
                        handleClickLink(e);
                      }}
                    >
                      <a href="#contact" className="mynavbar-list__link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="header-close" onClick={handleHideHeaderMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </div>
                </div>
              </div>
              <div className="mynavbar-list-mobile-before"></div>
            </>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
export default Header;
