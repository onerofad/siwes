import HeaderNav from "./Home"
import { useNavigate } from "react-router"
import AboutMobile from './AboutMobile'
import ObjectivesMobile from './ObjectivesMobile'
import FooterMobile from './FooterMobile'
import WallPaperMobile from "./WallPaperMobile"

const HomeMobile = () => {

    const navigate = useNavigate()

    return(
        <>
        <HeaderNav />
        <WallPaperMobile />
        <AboutMobile />
        <ObjectivesMobile />
        <FooterMobile />

        </>
    )
}
export default HomeMobile