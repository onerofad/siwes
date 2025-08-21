import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"
import { Button, Divider, Form, Grid, Header, Icon, Label, Modal, Segment } from "semantic-ui-react"
import '../css/style.css'

const initialState = {
    open: false,
    size: undefined
}

function modalReducer(state, action){

    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close':
            return {open: false}

        default:
            new Error('An error has occurred')
    }
}

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const DashboardProfile = () => {

    const [state, dispatch] = useReducer(modalReducer, initialState)

    const {open, size} = state

    return(
        <div style={{marginTop: '70px', padding: '0px 80px',  }}>
        <Grid>
            <Grid.Column width={8}>
                <Header as="h4" class="profile">
                    STUDENT PROFILE
                </Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button color="blue" floated="right" size="small" onClick={() => dispatch({type: 'open', size: 'medium'})}>
                    <Icon name="edit" />
                    Update Profile
                </Button>
            </Grid.Column>
        </Grid>
       
        <Segment  basic vertical style={{borderRadius: 10, margin: '20px 0px', padding: '10px 0px', height: '72vh',}}>
            <Grid columns={2}>
                <Grid.Column>
                    <Segment size="small" raised secondary>
                        <Label as="a" color="blue" ribbon>Profile Details</Label>
                        <Divider />
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Surname:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Oghenekaro
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        First Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        John
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Middle Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Ediri
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Gender:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Male
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Date of Birth:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        August 10, 2000
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Email:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        johnediri@gmail.com
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Phone:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        +234 809 8304 9526
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Password:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        ***********
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment size="small" raised secondary>
                        <Label as="a" color="blue" ribbon>Additional Details</Label>
                        <Divider />
                        <Grid>
                                <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Residential Address:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Oghenekaro
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Residence Town:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        John
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        LGA:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Ediri
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Country:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Nigeria
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Bank Account Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Male
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Bank Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        August 10, 2000
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Bank Account Number:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        johnediri@gmail.com
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        Sort Code:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p class="ribbon">
                                        +234 809 8304 9526
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            </Grid>
                    </Segment>
                </Grid.Column>
                <Modal
                    open={open}
                    size={size}
                    as={Segment}
                >
                    <Modal.Header as="h4">
                        Update Profile
                        <Icon link onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close" />
                    </Modal.Header>
                    <Modal.Content>
                        <Label ribbon color="blue">Edit Profile Information</Label>
                        <Form>
                            <Form.Group widths={"equal"}>
                                <Form.Field>
                                    <Form.Input
                                        label="Surname"
                                        placeholder="Surname"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="First Name"
                                        placeholder="First Name"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Middle Name"
                                        placeholder="Middle Name"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Select
                                        label="Gender"
                                        placeholder="Gender"
                                        options={genderOptions}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={"equal"}>
                                <Form.Field>
                                    <Form.Input
                                        label="Date of Birth"
                                        placeholder="Date of Birth"
                                        type="date"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Email"
                                        placeholder="Email"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Phone No"
                                        placeholder="Phone No"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Password"
                                        placeholder="Password"
                                       
                                    />
                                </Form.Field>
                            </Form.Group>

                            <Label ribbon color="blue">Edit Additional Information</Label>

                               <Form.Group widths={"equal"}>
                                <Form.Field>
                                    <Form.Input
                                        label="Residence Address"
                                        placeholder="Residence Address"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Residence Town"
                                        placeholder="Residence Town"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="LGA"
                                        placeholder="LGA"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Country"
                                        placeholder="Country"
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths={"equal"}>
                                <Form.Field>
                                    <Form.Input
                                        label="Bank Account Name"
                                        placeholder="Date of Birth"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Bank Name"
                                        placeholder="Bank Name"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Bank Account No"
                                        placeholder="Bank Account Number"
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="Sort Code"
                                        placeholder="Sort Code"
                                       
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field style={{textAlign: 'center'}}>
                                <Button color="blue" size="large">
                                    Update Profile
                                </Button>
                            </Form.Field>


                            
                        </Form>
                    </Modal.Content>

                </Modal>
                
            </Grid>
    
        </Segment>
        </div>
    )
}
export default DashboardProfile