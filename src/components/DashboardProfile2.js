import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"
import { Button, Dimmer, Divider, Form, Grid, Header, Icon, Label, List, Loader, Modal, Segment, Table } from "semantic-ui-react"
import '../css/style.css'
import { useGetStudentsQuery } from "../features/api/apiSlice"


const DashboardProfile2 = () => {

   const {data:profile, isSuccess}  = useGetStudentsQuery()

   let studentDetails
   if(isSuccess){
    studentDetails = profile.map(s => {
                            if(s.matricno === localStorage.getItem("matricno")){
                                return(
                                <Table striped>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Last Name:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.lastname}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>First Name:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.firstname}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Middle Name:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.middlename}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>Birth Date:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.birthdate}
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Matric No:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.matricno}
                                            </Table.Cell>
                                            <Table.Cell>
                                                Session:
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.session}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Programme:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.programme}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>Faculty:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.faculty}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Department:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.department}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>Discipline:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.discipline}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Level:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.level}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>Gender:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.gender}
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                                <b>Email Address:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.email}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <b>Phone Number:</b>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {s.phoneno}
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            )}     
                        })
                    }

    return(
        <div style={{marginTop: '20px', padding: '0px 40px', height: '100vh',}}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Label size="large" ribbon color="blue">VIEW STUDENT PROFILE</Label>                         
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {studentDetails}
                    </Grid.Column>
                    </Grid.Row>                             
            </Grid>
        </div>
    )
}
export default DashboardProfile2