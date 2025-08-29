import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import SidebarDesktop from "./SideBarDesktop"


const Siwes = () => {

    return(
        <>
            <div style={{height: '100vh', overflowY: 'hidden', overflowX: 'hidden'}}>
                <DashboardMenu />
                <Grid>
                    <Grid.Row style={{margin: 0}}>
                        <Grid.Column>
                            <SidebarDesktop info="siwes" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
export default Siwes