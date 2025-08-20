import { Grid, Header, Segment } from "semantic-ui-react";
import '../css/style.css'


const DashboardHome = () => (
    <div style={{marginTop: '70px', padding: '0px 80px'}}>
    <Header as="h4"  class="profile">
        INSTRUCTIONS
    </Header>
    <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 0px', padding: '20px 30px'}}>
        <Grid>
            <Grid.Column>
                <p class="ribbon">
                    1. Click on My Profile menu to update profile
                </p>
                <p class="ribbon">
                    2. Click on Siwes menu to update location
                </p>
                <p class="ribbon">
                    3. Proceed to Pay Placement Fee by clicking on MAKE PAYMENT
                </p>  
                <p class="ribbon">
                    4. Meet your department SIWES Coordinator/SIWES Directorate for further instructions	
                </p>      
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default DashboardHome