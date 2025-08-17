import { Container, Image, Menu, Button } from "semantic-ui-react"
import logo from '../images/icon.png'
import { useNavigate } from "react-router"

const Navbar2 = () => {
  const navigate = useNavigate()

  return(
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
            
         </Menu.Item>
      </Container>
      </Menu>
  </div>
)
}
   
export default Navbar2