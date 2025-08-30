import { Container, Grid, Icon, Button, Header } from "semantic-ui-react"

const WallPaper = ({mobile}) => (
    <div style={{backgroundColor: '#2980b9', margin: 0, padding: mobile ? '40px 20px' : '70px 100px'}}>
        <Container>
            <Grid>
                <Grid.Column width={mobile ? 16 : 8} >
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
                         fontSize: mobile ? 18: 20
                    }}>
                        Delta State University, Abraka
                    </Header>
                    <Button 
                        color="#fff" 
                        size="large" 
                        style={{
                            fontFamily: "InriaSerifBold",
                            fontWeight: 400,
                            fontStyle: "bold",
                            backgroundColor: '#fff'
                        }}>
                        Get Started Now
                    </Button>
                </Grid.Column>

                <Grid.Column textAlign="right" width={mobile ? 0 :8}>
                    <Icon color="blue"  inverted circular size="massive" name="student" />
                </Grid.Column>
            </Grid>
        </Container>

    </div>
)
export default WallPaper