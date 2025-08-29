import { useEffect, useState } from "react"
import { Grid, Label, Form, Table, TextArea} from "semantic-ui-react"
import { useAddPaymentMutation, useGetPaymentQuery } from "../features/api/apiSlice"
import { PaystackButton } from "react-paystack"
import '../css/style.css'
import { getLocationDetails } from "./API"
import {v4 as uuid} from 'uuid'

const DashboardLocation = () => {

    const [locations, setLocations] = useState([])

    const getAllLocationDetails = () => {
        getLocationDetails().get('/').then(res => setLocations(res.data))
        .catch(error => console.log('An error has occures ' + error))
    } 

    useEffect(() => {
        getAllLocationDetails()
    }, [])

    const publicKey = "pk_test_0091aca0928f0b1654a7aa5d57bd57300c21be38"
    const [amount, setamount] = useState(0) // Remember, set in kobo!
    const [amount2, setamount2] = useState(0)
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [name, setName] = useState(localStorage.getItem('firstname') + localStorage.getItem('lastname'))
    const [phone, setPhone] = useState(localStorage.getItem('phoneno'))

    //SIWES date
    const [firstname, setfirstname] = useState(localStorage.getItem('firstname'))
    const [lastname, setlastname] = useState(localStorage.getItem('lastname'))
    const [matricno, setmatricno] = useState(localStorage.getItem('matricno'))
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState('')

    const [location_id, setlocation_id] = useState('')

    const [payment_status, setpayment_status] = useState(false)

    const {data:payments, isSuccess, refetch} = useGetPaymentQuery()

    let payment
    if(isSuccess){
        payment = payments.filter(p => p.matricno === localStorage.getItem('matricno'))[0]
    }

    let options = []
    locations.map(m => (
        options.push({
            key: m.amount,
            text: m.location,
            value: m.location_id
        })
    ))
        
    const selectAmount = (value) => {
        setlocation_id(value)
        const loc = locations.filter(l => l.location_id === value)[0]
        setLocation(loc.location)
        let amt = loc.amount * 100
        setamount(amt)
        setamount2(loc.amount)
    }

    const [addpayment, {isLoading}] = useAddPaymentMutation()

    const savePayment = [amount2, location, matricno, firstname, lastname].every(Boolean) && !isLoading

    const updatePayment = async () => {
        try{
            if(savePayment){
                const unique_id = uuid()
                let reference_id = unique_id
                await addpayment({reference_id, amount2, location, matricno, firstname, lastname}).unwrap()
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
        text: "Pay Now",
        onSuccess: () => updatePayment(),
        onClose: () => alert("Wait! Don't leave :("),
    }

    return(
    <div style={{marginTop: '20px', padding: '0px 40px', height: '100vh',}}>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Label size="large" ribbon color="blue">MY LOCATION</Label>                         
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Form>
                        <Form.Group>
                            <Form.Field>
                                <label>Select Your SIWES Location and Make Payment:</label>
                                <Form.Select
                                    placeholder="Select Location For SIWES"
                                    options={options}
                                    onChange={(e, {value}) => selectAmount(value)}
                                    loading={loading}
                                    disabled={payment ? true : false}
                                />
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    {
                        payment ? <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Reference ID</Table.HeaderCell>
                                    <Table.HeaderCell>First Name</Table.HeaderCell>
                                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                                    <Table.HeaderCell>Matric No</Table.HeaderCell>
                                    <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{payment.reference_id}</Table.Cell>
                                        <Table.Cell>{payment.firstname}</Table.Cell>
                                        <Table.Cell>{payment.lastname}</Table.Cell>
                                        <Table.Cell>{payment.matricno}</Table.Cell>
                                        <Table.Cell>&#8358;{Intl.NumberFormat().format(payment.amount2, 2)}</Table.Cell>
                                        <Table.Cell>{payment.payment_date}</Table.Cell>
                                        <Table.Cell>Paid</Table.Cell>

                                    </Table.Row>
                            </Table.Body>
                        </Table> :
                        location_id === '' ? '' :
                        locations.map((m) => {
                            if(m.location_id === location_id){
                                return(
                                <Table  textAlign="center">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>LOCATION</Table.HeaderCell>
                                        <Table.HeaderCell>AMOUNT</Table.HeaderCell>
                                        <Table.HeaderCell>MAKE PAYMENT</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
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
                                </Table.Body>
                                <Table.Footer>
                                    <Table.Row> 
                                        <Table.HeaderCell negative  colSpan={4}>
                                            Please enter your the address of your SIWES before making payment

                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                                )
                            }
                           
                        })
                       
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default DashboardLocation