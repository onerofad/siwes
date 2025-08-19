import {Container, Divider, Grid, Header, Icon, List, Menu, Segment} from "semantic-ui-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardSiwes from "./DashboardSiwes"
import Dashboard from "./Dashboard"

const DashboardSidebar = () => {

    const navigate = useNavigate()

    const [activeItem, setactive] = useState("")

    useEffect(() => {

    }, [activeItem])


    return(
        <>
            <Segment  vertical style={{height: '100vh', backgroundColor: '#2980b9'}}>
                    <Menu fixed="left" secondary inverted vertical  style={{fontFamily: 'Prompt', fontWeight: 400, fontSize: 16, fontStyle: 'normal', marginTop: '120px'}} >
                        
                        <Divider />

                        <Menu.Item 
                            name="home" 
                            onClick={() => {
                                setactive("dashboard")
                                navigate("/dashboard")
                            }} 
                            active={activeItem === "dashboard"}

                            as="a" 
                            style={{marginBottom: 15}}
                        >
                            <Header as="h4" inverted>
                                <Icon name="clock outline" />
                                <Header.Content>Get Started</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item 
                            name="siwes" 
                            onClick={() => {
                                setactive("siwes")
                                navigate("/siwes")
                            }}
                            active={activeItem === "siwes"} 
                            as="a" 
                            style={{marginBottom: 15}}
                        >
                            <Header as="h4" inverted>
                                <Icon name="university" />
                                <Header.Content>Siwes</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item name="profile" onClick={() => setactive("profile")} active={activeItem === "profile"} as="a" style={{marginBottom: 15}}>
                            <Header as="h4" inverted>
                                <Icon name="user outline" />
                                <Header.Content>My Profile</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item name="location" onClick={() => setactive("location")} active={activeItem === "location"} as="a" style={{marginBottom: 15}} >
                            <Header as="h4" inverted>
                                <Icon name="map outline" />
                                <Header.Content>My Location</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item name="payment" onClick={() => setactive("payment")} active={activeItem === "payment"} as="a" style={{marginBottom: 15}}>
                            <Header as="h4" inverted>
                                <Icon name="money bill alternate outline" />
                                <Header.Content>My Payment</Header.Content>
                            </Header>
                        </Menu.Item>

                        <Divider />

                        <Menu.Item name="setting" onClick={() => setactive("setting")} active={activeItem === "setting"} as="a" style={{marginBottom: 15}}>
                            <Header as="h4" inverted>
                                <Icon name="setting" />
                                <Header.Content>Setting</Header.Content>
                            </Header>  
                        </Menu.Item>
                    </Menu>  
            </Segment>
        </>
    )
}
export default DashboardSidebar