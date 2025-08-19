import { Grid, Header, Segment } from "semantic-ui-react"

const DashboardSiwes = () => (

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
                </Grid.Column>
            </Grid>
    
        </Segment>
        </div>
)
export default DashboardSiwes