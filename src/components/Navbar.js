import { Container, Image, Menu, Button } from "semantic-ui-react"
import logo from '../images/icon.png'
import { useNavigate } from "react-router"

const Navbar = () => {
  const navigate = useNavigate()

  return(
  <div style={{margin: 0, padding: 0}}>
    <Menu secondary fluid>
        <Container>
          <Menu.Item>
            <Image
               src={logo} style={{width: 50, height: 50}}
            />
            <span style={{display: 'inline', color: '#2980b9', fontFamily: 'Inter', fontSize: 16, fontWeight: 800, fontStyle: 'normal', verticalAlign: 'middle'}}>
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
      </Container>
      </Menu>
  </div>
)
}
   
export default Navbar