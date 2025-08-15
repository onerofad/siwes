import { Container, Image, Menu, Button, Icon } from "semantic-ui-react"
import logo from '../images/icon.png'

const Navbar = () => (
  <div style={{margin: 0, padding: 0}}>
    <Menu secondary fluid>
        <Container>
          <Menu.Item>
            <Image
               src={logo} style={{width: 70, height: 70}}
            />
            <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Mulish', fontSize: 18, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
                DELSU SIWES PORTAL
            </span>
          </Menu.Item>
  
          <Menu.Item position='right'>
            <Button color="blue"  icon="user" style={{}}>
              Login
            </Button>
         </Menu.Item>
      </Container>
      </Menu>
  </div>
   
)
export default Navbar