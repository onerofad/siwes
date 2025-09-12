import { useEffect, useState } from "react"
import { Label, Table} from "semantic-ui-react"
import { useAddPaymentMutation, useGetPaymentQuery } from "../features/api/apiSlice"
import { PaystackButton } from "react-paystack"
import '../css/style.css'
import {v4 as uuid} from 'uuid'
import { getSiwesDetails } from "./API"

const DashboardLocation = ({mobile}) => {

    const [siwes, setsiwes] = useState([])

    const getAllSiwesDetails = () => {
        getSiwesDetails().get('/').then(res => setsiwes(res.data))
        .catch(error => console.log('An error has occures ' + error))
    } 

    useEffect(() => {
        getAllSiwesDetails()
    }, [])

    const publicKey = "pk_test_0091aca0928f0b1654a7aa5d57bd57300c21be38"
    const [amount, setamount] = useState(localStorage.getItem('amt')) // Remember, set in kobo!
    const [amount2, setamount2] = useState(localStorage.getItem('amt2'))
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [name, setName] = useState(localStorage.getItem('surname') + localStorage.getItem('othernames'))
    const [phone, setPhone] = useState(localStorage.getItem('phoneno'))

    //SIWES date
    const [surname, setsurname] = useState(localStorage.getItem('surname'))
    const [othernames, setothernames] = useState(localStorage.getItem('othernames'))
    const [matricno, setmatricno] = useState(localStorage.getItem('matricno'))
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState(localStorage.getItem('location'))

    const {data:payments, isSuccess, refetch} = useGetPaymentQuery()

    let payment
    if(isSuccess){
        payment = payments.filter(p => p.matricno === localStorage.getItem('matricno'))[0]
    }

    const [addpayment, {isLoading}] = useAddPaymentMutation()

    const savePayment = [amount2, location, matricno, surname, othernames].every(Boolean) && !isLoading

    const updatePayment = async () => {
        try{
            if(savePayment){
                const unique_id = uuid()
                let reference_id = unique_id

                await addpayment({reference_id, amount2, location, matricno, surname, othernames}).unwrap()
                refetch()
            }
        }catch(error){
            console.log(error => 'An error has occureed ' + error)
        }
    }
    const componentProps = {
        email,
        amount,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay",
        onSuccess: () => updatePayment(),
        onClose: () => alert("Wait! Don't leave :("),
    }

    return(
        <div style={{padding: '0px 15px'}}>
            <Label style={{marginTop: mobile ? 20 : 70, marginLeft: 30, marginBottom: 20}} size="large" ribbon color="blue">MY LOCATION AND PAYMENT</Label>                         
                    {
                        payment ? <div style={{overflowX: mobile ? 'scroll' : ''}}><Table unstackable padded>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Reference ID</Table.HeaderCell>
                                    <Table.HeaderCell>Surname</Table.HeaderCell>
                                    <Table.HeaderCell>Othernames</Table.HeaderCell>
                                    <Table.HeaderCell>Matric No</Table.HeaderCell>
                                    <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{payment.reference_id}</Table.Cell>
                                        <Table.Cell>{payment.surname}</Table.Cell>
                                        <Table.Cell>{payment.othernames}</Table.Cell>
                                        <Table.Cell>{payment.matricno}</Table.Cell>
                                        <Table.Cell>&#8358;{Intl.NumberFormat().format(payment.amount2, 2)}</Table.Cell>
                                        <Table.Cell>{payment.payment_date}</Table.Cell>
                                        <Table.Cell>Paid</Table.Cell>
                                    </Table.Row>
                            </Table.Body>
                        </Table></div> :
                        <Table unstackable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>LOCATION</Table.HeaderCell>
                                        <Table.HeaderCell>AMOUNT</Table.HeaderCell>
                                        <Table.HeaderCell>MAKE PAYMENT</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                       
                       {
                        siwes.map(m => {
                            if(m.matricno === localStorage.getItem('matricno')){
                                return( 
                                    <Table.Row>
                                        <Table.Cell>
                                            {m.location}
                                        </Table.Cell>
                                        <Table.Cell>
                                            &#8358;{Intl.NumberFormat().format(m.amount, 2)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <PaystackButton className="paystack-button" {...componentProps} />
                                        </Table.Cell>
                                    </Table.Row>
                               
                                )
                            }

                        })
                       }
                        </Table.Body>
                                <Table.Footer>
                                    <Table.Row> 
                                        <Table.HeaderCell negative  colSpan={4}>
                                            Please enter your SIWES location before making payment

                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                    }
        </div>
    )
}
export default DashboardLocation