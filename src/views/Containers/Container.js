import About from "./About";
import Home from "./Home";
import Chefs from "./Chefs";
// eslint-disable-next-line
import Contact from "./Contact";
import Events from "./Events";
// eslint-disable-next-line
import Gallery from "./Gallery";
import Menu from "./Menu";
import Introduce from "./Introduce";
import Stat from "./Stat";
import Testimonial from "./Testimonial";
import Book from "./Book";
import "../../styles/responsive/home/home_responsive.scss";
import "../../styles/responsive/about/about_responsive.scss";
import "../../styles/responsive/introduce/introduce_responsive.scss";
import "../../styles/responsive/stat/stat_responsive.scss";
const Container = (props) => {
  return (
    <div>
      <Home />
      <About />
      <Introduce />
      <Stat />
      <Menu />
      <Testimonial />
      <Events />
      <Chefs />
      <Book />
      <Gallery />
      <Contact />
    </div>
  );
};
export default Container;
