import { Container, Header, Icon, Image, Menu, Search } from "semantic-ui-react"
import logo from '../images/icon.png'

const DashboardMenu = () => {
    return(
        <div style={{margin: 0,}}>
           <Menu
                pointing
                secondary
                fixed="top"
                style={{height: 70}}
                
            >
                <Container fluid>
                    <Menu.Item>
                        <Image
                          src={logo} style={{width: 50, height: 50}}
                        />
                        <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Mulish', fontSize: 16, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
                            DELSU SIWES PORTAL
                        </span>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Search
                            size="large"
                            placeholder="Search student"
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Header as="h4">
                            <Icon circular size="large" name="user outline" />
                            <Header.Content>John Doe</Header.Content>
                        </Header>
                    </Menu.Item>
                </Container>
            </Menu>
            </div>
    )
}
export default DashboardMenu