import { Container, Divider, Grid, Header, List } from "semantic-ui-react";

const FooterMobile = () => (
    <div style={{padding: '40px 20px', backgroundColor: '#2980b9'}}>
        <Container>
            <Grid stackable>
                <Grid.Column width={4}>
                    <Header style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inter"}} inverted>Visit Delsu</Header>
                    <List style={{fontSize: 15, fontWeight: 400, fontStyle: "normal", fontFamily: "Prompt"}} inverted link relaxed>
                        <List.Item as="a">Home Page</List.Item>
                        <List.Item as="a">About Delsu</List.Item>
                    </List>
                </Grid.Column> 
                 <Grid.Column width={4}>
                    <Header style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inter"}} inverted>Calendar</Header>
                    <List style={{fontSize: 15, fontWeight: 400, fontStyle: "normal", fontFamily: "Prompt"}} inverted link relaxed>
                        <List.Item as="a">Academic Calendar</List.Item>
                        <List.Item as="a">Event Calendar</List.Item>
                        <List.Item as="a">Admission Calendar</List.Item>
                    </List>
                </Grid.Column> 
                 <Grid.Column width={4}>
                    <Header style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inter"}} inverted>Alumni</Header>
                    <List style={{fontSize: 15, fontWeight: 400, fontStyle: "normal", fontFamily: "Prompt"}} inverted link relaxed>
                        <List.Item as="a">About Alumni</List.Item>
                         <List.Item as="a">Alumni Awards</List.Item>
                         <List.Item as="a">Alumni Events</List.Item>
                         <List.Item as="a">Alumni Projects</List.Item>
                    </List>
                </Grid.Column> 
                 <Grid.Column width={4}>
                    <Header style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inter"}} inverted>Students</Header>
                    <List style={{fontSize: 15, fontWeight: 400, fontStyle: "normal", fontFamily: "Prompt"}} inverted link relaxed>
                        <List.Item as="a">Student Affairs</List.Item>
                        <List.Item as="a">Student Union Government</List.Item>
                        <List.Item as="a">Programmes</List.Item>
                    </List>
                </Grid.Column> 
            </Grid>
            <Divider inverted />
            <span style={{color: '#fff', fontFamily: 'InriaSerif', fontSize: 16, fontWeight: 400, fontStyle: 'normal'}}>&copy; 2025 All rights reserved</span>
        </Container>

    </div>
)
export default FooterMobile