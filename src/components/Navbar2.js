import { Container, Image, Menu, Icon } from "semantic-ui-react"
import logo from '../images/icon.png'
import { useNavigate } from "react-router"

const Navbar2 = () => {
  const navigate = useNavigate()

  return(
  <div style={{margin: 0, padding: 0}}>
    <Container fluid>
      <Menu 
        secondary 
        pointing
        style={{height: 70}}
     >
            <Menu.Item as='a' onClick={() => navigate('/')}>
              <Image
                src={logo} style={{width: 50, height: 50}}
              />
              <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Inter', fontSize: 16, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
                  DELSU SIWES PORTAL
              </span>
            </Menu.Item>
        </Menu>
      </Container>
  </div>
)
}
   
export default Navbar2