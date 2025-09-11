import { Grid } from "semantic-ui-react"
import Navbar from "../Navbar"
import AboutMobile from "./AboutMobile"
import FooterMobile from "./FooterMobile"
import NavbarMobile from "./NavbarMobile"
import ObjectivesMobile from "./ObjectivesMobile"
import WallPaperMobile from "./WallPaperMobile"


const HomeMobile = () => {

        return(
            <>
            <Grid>
                <Grid.Column>
                    <NavbarMobile />
                    <WallPaperMobile />
                    <AboutMobile />
                    <ObjectivesMobile />
                    <FooterMobile />
                    </Grid.Column>
            </Grid>
               
            </>
        )
}
  
export default HomeMobile