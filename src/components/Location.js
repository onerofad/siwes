import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import DashboardSidebar from "./DashboardSidebar"
import DashboardSiwes from "./DashboardSiwes"
import DashboardLocation from "./DashboardLocation"

const Location = () => {

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
                        <DashboardSidebar info="location"  />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <DashboardLocation />
                    </Grid.Column>

                </Grid.Row>
             </Grid>
            </div>
        </>
    )
}
export default Location