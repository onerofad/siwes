import HeaderNav from "./Home"
import { useNavigate } from "react-router"
import AboutMobile from './AboutMobile'
import ObjectivesMobile from './ObjectivesMobile'
import FooterMobile from './FooterMobile'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'

const HomeMobile = () => {

    const navigate = useNavigate()

    return(
        <>
        <HeaderNav />
        <div className="py-0" style={{
                backgroundColor: '#2980b9', 
                height: 350,
                padding: '40px 10px'
            }}>
        <Container>
            <Row>
                <Col md="8" className="py-4" style={{}}>
                    <h2 style={{
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: 26,
                        display: 'block'
                    }} 
                        className="text-white py-2">
                        STUDENTS INDUSTRIAL WORK EXPERIENCE SCHEME (SIWES) PORTAL

                    </h2>
                    <h4 className="" style={{
                         fontFamily: "Inria Serif",
                         fontWeight: 400,
                         fontStyle: "normal",
                         color: 'ButtonFace',
                         fontSize: 18
                    }}> 
                        Delta State University, Abraka
                    </h4>
                    <Button 
                        color="#0096ff" 
                        className="mt-4" 
                        size="lg" 
                        variant="light"
                        style={{
                            fontFamily: "Inria Serif",
                            fontWeight: 400,
                            fontStyle: "normal"
                        }}
                        onClick={() => navigate('/login')}
                    >
                        Get Started Now
                    </Button>
                    </Col>
                    <Col md="4">
                        {/*<Image
                            fluid
                            src={img}
                            style={{
                                height: 400,
                                display: "none"

                            }}
                        />*/}
                    </Col>
            </Row>
        </Container>
        </div>
        <AboutMobile />
        <ObjectivesMobile />
        <FooterMobile />

        </>
    )
}
export default HomeMobile