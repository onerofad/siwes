import About from "./About"
import Footer from "./Footer"
import Navbar from "./Navbar"
import WallPaper from "./WallPaper"

const Home = ({mobile}) => {
   
        return(
            <>
                <Navbar />
                <WallPaper />
                <About />
                <Footer />
            </>
        )
   
}
  
export default Home