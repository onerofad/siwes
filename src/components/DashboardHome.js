import { Grid, Header, Segment , Label, Message} from "semantic-ui-react";
import '../css/style.css'


const DashboardHome = () => (
    <div style={{marginTop: '20px', padding: '0px 40px', height: '100vh',}}>
        <Grid>
        <Grid.Row>
            <Grid.Column>
                 <Label size="large" ribbon color="blue">INSTRUCTIONS</Label>                         
            </Grid.Column>
        </Grid.Row>
        </Grid>
            
        <Grid>
            <Grid.Column width={12}>
                <Message negative>
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

                </Message>
            </Grid.Column>
        </Grid>

    </div>
)
export default DashboardHome