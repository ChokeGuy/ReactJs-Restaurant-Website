import { useEffect, useState } from "react";
import "./App.scss";
import Container from "./Containers/Container";
import Footer from "./Footer";
import Header from "./Header";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const override = {
    borderColor: "#ce1212",
  };

  useEffect(() => {
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
  }, []);
  useEffect(() => {
    if (loading === 0) {
      return;
    }
    let load = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearInterval(load);
    };
  }, [loading]);
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
          <RingLoader loading={loading} size={80} cssOverride={override} />
        </div>
      )}
    </div>
  );
}

export default App;
