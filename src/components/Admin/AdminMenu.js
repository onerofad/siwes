 import { Menu } from "semantic-ui-react"
 const AdminMenu = () => {
    return(
        <Menu
            inverted
            color="blue"
            fixed="top"
            style={{height: 70}}
        >
            <Menu.Item as="h2" header>
                Admin Dashboard
            </Menu.Item>
        </Menu>
    )
 } 
 export default AdminMenu
  