import { Button, Dimmer,Grid, Header, Icon, Loader, Segment, Tab, Table } from "semantic-ui-react"
import { useGetPaymentQuery } from "../../features/api/apiSlice"



const AdminPaymentReports = () => {

    const {data:payments, isSuccess, refetch} = useGetPaymentQuery()

    if(isSuccess){
return(
        <Grid padded stackable style={{height: '100vh'}}>
        <Grid.Column>
        <Header style={{marginTop: 70}}>Payment Report</Header>
        <Segment raised padded>
            <div style={{overflowX: mobile ? 'scroll' : ''}}>
            <Table unstackable compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Reference ID</Table.HeaderCell>
                    <Table.HeaderCell>Surname</Table.HeaderCell>
                    <Table.HeaderCell>Othernames</Table.HeaderCell>
                    <Table.HeaderCell>Phone No</Table.HeaderCell>
                    {/*<Table.HeaderCell>Email</Table.HeaderCell>*/}
                    <Table.HeaderCell>Matric No</Table.HeaderCell>
                    <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        {
       
            payments.map(payment => (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{payment.reference_id}</Table.Cell>
                    <Table.Cell>{payment.surname}</Table.Cell>
                    <Table.Cell>{payment.othernames}</Table.Cell>
                    <Table.Cell>{payment.phoneno}</Table.Cell>
                    {/*<Table.Cell>{payment.email}</Table.Cell>*/}

                    <Table.Cell>{payment.matricno}</Table.Cell>
                    <Table.Cell>&#8358;{Intl.NumberFormat().format(payment.amount2, 2)}</Table.Cell>
                    <Table.Cell>{payment.payment_date}</Table.Cell>
                    <Table.Cell>Paid</Table.Cell>

                                                          
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

export default AdminPaymentReports