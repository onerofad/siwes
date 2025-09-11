import About from "./About"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Objectives from "./Objectives"
import WallPaper from "./WallPaper"

const Home = ({mobile}) => {
   
        return(
            <>
                <Navbar />
                <WallPaper />
                <About />
                <Objectives />
                <Footer />
            </>
        )
   
}
  
export default Home