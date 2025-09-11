import { Grid, Header, Segment } from "semantic-ui-react";
import '../css/style.css'

const About = () => (
    <div style={{padding: '50px'}}>
    <Header textAlign="center" as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}}>
        ABOUT SIWES
    </Header>
    <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 50px', padding: '50px 50px'}}>
        <Grid>
            <Grid.Column>
                <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                    The Students Industrial Work Experience Scheme (SIWES) is a Skills Training Programme designed to prepare and expose Students of Universities, Polytechnics, Colleges of Technology, Colleges of Agriculture and Colleges of Education for the Industrial Work situation they are likely to meet after graduation. The Scheme affords Students the opportunity of familiarizing and exposing themselves to handling equipment and machinery that are usually not available in their Institutions.
                </p>
                <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                    Before the establishment of the Scheme, there was a growing concern that graduates of our Institutions of higher learning lacked adequate practical knowledge and that the theoretical education in Higher Institutions was not responsive to the needs of the Employers’ of Labour.
                </p>
                <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                    It is against this background that the Industrial Training Fund (ITF) initiated, designed and introduced SIWES Scheme in 1973 to acquaint Students with the skills of handling Industrial equipment and machinery.                </p>
                <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                    The Industrial Training Fund (ITF) solely funded the Scheme during its formative years. However, due to financial constraints, the Fund withdrew from the Scheme in 1978. The Federal Government noting the significance of the skills training, handed the management of the Scheme to the National Universities Commission (NUC) and the National Board for Technical Education (NBTE) in 1979. In November, 1984 management and implementation of the Scheme was again reverted to the ITF with the funding to be solely borne by the Federal Government.                </p>
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default About