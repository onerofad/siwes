
import { Grid, Header } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import DashboardSidebar from "./DashboardSidebar"
import DashboardHome from "./DashboardHome"

const Dashboard = () => {

    return(
        <>

            <div style={{height: '100vh', overflowY: 'hidden', overflowX: 'hidden'}}>
            <DashboardMenu />
             <Grid>
                <Grid.Row style={{margin: 0}}>
                    <Grid.Column width={3}>
                        <DashboardSidebar info="dashboard"  />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <DashboardHome />
                    </Grid.Column>

                </Grid.Row>
             </Grid>
            </div>
        </>
    )
}
export default Dashboard