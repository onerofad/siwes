import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Button, NavDropdown, Image } from 'react-bootstrap'
import img from '../../images/icon.png'

const HeaderNav = () => {
    return(
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="/">
            <Image width={80} src={img} style={{display: 'inline'}} />
            <h4 style={{display: 'inline', color: '#2980b9', fontFamily: 'Mulish', fontSize: 25, fontWeight: 800, fontStyle: 'normal'}}>
                Delsu Online
            </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{fontSize: 18, fontFamily: 'Inria Serif', fontWeight: 700, fontStyle: "normal"}}>Our Courses</Nav.Link>
            <Nav.Link href="/register" style={{fontSize: 18, fontFamily: 'Inria Serif', fontWeight: 700, fontStyle: "normal"}}>Register</Nav.Link>
            <NavDropdown style={{fontSize: 18, fontFamily: 'Inria Serif', fontWeight: 700, fontStyle: "normal"}} title="Latest Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Enterpreneurship</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Vocations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                General Studies
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{fontSize: 18, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif"}}
            />
            <Button style={{fontSize: 18, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif", color: '#fff', backgroundColor: '#2980b9'}} variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default HeaderNav
