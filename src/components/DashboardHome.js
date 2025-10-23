import { Grid, Header, Segment , Label, Message, List} from "semantic-ui-react";
import '../css/style.css'


const DashboardHome = ({mobile}) => (
    <div style={{padding: '10px 15px'}}>
    
        <Label style={{marginTop: mobile ? 20 : 70, marginLeft: 30, marginBottom: 20}} size="large" ribbon color="blue">GUIDELINES</Label>                         
          
            <Message negative size={mobile ? 'small' : 'large'}>
                {/*<p class="ribbon">
                    1. Click on My Profile menu to view profile
                </p>
                <p class="ribbon">
                    2. Click on Siwes menu to update your SIWES details
                </p>
                <p class="ribbon" style={{display: 'block'}}>
                    3. Proceed to Location menu to select SIWES location and make payment
                </p>  
                <p class="ribbon" style={{display: 'block'}}>
                    4. Meet your department SIWES Coordinator/SIWES Directorate for further instructions	
                </p> */}
                <List relaxed>
                    <List.Item style={{color: '#000'}}>
                        <List.Icon name="arrow alternate circle right" />
                        <List.Content>
                            Click on Change Password to change your password
                        </List.Content>
                    </List.Item>
                    <List.Item style={{color: '#000'}}>
                        <List.Icon name="arrow alternate circle right" />
                        <List.Content>
                            Click on My Profile menu to view profile
                        </List.Content>
                    </List.Item>
                    <List.Item style={{color: '#000'}}>
                        <List.Icon name="arrow alternate circle right" />
                        <List.Content>
                            Click on Siwes menu to update your SIWES details
                        </List.Content>
                    </List.Item>
                    <List.Item style={{color: '#000'}}>
                        <List.Icon name="arrow alternate circle right" />
                        <List.Content>
                            Proceed to Location menu to select SIWES location and make payment
                        </List.Content>
                    </List.Item>
                    <List.Item style={{color: '#000'}}>
                        <List.Icon name="arrow alternate circle right" />
                        <List.Content>
                            Meet your department SIWES Coordinator/SIWES Directorate for further instructions
                        </List.Content>
                    </List.Item>
                </List>
            </Message>

    </div>
)
export default DashboardHome