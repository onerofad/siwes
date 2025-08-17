import { Grid, Header, Segment } from "semantic-ui-react";

const About = () => (
    <div style={{padding: '50px'}}>
    <Header textAlign="center" as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}}>
        ABOUT SIWES
    </Header>
    <Segment  basic secondary vertical style={{borderRadius: 10, margin: '20px 50px', padding: '50px 50px'}}>
        <Grid>
            <Grid.Column>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    Welcome to Delta State University, Abraka, popularly known as DELSU. Established as a state government university, DELSU has become a leading educational institution in Nigeria. The university has three campuses located in Abraka, Anwai (Asaba), and Oleh, all within a distance of approximately 200 km apart.
                </p>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    DELSU offers a wide range of educational programs to meet the diverse needs of students. From full-time certificate, diploma, and degree programs to part-time evening and weekend degree programs, there is an option for every student. The university also offers postgraduate studies up to the doctoral level.
                </p>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    Featuring state-of-the-art facilities, DELSU provides a conducive learning environment. Students have access to a staff/student counseling center, e-learning center, student accommodation, and various sporting facilities. With a student population of around 22,000, DELSU continues to uphold its reputation as a center of education.
                </p>
                <p style={{display: 'block', fontFamily: 'Prompt', fontSize: 18, fontStyle: 'normal', fontWeight: 400}}>
                    The university is overseen and accredited by the National Universities Commission, ensuring high-quality education. Explore all that Delta State University, Abraka has to offer and embark on a journey of academic excellence
                </p>
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default About