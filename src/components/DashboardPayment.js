import { Grid, Header, Label, Table, Card, Image, Button, Segment } from "semantic-ui-react"
import { useGetPaymentQuery } from "../features/api/apiSlice"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
import logo from '../images/icon.png'

const DashboardPayment = () => {

    const {data:payments, isSuccess} = useGetPaymentQuery()

    let payment
    if(isSuccess){
        payment = payments.filter(p => p.matricno === localStorage.getItem('matricno'))[0]
    }

   const targetRef = useRef();

    return(
        <div style={{marginTop: '20px', padding: '0px 40px', height: '100vh', width: '75%',}}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Label size="large" ribbon color="blue">MY PAYMENT HISTORY</Label>                         
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {
                            payment ? <div ref={targetRef}>
                                 <Card fluid>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src={localStorage.getItem('img')}
                                        />
                                    <Card.Header>
                                        <Image
                                            src={logo}
                                            style={{width: '70px', height: '70px'}}
                                        />
                                    </Card.Header>
                                    <Card.Meta>Payment History</Card.Meta>
                                    <Card.Description>
                                        <Table basic>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><strong>Full Name:</strong></Table.Cell>
                                                    <Table.Cell>{payment.firstname + ' ' + payment.lastname}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><strong>Reference No:</strong></Table.Cell>
                                                    <Table.Cell>{payment.reference_id}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><strong>Payment Date:</strong></Table.Cell>
                                                    <Table.Cell>{payment.payment_date}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><strong>Amount:</strong></Table.Cell>
                                                    <Table.Cell>{payment.amount2}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><strong>Location:</strong></Table.Cell>
                                                    <Table.Cell>{payment.location}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><strong>Matric No:</strong></Table.Cell>
                                                    <Table.Cell>{payment.matricno}</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                        <Button 
                                            positive
                                            onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}
                                        >
                                            Download
                                        </Button>
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </div> 
                            :
                            <Segment>
                                There is no payment information available
                            </Segment>
                        }
                    </Grid.Column>
                </Grid.Row>
            
            </Grid>
        </div>
    )
}
export default DashboardPayment