import { useEffect, useState } from "react";
import "./App.scss";
import Container from "./Containers/Container";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/loading.scss";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const override = {
    borderColor: "#ce1212",
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
    let section = document.querySelectorAll("section");
    let dotNav = document.querySelectorAll(".mynavbar-list__item a");
    window.onscroll = () => {
      section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          dotNav.forEach((dot) => {
            dot.classList.remove("active");
            if (
              id === "stat" ||
              id === "introduce" ||
              id === "testimonial" ||
              id === "book"
            ) {
              dot.classList.remove("active");
            } else {
              document
                .querySelector(".mynavbar-list__item a[href*=" + id + "]")
                .classList.add("active");
            }
          });
        }
      });
    };
    handleScrollAnimation("container-about-header");
    handleScrollAnimation("content-image-picture");
    handleScrollAnimation("content-intro-box");

    handleScrollAnimation("introduce-container-content__why");

    handleScrollAnimation("content-whylist-box");

    handleScrollAnimation("menu-header");
    handleScrollAnimation("menu-food-list");
    handleScrollAnimation("menu-content-header");
    handleScrollAnimation("menu-content-list");

    handleScrollAnimation("testimonial-header");
    handleScrollAnimation("chefs-header");
    handleScrollAnimation("event-header");
    handleScrollAnimation("chefs-content-container");

    handleScrollAnimation("gallery-header");
    handleScrollAnimation("book-header");
    handleScrollAnimation("contact-header");
    handleScrollAnimation("contact-content");
    handleScrollAnimation("form-book");
    handleScrollAnimation("book-content-img");

    handleScrollAnimation("slider-container");
    handleScrollAnimation("event-content");
    handleScrollAnimation("gallery-content");
    handleScrollAnimation("stat-container-content__item");
  }, [loading]);
  const handleScrollAnimation = (className) => {
    setTimeout(() => {
      window.addEventListener("scroll", function () {
        let top = window.pageYOffset + window.innerHeight,
          isMany = document.querySelectorAll(`.${className}`),
          isVisible = top > document.querySelector(`.${className}`).offsetTop;
        if (isVisible) {
          if (isMany.length > 1 && className !== "stat-container-content__item")
            document
              .querySelectorAll(`.${className}`)
              .forEach((item) => item.classList.add("animated", "fadeInUp200"));
          else if (className === "book-content-img") {
            document
              .querySelectorAll(`.${className}`)
              .forEach((item) => item.classList.add("animated", "zoomIn"));
          } else if (className === "stat-container-content__item") {
            document
              .querySelectorAll(`.${className}`)
              .forEach((item) => item.classList.add("animated", "fadeInAngle"));
          } else
            document
              .querySelector(`.${className}`)
              .classList.add("animated", "fadeInUp200");
        }
      });
    }, 800);
  };
  return (
    <div className="App">
      {loading === false ? (
        <>
          <Header />
          <Container />
          <Footer />
        </>
      ) : (
        <div className="App-loading">
          <RingLoader loading={loading} size={60} cssOverride={override} />
        </div>
      )}
    </div>
  );
}

export default App;
