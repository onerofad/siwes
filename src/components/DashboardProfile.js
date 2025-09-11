import { Button, Dimmer, Divider, Form, Grid, Header, Icon, Label, List, Loader, Modal, Segment, Table } from "semantic-ui-react"
import '../css/style.css'
import { useGetStudentsQuery } from "../features/api/apiSlice"


const DashboardProfile = () => {

   const {data:profile, isSuccess}  = useGetStudentsQuery()

   let studentDetails
   if(isSuccess){
    studentDetails = profile.map(s => {
                            if(s.matricno === localStorage.getItem("matricno")){
                                return(
                                <Table basic='very' size="huge" unstackable>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Surname:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.surname}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Othernames:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.othernames}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Matric No:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.matricno}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Session:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.session}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Programme:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.programme}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Faculty:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.faculty}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Department:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.department}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Discipline:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.discipline}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Level:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.level}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Gender:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.gender}
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Birth Date:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.birthdate}
                                            </Table.Cell>
                                             <Table.Cell>
                                                <Label>Email Address:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.email}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <Label>Phone Number:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.phoneno}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>Password:</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                ***
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            )}     
                        })
                    }

    return(
        <>
          <Label style={{marginTop: 70, marginBottom: 20}} size="large" ribbon color="blue">VIEW STUDENT PROFILE</Label>                         
          {studentDetails ? 
            studentDetails :   
                                <Segment style={{marginTop: 50}} vertical>
                                    <Dimmer active inverted>
                                        <Loader size="huge" inverted content='Loading' />
                                    </Dimmer>
                                </Segment>
          }
        </>
      
                    
    )
}
export default DashboardProfile