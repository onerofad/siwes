import { Grid, Header, Segment } from "semantic-ui-react";

const DashboardHome = () => (
    <div style={{marginTop: '120px', padding: '0px 80px'}}>
    <Header textAlign="center" as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Prompt", color: "#000"}}>
        Follow The Instructions
    </Header>
    <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 50px', padding: '50px 30px'}}>
        <Grid>
            <Grid.Column>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    1. Click on My Profile menu to update profile
                </p>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    2. Click on Siwes menu to update location
                </p>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    3. Proceed to Pay Placement Fee by clicking on MAKE PAYMENT
                </p>  
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    4. Meet your department SIWES Coordinator/SIWES Directorate for further instructions	
                </p>      
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default DashboardHome