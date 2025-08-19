import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"
import { Button, Form, Grid, Header, Icon, Label, Modal, Segment } from "semantic-ui-react"

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
        <div style={{marginTop: '100px', padding: '0px 80px',  height: '75vh', overflowY: 'scroll'}}>
        <Grid>
            <Grid.Column width={8}>
                <Header as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Prompt", color: "#000"}}>
                    STUDENT PROFILE
                </Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button color="blue" floated="right" size="large" onClick={() => dispatch({type: 'open', size: 'large'})}>
                    <Icon name="edit" />
                    Update Profile
                </Button>
            </Grid.Column>
        </Grid>
       
        <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 0px', padding: '50px 30px',}}>
            <Grid divided>
                <Grid.Row>
                    <Grid.Column widescreen={8}>
                        <Header dividing>
                            Personal Information
                        </Header>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Surname:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Oghenekaro
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        First Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        John
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Middle Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Ediri
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Gender:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Male
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Date of Birth:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        August 10, 2000
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Email:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        johnediri@gmail.com
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Phone:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        +234 809 8304 9526
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Password:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        ***********
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header dividing>
                            Additional Information
                        </Header>
                         <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Residential Address:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Oghenekaro
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Residence Town:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        John
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        LGA:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Ediri
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Country:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Nigeria
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Bank Account Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Male
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Bank Name:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        August 10, 2000
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Bank Account Number:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        johnediri@gmail.com
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        Sort Code:
                                    </p> 
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 15, fontStyle: 'normal', fontWeight: 400}}>
                                        +234 809 8304 9526
                                    </p>  
                                </Grid.Column> 
                            </Grid.Row>
                          
                        </Grid>    
                    </Grid.Column>
                </Grid.Row>
                <Modal
                    open={open}
                    size={size}
                >
                    <Modal.Header>
                        Upload Profile
                        <Icon link onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close" />
                    </Modal.Header>
                    <Modal.Content>
                        <Header as="h4">Profile Information</Header>
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

                            <Header as="h4">Additional Information</Header>

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
                            <Form.Field>
                                <Button>
                                    Upload
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