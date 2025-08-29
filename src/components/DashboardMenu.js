import { Container, Header, Image, Menu, Search } from "semantic-ui-react"
import logo from '../images/icon.png'
import {useNavigate} from 'react-router-dom'
import { useState } from "react"


const options = [
  { key: 'lock', icon: 'delete', text: 'Remove Post', value: 'delete' },
]


const DashboardMenu = () => {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("firstname")
        navigate("/")
    }

    const [img, setImg] = useState(localStorage.getItem('img'))

    return(
        <div style={{margin: 0,}}>
           <Menu
                pointing
                secondary
                style={{height: 70}}
                
            >
                <Container fluid>
                    <Menu.Item>
                        <Image
                          src={logo} style={{width: 50, height: 50}}
                        />
                        <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Inter', fontSize: 16, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
                            DELSU SIWES PORTAL
                        </span>
                    </Menu.Item>
                    
                    <Menu.Item position="right">
                        <Header floated="left" style={{verticalAlign: 'middle'}}  as='h5'>{localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname')}</Header>
                        <Image
                            src={localStorage.getItem('img')}
                            avatar
                            size="mini"
                            verticalAlign="middle"
                        />
                    </Menu.Item>
                </Container>
            </Menu>
            </div>
    )
}
export default DashboardMenu