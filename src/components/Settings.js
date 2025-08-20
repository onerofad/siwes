import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import DashboardSidebar from "./DashboardSidebar"
import DashboardSetting from './DashboardSetting'

const Setting = () => {

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
                        <DashboardSidebar info="setting"  />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <DashboardSetting />
                    </Grid.Column>

                </Grid.Row>
             </Grid>
            </div>
        </>
    )
}
export default Setting