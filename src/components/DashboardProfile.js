import { Grid, Header, Segment } from "semantic-ui-react"

const DashboardProfile = () => {

    return(
        <div style={{marginTop: '120px', padding: '0px 80px',  height: '75vh', overflowY: 'scroll'}}>
      
        <Header as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Prompt", color: "#000"}}>
            STUDENT PROFILE
        </Header>
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
                
            </Grid>
    
        </Segment>
        </div>
    )
}
export default DashboardProfile