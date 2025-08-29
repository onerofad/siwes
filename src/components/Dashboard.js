
import { Grid, Header } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import SidebarDesktop from "./SideBarDesktop"

const Dashboard = () => {

    return(
        <>
        <div style={{height: '100vh', overflowY: 'hidden', overflowX: 'hidden'}}>
            <DashboardMenu />
             <Grid>
                <Grid.Row style={{margin: 0}}>
                    <Grid.Column>
                        <SidebarDesktop info="dashboard" />
                    </Grid.Column>
                </Grid.Row>
             </Grid>
        </div>
        </>
    )
}
export default Dashboard