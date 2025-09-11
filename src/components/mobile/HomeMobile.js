import Navbar from "../Navbar"
import AboutMobile from "./AboutMobile"
import FooterMobile from "./FooterMobile"
import ObjectivesMobile from "./ObjectivesMobile"
import WallPaperMobile from "./WallPaperMobile"


const HomeMobile = () => {

        return(
            <>
                <Navbar />
                <WallPaperMobile />
                <AboutMobile />
                <ObjectivesMobile />
                <FooterMobile />
            </>
        )
}
  
export default HomeMobile