import { useNavigate } from "react-router"
import { Grid, Menu, Image, Button, Header, Segment } from "semantic-ui-react"
import logo from '../../images/icon.png'

const HomeMobile = () => {

    const navigate = useNavigate()
        return(
            <Grid>
               <Grid.Column>
                <Menu secondary>
                        <Menu.Item>
                            <Image
                            src={logo} style={{width: 30, height: 30}}
                            />
                            <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Inter', fontSize: 13, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
                                DELSU SIWES PORTAL
                            </span>
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Button 
                            onClick={() => navigate('/login')} 
                            color="blue" 
                            size="small"
                            style={{
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: 16,
                                fontFamily: 'Prompt'
                            }}
                            >
                            Login
                            </Button>
                        </Menu.Item>
                    </Menu>
                     <Segment vertical style={{backgroundColor: '#2980b9', margin: 0, padding: '40px 20px'}}>
            <Grid>
                <Grid.Column>
                    <Header inverted as="h2" style={{
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: 24,
                        display: 'block'
                    }} 
                    >
                        STUDENTS INDUSTRIAL WORK EXPERIENCE SCHEME (SIWES) PORTAL
                    </Header>
                    <Header as="h4" style={{
                         fontFamily: "Inria Serif",
                         fontWeight: 400,
                         fontStyle: "normal",
                         color: 'ButtonFace',
                         display: 'block',
                         fontSize: 20
                    }}>
                        Delta State University, Abraka
                    </Header>
                    <Button 
                        color="#fff" 
                        size="large" 
                        style={{
                            fontFamily: "InriaSerifBold",
                            fontWeight: 400,
                            fontStyle: "bold",
                            backgroundColor: '#fff'
                        }}>
                        Get Started Now
                    </Button>
                </Grid.Column>
            </Grid>
    </Segment>

                </Grid.Column>
            </Grid>
        )
}
  
export default HomeMobile