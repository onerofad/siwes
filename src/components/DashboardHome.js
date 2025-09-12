import { Grid, Header, Segment , Label, Message} from "semantic-ui-react";
import '../css/style.css'


const DashboardHome = ({mobile}) => (
    <div style={{padding: '0px 15px'}}>
    
        <Label style={{marginTop: mobile ? 20 : 70, marginLeft: 30, marginBottom: 20}} size="large" ribbon color="blue">GUIDELINES</Label>                         
          
            <Message negative size={mobile ? 'mini' : 'large'}>
                <p class="ribbon">
                    1. Click on My Profile menu to view profile
                </p>
                <p class="ribbon">
                    2. Click on Siwes menu to update your SIWES details
                </p>
                <p class="ribbon">
                    3. Proceed to Location menu to select SIWES location and make payment
                </p>  
                <p class="ribbon">
                    4. Meet your department SIWES Coordinator/SIWES Directorate for further instructions	
                </p> 
            </Message>

    </div>
)
export default DashboardHome