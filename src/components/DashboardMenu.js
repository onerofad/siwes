import { Container, Header, Image, Menu, Search } from "semantic-ui-react"
import logo from '../images/icon.png'
import {useNavigate} from 'react-router-dom'
import { useState } from "react"

const DashboardMenu = ({mobile}) => {

    const navigate = useNavigate()

    const [img, setImg] = useState(localStorage.getItem('img'))

    return(
           <Menu
                inverted
                color="blue"
                fixed= {mobile ? '' : "top"}
                style={{height: 70}}
            >
                    <Menu.Item as="h2" header>
                        DELSU SIWES PORTAL
                    </Menu.Item>    
                    <Menu.Item position="right">
                        {
                            mobile ? '':
                        <><Header floated="left" inverted style={{verticalAlign: 'middle'}}  as='h5'>{localStorage.getItem('surname') + ' ' + localStorage.getItem('othernames')}</Header>
                        <Image
                            src={localStorage.getItem('img')}
                            avatar
                            size="mini"
                            verticalAlign="middle"
                        />
                        </>
                        }
                    </Menu.Item>
            </Menu>
    )
}
export default DashboardMenu