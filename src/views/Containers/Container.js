import About from './About'
import Home from './Home'
import Chefs from './Chefs'
import Contact from './Contact'
import Events from './Events'
import Gallery from './Gallery'
import Menu from './Menu'
import Introduce from './Introduce'
const Container = (props) =>{
    return (
        <div>
            <Home/>
            <About/>
            <Introduce/>
            {/* <Chefs/>
            <Contact/>
            <Events/>
            <Gallery/> 
            <Menu/>  */}
        </div>
    )
}
export default Container