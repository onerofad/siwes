import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"
import { Button, Divider, Form, Grid, Header, Icon, Label, Modal, Segment } from "semantic-ui-react"
import '../css/style.css'


const DashboardSiwes = () => {

    return(
        <div style={{marginTop: '70px', padding: '0px 80px',  }}>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Label size="large" ribbon color="blue">UPDATE SIWES DETAILS</Label>                         
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Form>
                        <Form.Group widths={"equal"}>
                            <Form.Field>
                                <Form.Input
                                    label="Siwes Start Date"
                                    placeholder="Start Date"
                                    type="date"
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Siwes End Date"
                                    placeholder="End Date"
                                    type="date"
                                />
                            </Form.Field>
                             <Form.Field>
                                <Form.Input
                                    label="Submission Deadline"
                                    placeholder="Deadline"
                                    type="date"
                                />
                            </Form.Field>                   
                        </Form.Group>
                        <Form.Group widths={"equal"}>
                            <Form.Field>
                                <Form.Select
                                    label="Session"
                                    placeholder="Session"
                                />
                              
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Department"
                                    placeholder="department"
                                />
                            </Form.Field>
                             <Form.Field>
                                <Form.Input
                                    label="Faculty"
                                    placeholder="Faculty"
                                />
                            </Form.Field>
                                               
                        </Form.Group>
                         <Form.Field style={{textAlign: 'center'}}>
                            <Button color="blue" size="small">
                                Update Details
                            </Button>
                        </Form.Field> 
                    </Form>
                </Grid.Column>
            </Grid.Row>
          
        </Grid>
       
       
        </div>
    )
}
export default DashboardSiwes