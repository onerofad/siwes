import { Grid, Header, Label, Table, Card, Image, Button, Segment } from "semantic-ui-react"
import { useGetPaymentQuery } from "../features/api/apiSlice"
import { useRef } from "react"
import generatePDF, { Margin, Resolution} from "react-to-pdf"
import logo from '../images/icon.png'

const DashboardPayment = ({mobile}) => {

    const {data:payments, isSuccess} = useGetPaymentQuery()

    let payment
    if(isSuccess){
        payment = payments.filter(p => p.matricno === localStorage.getItem('matricno'))[0]
    }

   const targetRef = useRef();

   const options = {
        page: {
            margin: Margin.LARGE,
            resolution: Resolution.HIGH
        },
        
        
   }

    return(
        <div style={{padding: '0px 15px'}}>
        <Label style={{marginTop: mobile ? 20 : 70, marginLeft: 30, marginBottom: 40}} size="large" ribbon color="blue">MY PAYMENT HISTORY</Label>                         
                        {
                            payment ? <>
                                <Grid textAlign="center">
                                    <Grid.Column width={16}>
                                     <div ref={targetRef} >
                                            <Table unstackable size="huge" style={{}}>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell colSpan={2}>
                                                         <Image
                                                            src={logo}
                                                            centered
                                                        />
                                                        <Header textAlign="center">
                                                            DELTA STATE UNIVERSITY, ABRAKA
                                                            <Header.Subheader>SIWES PAYMENT RECEIPT</Header.Subheader>
                                                        </Header>
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell colSpan={2}> 
                                                        <Image
                                                            size='tiny'
                                                            src={localStorage.getItem('img')}
                                                        />
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Matric No:</strong></Table.Cell>
                                                    <Table.Cell width={8}>{payment.matricno}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Full Name:</strong></Table.Cell>
                                                    <Table.Cell width={8}>{payment.surname + ' ' + payment.othernames}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Reference No:</strong></Table.Cell>
                                                    <Table.Cell width={8}>{payment.reference_id}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Payment Date:</strong></Table.Cell>
                                                    <Table.Cell width={8}>{payment.payment_date}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Amount:</strong></Table.Cell>
                                                    <Table.Cell width={8}>&#8358;{Intl.NumberFormat().format(payment.amount2, 2)}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width={8}><strong>Location:</strong></Table.Cell>
                                                    <Table.Cell width={8}>{payment.location}</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </div> 
                                     <Button
                                        style={{marginTop: 40, textAlign: 'center'}} 
                                        positive
                                        onClick={() => generatePDF(targetRef, options, {filename: `${payment.firstname + '_' + payment.lastname}}.pdf`})}
                                    >
                                        Download
                                    </Button>
                                    </Grid.Column>
                                </Grid>    
                           
                            </>
                            :
                            <Segment>
                                There is no payment information available
                            </Segment>
                        }
        </div>
    )
}
export default DashboardPayment