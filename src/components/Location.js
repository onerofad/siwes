import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import SidebarDesktop from "./SideBarDesktop"

const Location = () => {

    return(
        <>
        <div style={{height: '100vh', overflowY: 'hidden', overflowX: 'hidden'}}>
            <DashboardMenu />
             <Grid>
                <Grid.Row style={{margin: 0}}>
                    <Grid.Column>
                        <SidebarDesktop info="location" />
                    </Grid.Column>
                </Grid.Row>
             </Grid>
        </div>
            
        </>
    )
}
export default Location