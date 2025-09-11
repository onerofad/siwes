import { Grid, Header, Segment } from "semantic-ui-react";
import '../../css/style.css'

const AboutMobile = () => (
    <div style={{padding: '40px 0px'}}>
    <Header textAlign="center" as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}}>
        ABOUT SIWES
    </Header>
    <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 0px', padding: '20px 10px'}}>
        <Grid>
            <Grid.Column>
                <p style={{fontSize: 14, fontStyle: "normal", fontWeight: 400, fontFamily: "InriaSerif", color: "#000"}}>
                    Welcome to Delta State University, Abraka, popularly known as DELSU. Established as a state government university, DELSU has become a leading educational institution in Nigeria. The university has three campuses located in Abraka, Anwai (Asaba), and Oleh, all within a distance of approximately 200 km apart.
                </p>
                <p style={{fontSize: 14, fontStyle: "normal", fontWeight: 400, fontFamily: "InriaSerif", color: "#000"}}>
                    DELSU offers a wide range of educational programs to meet the diverse needs of students. From full-time certificate, diploma, and degree programs to part-time evening and weekend degree programs, there is an option for every student. The university also offers postgraduate studies up to the doctoral level.
                </p>
                <p style={{fontSize: 14, fontStyle: "normal", fontWeight: 400, fontFamily: "InriaSerif", color: "#000"}}>
                    Featuring state-of-the-art facilities, DELSU provides a conducive learning environment. Students have access to a staff/student counseling center, e-learning center, student accommodation, and various sporting facilities. With a student population of around 22,000, DELSU continues to uphold its reputation as a center of education.
                </p>
                <p style={{fontSize: 14, fontStyle: "normal", fontWeight: 400, fontFamily: "InriaSerif", color: "#000"}}>
                    The university is overseen and accredited by the National Universities Commission, ensuring high-quality education. Explore all that Delta State University, Abraka has to offer and embark on a journey of academic excellence
                </p>
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default AboutMobile