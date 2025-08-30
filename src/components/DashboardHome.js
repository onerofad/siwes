import { Grid, Header, Segment , Label, Message} from "semantic-ui-react";
import '../css/style.css'


const DashboardHome = () => (
    <>
    
        <Label style={{marginTop: 70}} size="large" ribbon color="blue">INSTRUCTIONS</Label>                         
          
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

    </>
)
export default DashboardHome