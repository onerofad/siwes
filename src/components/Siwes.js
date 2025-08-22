import { Grid } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import DashboardSidebar from "./DashboardSidebar"
import DashboardSiwes2 from "./DashboardSiwes2"

const Siwes = () => {

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
                        <DashboardSidebar info="siwes"  />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <DashboardSiwes2 />
                    </Grid.Column>

                </Grid.Row>
             </Grid>
            </div>
        </>
    )
}
export default Siwes