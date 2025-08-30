import About from "./About"
import Footer from "./Footer"
import Navbar from "./Navbar"
import WallPaper from "./WallPaper"

const Home = () => (
    <>
        <Navbar />
        <WallPaper mobile="mobile" />
        <About />
        <Footer />
    </>

)
export default Home