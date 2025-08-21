import { Container, Dropdown, Header, Button, Icon, Image, Menu, Search } from "semantic-ui-react"
import logo from '../images/icon.png'
import {useNavigate} from 'react-router-dom'


const options = [
  { key: 'lock', icon: 'delete', text: 'Remove Post', value: 'delete' },
]


const DashboardMenu = () => {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("firstname")
        navigate("/")
    }

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
                        <Button.Group color=''>
                            <Button icon>
                                 <Icon name="user outline" />
                                {localStorage.getItem("firstname")}
                            </Button>
                            <Dropdown
                                className='button icon'
                                trigger={<></>}
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item icon onClick={() => logout()}>
                                        <Icon name="lock" />
                                        Log out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Button.Group>
                    </Menu.Item>
                </Container>
            </Menu>
            </div>
    )
}
export default DashboardMenu