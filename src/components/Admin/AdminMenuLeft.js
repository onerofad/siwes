import { Header, Icon, Image, Menu } from "semantic-ui-react"
import logo from '../../images/icon.png'
import { useState } from "react"
import { useNavigate } from "react-router"

const AdminMenuLeft = ({info}) => {

    const navigate = useNavigate()

    const [activeItem, setactive] = useState(info)   

    return(
         <Menu fixed="left" style={{marginTop: 70}} vertical inverted pointing >
        <Menu.Item as='a'>
            <Image circular centered src={logo} />
            <Header inverted textAlign="center">Admin Menu</Header>
        </Menu.Item>
        <Menu.Item  as='a' onClick={() => navigate('/admin/dashboard')} >
            <Header textAlign="center" as='h5' inverted>
                <Icon name="user outline" />
                    <Header.Content>Student Entry</Header.Content>
            </Header>
        </Menu.Item>
        <Menu.Item as='a' onClick={() => navigate('/admin/location')}>
            <Header textAlign="center" as='h5' inverted>
                <Icon name="map outline" />
                    <Header.Content>Location Details</Header.Content>
            </Header>
        </Menu.Item>
    </Menu>
    )
   
}
export default AdminMenuLeft
