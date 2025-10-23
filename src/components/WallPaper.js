import { useNavigate } from "react-router"
import { Container, Grid, Icon, Button, Header, GridColumn } from "semantic-ui-react"

const WallPaper = () => {

    const navigate = useNavigate()

    return(
        <div style={{backgroundColor: '#2980b9', margin: 0, padding: '70px 100px'}}>
            <Container>
                <Grid columns={2}>
                    <GridColumn>
                        <Header inverted as="h2" style={{
                            fontFamily: "Montserrat",
                            fontWeight: 700,
                            fontStyle: "normal",
                            fontSize: 24,
                            display: 'block'
                        }} 
                        >
                            STUDENTS INDUSTRIAL WORK EXPERIENCE SCHEME (SIWES) PORTAL
                        </Header>
                        <Header as="h4" style={{
                            fontFamily: "Inria Serif",
                            fontWeight: 400,
                            fontStyle: "normal",
                            color: 'ButtonFace',
                            display: 'block',
                            fontSize: 20
                        }}>
                            Delta State University, Abraka
                        </Header>
                        <Button 
                            color="#fff" 
                            size="large" 
                            onClick={() => navigate('/login')}
                            style={{
                                fontFamily: "InriaSerifBold",
                                fontWeight: 400,
                                fontStyle: "bold",
                                backgroundColor: '#fff'
                            }}>
                            Get Started Now
                        </Button>
                    </GridColumn>
                        <GridColumn textAlign="right">
                            <Icon color="blue"  inverted circular size="massive" name="student" />
                        </GridColumn>
                </Grid>
            </Container>
        </div>
    )
}
export default WallPaper