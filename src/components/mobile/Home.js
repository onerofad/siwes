import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Button, NavDropdown, Image } from 'react-bootstrap'
import img from '../../images/icon.png'
import { useNavigate } from 'react-router'

const HeaderNav = () => {

    const navigate = useNavigate()
    return(
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="/">
            <Image width={80} src={img} style={{display: 'inline'}} />
            <h4 style={{display: 'inline', color: '#2980b9', fontFamily: 'Mulish', fontSize: 25, fontWeight: 800, fontStyle: 'normal'}}>
                DELSU SIWES
            </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link 
                    style={{
                        fontSize: 18, 
                        fontFamily: 'Inria Serif', 
                        fontWeight: 700, 
                        fontStyle: "normal"
                    }}
                    onClick={() => navigate('/login')}
            >
                Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default HeaderNav
