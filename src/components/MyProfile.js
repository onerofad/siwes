import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import DashboardSidebar from "./DashboardSidebar"
import DashboardSiwes from "./DashboardSiwes"
import DashboardProfile from "./DashboardProfile"

const MyProfile = () => {

    return(
          <>

            <div style={{height: '100vh', overflowY: 'hidden', overflowX: 'hidden'}}>
             <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <DashboardMenu />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{margin: 0}}>
                    <Grid.Column width={3}>
                        <DashboardSidebar info="profile"  />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <DashboardProfile />
                    </Grid.Column>

                </Grid.Row>
             </Grid>
            </div>
        </>
    )
}
export default MyProfile