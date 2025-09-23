
import { Grid, Header, Menu, Image, Icon, Sidebar, Segment, Button } from "semantic-ui-react"
import DashboardMenu from "./DashboardMenu"
import logo from '../images/icon.png'
import { useEffect, useState } from "react"
import DashboardHome from "./DashboardHome"
import DashboardProfile from "./DashboardProfile"
import { useNavigate } from "react-router"
import DashboardSiwes from "./DashboardSiwes"
import DashboardLocation from "./DashboardLocation"
import DashboardPayment from "./DashboardPayment"
import { Container, Nav, Navbar } from "react-bootstrap"
import img from '../images/icon.png'

const Dashboard = ({mobile}) => {

    const [activeItem, setactiveITem] = useState("dashboard")
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    }, [])

    const logout = () => {
         localStorage.removeItem("firstname")
         localStorage.removeItem("middlename")
         localStorage.removeItem("lastname")
         localStorage.removeItem("matricno")
         localStorage.removeItem('email')
         localStorage.removeItem('phoneno')
         localStorage.removeItem("faculty")
         localStorage.removeItem("session")
         localStorage.removeItem("department")
         localStorage.removeItem('img')

        localStorage.removeItem('amt')
        localStorage.removeItem('amt2')
        localStorage.removeItem('location')
        localStorage.removeItem('token')

        navigate('/login')
    }

    
    if(mobile){
        return(
            <>
            <Menu
                inverted
                color="blue"
            >
                <Menu.Item>
                    <Header as="h2" inverted>
                        DELSU SIWES
                    </Header>
                </Menu.Item>
                <Menu.Item position="right">
                    <Icon onClick={() => setVisible(!visible)} link size="large" name="sidebar" />
                </Menu.Item>
            </Menu>
                <Sidebar animation="overlay" width="thin" visible={visible} as={Menu}>
                    <Menu 
                        vertical
                        inverted
                        size="large"
                        pointing
                    >
                        <Menu.Item>
                            <Image size="small" circular centered src={logo} />
                            <Header as="h5" inverted textAlign="center">
                                Student Menu
                            </Header>
                            
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            active={activeItem === "dashboard"}
                            onClick={() => {
                                    setactiveITem("dashboard")
                                    setVisible(!visible)
                                } 
                            }

                        >
                            Get Started
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            active={activeItem === "profile"}
                            onClick={() => {
                                setactiveITem("profile")
                                setVisible(!visible)

                            }
                            }
                            
                        >
                            My Profile
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            active={activeItem === "siwes"}
                            onClick={() => { 
                                setactiveITem("siwes")
                                setVisible(!visible)
                            }
                            } 
                                
                        >
                            Siwes
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            active={activeItem === "location"}
                            onClick={() => { 
                                setactiveITem("location")
                                setVisible(!visible)

                            }} 
                                
                        >
                            Location
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            active={activeItem === "payment"}
                            onClick={() => { 
                                setactiveITem("payment")
                                setVisible(!visible)

                            }} 
                        
                        >
                            Payments
                        </Menu.Item>
                        <Menu.Item 
                            as="a"
                            onClick={() => logout()}

                        >
                            Log out
                        </Menu.Item>
                    </Menu>

                </Sidebar>
                    
            {
                        activeItem === "dashboard" && <DashboardHome mobile />
                    }
                    {
                        activeItem === "profile" && <DashboardProfile mobile />
                    }
                    {
                        activeItem === "siwes" && <DashboardSiwes mobile />
                    }
                    {
                        activeItem === "location" && <DashboardLocation mobile />
                    }
                    {
                        activeItem === "payment" && <DashboardPayment mobile />
                    }
           
          {/*} <Navbar expand="lg"  style={{backgroundColor: '#2980b9'}} className="bg-body-light">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img style={{width: 50, height: 50}} src={logo} />
                    <h4 style={{display: 'inline', color: '#fff', fontFamily: 'Mulish', fontSize: 18, fontWeight: 800, fontStyle: 'normal', marginLeft: 20}}>
                        DELSU SIWES PORTAL
                    </h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'
                        }}
                        onClick={() => setactiveITem("dashboard")}
                    >
                        Get Started
                    </Nav.Link>
                    <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'

                        }}
                        onClick={() => setactiveITem("profile")}
                    >
                        My Profile
                    </Nav.Link>
                    <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'

                        }}
                        onClick={() => setactiveITem("siwes")}
                    >
                        Siwes
                    </Nav.Link>
                    <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'

                        }}
                        onClick={() => setactiveITem("location")}
                    >
                        My Location
                    </Nav.Link>
                    <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'

                        }}
                        onClick={() => setactiveITem("payment")}
                    >
                        Payment History
                    </Nav.Link>
                     <Nav.Link 
                        style={{
                            fontSize: 15, 
                            fontFamily: 'Inria Serif', 
                            fontWeight: 700, 
                            fontStyle: "normal",
                            color: '#fff'

                        }}
                        onClick={() => navigate("/login")}
                    >
                        Log out
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/}
       
        </>
        )
    }else{
        return(
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <DashboardMenu />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Menu fixed="left" style={{marginTop: 70}} vertical inverted pointing >
                                <Menu.Item as='a'>
                                    <Image circular centered src={logo} />
                                    <Header inverted textAlign="center">Student Menu</Header>
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    active={activeItem === "dashboard"}
                                    onClick={() => setactiveITem("dashboard")}
                                >
                                    <Header inverted as="h5">
                                        <Icon name='clock outline' />
                                        <Header.Content>Get Started</Header.Content>
                                    </Header>
                                </Menu.Item>
                                <Menu.Item
                                    as='a'
                                    active={activeItem === "profile"}
                                    onClick={() => setactiveITem("profile")}
                        
                                >
                                    <Header inverted as="h5">
                                        <Icon name='user outline' />
                                        <Header.Content>My Profile</Header.Content>
                                    </Header>
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    active={activeItem === "siwes"}
                                    onClick={() => { setactiveITem("siwes")}} 
                                >
                                    <Header inverted as="h5">
                                        <Icon name='university' />
                                        <Header.Content>Siwes</Header.Content>
                                    </Header>
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    active={activeItem === "location"}
                                    onClick={() => { setactiveITem("location")}} 
                                >
                                    <Header inverted as="h5">
                                        <Icon name='map outline' />
                                        <Header.Content>Location Payment</Header.Content>
                                    </Header>
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    active={activeItem === "payment"}
                                    onClick={() => { setactiveITem("payment")}} 
                                >
                                    <Header inverted as="h5">
                                        <Icon name='money bill alternate outline' />
                                        <Header.Content>Payments</Header.Content>
                                    </Header>
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    onClick={() => logout()}
                                >
                                <Header inverted as="h5">
                                    <Icon name='sign-out' />
                                    <Header.Content>Log out</Header.Content>
                                </Header>
                                </Menu.Item>
                            </Menu>

                        </Grid.Column>
                        <Grid.Column width={12}>
                            {
                                activeItem === "dashboard" && <DashboardHome />
                            }
                            {
                                activeItem === "profile" && <DashboardProfile />
                            }
                            {
                                activeItem === "siwes" && <DashboardSiwes />
                            }
                            {
                                activeItem === "location" && <DashboardLocation />
                            }
                            {
                                activeItem === "payment" && <DashboardPayment />
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
    
    
}
export default Dashboard