import { Container, Header, Image, Menu, Search } from "semantic-ui-react"
import logo from '../images/icon.png'
import {useNavigate} from 'react-router-dom'
import { useState } from "react"

const DashboardMenu = () => {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("firstname")
        navigate("/")
    }

    const [img, setImg] = useState(localStorage.getItem('img'))

    return(
           <Menu
                inverted
                color="blue"
                fixed="top"
                style={{height: 70}}
            >
                    <Menu.Item as="h2" header>
                        DELSU SIWES PORTAL
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
            </Menu>
    )
}
export default DashboardMenu