import { Dimmer, Grid, Header, Loader, Segment, Table, Button, Icon } from "semantic-ui-react"
import { useGetSiwesQuery } from "../../features/api/apiSlice"

const AdminSiwesReport = ({mobile}) => {
         const {data:siwes, isSuccess, refetch} = useGetSiwesQuery()


    if(isSuccess){
        
    return(
        <Grid padded stackable style={{height: '100vh'}}>
        <Grid.Column>
        <Header style={{marginTop: 70}}>SIWES Report</Header>
        <Segment raised padded>
            <div style={{overflowX: mobile ? 'scroll' : ''}}>
            <Table unstackable compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Surname</Table.HeaderCell>
                    <Table.HeaderCell>Othernames</Table.HeaderCell>

                    <Table.HeaderCell>Matric No</Table.HeaderCell>
                    {/*<Table.HeaderCell>Start Date</Table.HeaderCell>
                    <Table.HeaderCell>End Date</Table.HeaderCell>
                    <Table.HeaderCell>Submission Date</Table.HeaderCell>*/}
                    {/*<Table.HeaderCell>Email</Table.HeaderCell>*/}
                    <Table.HeaderCell>Dapartment</Table.HeaderCell>
                    <Table.HeaderCell>Faculty</Table.HeaderCell>
                    <Table.HeaderCell>SIWES Address</Table.HeaderCell>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Town</Table.HeaderCell>
                    <Table.HeaderCell>Street</Table.HeaderCell>

                </Table.Row>
            </Table.Header>
        {
            siwes.map(s => (
            <Table.Body>
                <Table.Row>
                                        
                    <Table.Cell>{localStorage.getItem("surname")}</Table.Cell>
                    <Table.Cell>{localStorage.getItem("othernames")}</Table.Cell>

                    <Table.Cell>{s.matricno}</Table.Cell>
                    {/*<Table.Cell>{s.startDate}</Table.Cell>
                    <Table.Cell>{s.endDate}</Table.Cell>
                    <Table.Cell>{s.deadline}</Table.Cell>*/}
                    <Table.Cell>{s.department}</Table.Cell>
                    <Table.Cell>{s.faculty}</Table.Cell>
                    <Table.Cell>{s.siwes_address}</Table.Cell>
                    <Table.Cell>{s.state_address}</Table.Cell>
                    <Table.Cell>{s.city}</Table.Cell>
                    <Table.Cell>{s.town}</Table.Cell>
                    <Table.Cell>{s.street}</Table.Cell>


                                                          
                </Table.Row>
            </Table.Body>
            ))
        }
        </Table>
        </div>
         <Button positive icon onClick={() => refetch()}>
                    <Icon name="refresh" />
                    Refresh
                </Button>
        </Segment>
        </Grid.Column>
    </Grid>
    )
}
    
    
}
export default AdminSiwesReport