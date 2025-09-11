import { Grid, Header, Segment, Image, Icon, List } from "semantic-ui-react"
import obj from '../images/objectives.png'

const Objectives = () => (
      <div style={{padding: '40px'}}>
    <Header textAlign="center" as="h4" style={{fontSize: 25, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}}>
        OBJECTIVES OF SIWES
    </Header>
    <Segment secondary vertical style={{borderRadius: 10, margin: '20px 50px', padding: '50px 50px'}}>
        <Grid>
            <Grid.Column width={8}>
                <Image
                    bordered
                    fluid
                    size="massive"
                    src={obj}
                    style={{width: '100%', height: '100%'}}
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <List relaxed>
                    <List.Item>
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Specifically, the objectives of the Students Industrial Work Experience Scheme (SIWES) are to:
                            </p> 
                        </List.Content>
                       
                    </List.Item>
                    <List.Item>
                        <List.Icon name="checkmark" />
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Provide avenue for Students in Institutions of higher Learning to acquire industrial skills and experience in their course of study.
                            </p>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="checkmark" />
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Prepare Students for the industrial work situation they are to meet after graduation.
                                Expose Students to work methods and techniques in handling equipment and machinery that may not be available in their Institutions.
                            </p>
                        </List.Content>
                        
                    </List.Item>
                    <List.Item>
                        <List.Icon name="checkmark" />
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Make the transition from school to the world of work easier, and enhance Students contacts for later job placement.
                            </p>
                        </List.Content>
                       
                    </List.Item>
                    <List.Item>
                        <List.Icon name="checkmark" />
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Provide Students with an opportunity to apply their knowledge in real work situation thereby bridging the gap between theory and practice.
                            </p>
                        </List.Content>
                      
                    </List.Item>
                    <List.Item>
                        <List.Icon name='checkmark' />
                        <List.Content>
                            <p style={{fontSize: 16, fontStyle: "normal", fontWeight: 400, fontFamily: "Inter", color: "#000"}}>
                                Enlist and strengthen Employers involvement in the entire educational process and prepare Students for employment after graduation.
                            </p>
                        </List.Content>
                      
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>

    </Segment>
    </div>
)
export default Objectives