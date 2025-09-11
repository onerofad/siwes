import { useNavigate } from "react-router"
import { Menu, Button, Image } from "semantic-ui-react"
import logo from '../../images/icon.png'

const NavbarMobile = () => {

     const navigate = useNavigate()

    return(
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
    )
}
export default NavbarMobile