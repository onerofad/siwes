import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"
import { Button, Divider, Form, Grid, Header, Icon, Label, Modal, Segment } from "semantic-ui-react"
import '../css/style.css'


const DashboardSiwes = () => {

    return(
        <div style={{marginTop: '70px', padding: '0px 80px',  }}>
        <Grid>
            <Grid.Column width={8}>
                <Header as="h4" class="profile">
                    SIWES INFORMATION
                </Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button color="blue" floated="right" size="small">
                    <Icon name="edit" />
                    Update My Location
                </Button>
            </Grid.Column>
        </Grid>
       
        <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 0px', padding: '10px 150px', height: '72vh',}}>
            <Grid columns={1}>
                <Grid.Column>
                    <Segment size="small" raised>
                        <Label as="a" color="blue" ribbon>Siwes Details</Label>
                        <Divider />
                        <Header>
                            24/25 SIWES YEAR
                        </Header>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Program Start Date:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Mon 02 December, 2024 02:51 AM
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Program End Date:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Fri 31 October, 2025 02:51 AM
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Final Submission Deadline:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Mon 1 December, 2025 02:51 AM
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                             <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Session:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        2024/2025
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                             <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Department:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Anatomy
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                             <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Faculty:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Basic MEdical Science
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                             <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Location Fee:
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="ribbon">
                                        Not Paid
                                        <Button size="mini" floated="right" color="youtube">
                                            See list of Approved Location Fees
                                        </Button>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                                     
                        </Grid>
                    </Segment>
                </Grid.Column>      
            </Grid>
    
        </Segment>
        </div>
    )
}
export default DashboardSiwes