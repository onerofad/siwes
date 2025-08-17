import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
import Navbar2 from "./Navbar2.js"
import '../css/style.css'
import Footer from "./Footer.js"

const Login = () => {

    return(
        <>
        <div style={{ height: '100vh', backgroundColor: ''}} >
            <Navbar2 />
        <Grid 
            textAlign="center" 
            verticalAlign="middle" 
        >
            <Grid.Column style={{maxWidth: 400}}>
                    <Header 
                        as='h2' 
                        textAlign="center"
                        style={{
                            fontFamily: "Montserrat",
                            fontWeight: 700,
                            fontStyle: "normal",
                            fontSize: 20,
                            display: 'block'
                        }} 
                        
                    >
                        <Header.Content>
                            STUDENT LOGIN
                        </Header.Content>
                    </Header>
                    <Form size="large">
                        <Segment padded raised>
                            <Form.Input
                                placeholder='Mat No'
                            />
                            <Form.Input
                                placeholder='Password'
                            />
                            <Form.Field style={{textAlign: 'left'}}>
                                <Form.Checkbox 
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        fontFamily: 'InriaSerif'

                                    }}
                                    label='Remember me'
                                />
                            </Form.Field>
                            
                            <Button fluid color="blue">
                                Login
                            </Button>
                        </Segment>
                    </Form>
            </Grid.Column>
          
        </Grid>
        </div>
        </>

    )
}
export default Login