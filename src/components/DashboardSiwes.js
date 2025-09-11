import { Button, Form, Header, Icon, Label, Message, Modal } from "semantic-ui-react"
import '../css/style.css'
import { useEffect, useReducer, useState } from "react"
import { getLocationDetails } from "./API"
import { useAddSiwesMutation, useGetSiwesQuery } from "../features/api/apiSlice"

const initialState = {
    open: false,
    size: undefined
}

function modalReducer(state, action){

    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close':
            return {open: false}

        default:
            new Error('An error has occurred')
    }
}

const DashboardSiwes = () => {

    const [state, dispatch] = useReducer(modalReducer, initialState)
    
    const {open, size} = state

    const [locations, setLocations] = useState([])
    
    const getAllLocationDetails = () => {
        getLocationDetails().get('/').then(res => setLocations(res.data))
        .catch(error => console.log('An error has occures ' + error))
    } 
    
    useEffect(() => {
        getAllLocationDetails()
    }, [])

    let options = []
    locations.map(m => (
        options.push({
            key: m.amount,
            text: m.location,
            value: m.location_id
        })
    ))

    const [endDate, setendDate] = useState("")
    const [startDate, setstartDate] = useState("")
    const [deadline, setDeadline] = useState("")
    const [session, setSession] = useState(localStorage.getItem("session"))
    const [department, setDepartment] = useState(localStorage.getItem("department"))
    const [faculty, setFaculty] = useState(localStorage.getItem("faculty"))
    const [matricno, setmatricno] = useState(localStorage.getItem('matricno'))
    const [siwes_address, setsiwes_address] = useState('')
    const [location_id, setlocation_id] = useState(0)
    const [location, setsiwes_location] = useState('')
    const [amount, setamount] = useState(0)


    const [endDateError, setendDateError] = useState(false)
    const [startDateError, setstartDateError] = useState(false)
    const [deadlineError, setDeadlineError] = useState(false)
    const [sessionError, setSessionError] = useState(false)
    const [departmentError, setDepartmentError] = useState(false)
    const [facultyError, setFacultyError] = useState(false)
    const [locationError, setsiwes_locationError] = useState(false)
    const [siwes_addressError, setsiwes_addressError] = useState(false)


    const {data:siwes, isSuccess, refetch} = useGetSiwesQuery()

    let s_details = []
    if(isSuccess){
        s_details = siwes.filter(s => s.matricno === localStorage.getItem('matricno'))[0]    
    }
    

    //compare dates
    const today = new Date()
    const comparestartdate = (d1, d2) => {
        let date1 = new Date(d1).getTime()
        let date2 = new Date(d2).getTime()

        if(date1 > date2){
            return true
        }
    }

    const chooseLocation = (id) => {
        const loc = locations.filter(l => l.location_id === id)[0]
        if(loc){
            setamount(loc.amount)
            setlocation_id(loc.location_id)
            setsiwes_location(loc.location)
        }
    }

    const compareEnddate = (d1, d2) => {
        let date1 = new Date(d1).getTime()
        let date2 = new Date(d2).getTime()

        if(date1 > date2){
            return true
        }
    }

     const compareSubmissiondate = (d1, d2) => {
        let date1 = new Date(d1).getTime()
        let date2 = new Date(d2).getTime()

        if(date1 > date2){
            return true
        }
    }
    const [loading, setLoading] = useState(false)

    const [addSiwes, {isLoading}] = useAddSiwesMutation()

    const saveSiwes = [endDate, startDate, deadline, session, department, faculty, matricno, location, location_id, amount, siwes_address].every(Boolean) && !isLoading

    const siwesBtn = async () => {
        if(startDate === ''){
            setstartDateError({content: 'Start date required', pointing: 'above' })
        }else if(comparestartdate(today, startDate)){
            setstartDateError({content: 'Start date must be greater than today', pointing: 'above' })
        }else if(endDate === ''){
            setendDateError({content: 'End date required', pointing: 'above' })
        }else if(compareEnddate(startDate, endDate)){
            setendDateError({content: 'End date must be greater than start date', pointing: 'above' })
        }else if(deadline === ''){
            setDeadlineError({content: 'Deadline required', pointing: 'above' })
        }else if(compareSubmissiondate(endDate, deadline)){
            setDeadlineError({content: 'Submission deadline date must be greater than end date', pointing: 'above' })
        }else if(session === ''){
            setSessionError({content: 'Session required', pointing: 'above' })
        }else if(department === ''){
            setDepartmentError({content: 'Department required', pointing: 'above' })
        }else if(faculty === ''){
            setFacultyError({content: 'Faculty required', pointing: 'above' })
        }else if(location === ''){
            setsiwes_locationError({content: 'Location required', pointing: 'above' })
        }else if(siwes_address === ''){
            setsiwes_addressError({content: 'Address required', pointing: 'above' })
        }
        else{
          setLoading(true)
          if(saveSiwes){
            try{
                await addSiwes({startDate, endDate, deadline, session, department, faculty, matricno, location, location_id, amount, siwes_address}).unwrap()
                localStorage.setItem('amt', amount * 100)
                localStorage.setItem('amt2', amount)
                localStorage.setItem('location', location)

                setLoading(false)
                setstartDate('')
                setendDate('')
                setDeadline('')
                dispatch({type: 'open' , size: 'mini'})
                refetch()
            }catch(error){
                console.log('An error has occured ', )
            }

          }
        }
    }

    return(
      <>
        <Label style={{marginTop: 70, marginLeft: 30, marginBottom: 20}} size="large" ribbon color="blue">UPDATE SIWES DETAILS</Label>                         
                <Message style={{marginBottom: 40}}  negative>
                    <Message.Content>
                        Please note that you can only update your SIWES information here once. For 
                        any subsequent update please contact the Admin. 

                    </Message.Content>
                </Message>
                    <Form>
                        <Form.Group widths={"equal"}>
                            <Form.Field>
                                <Form.Input
                                    label="Siwes Start Date"
                                    placeholder="Start Date"
                                    type="date"
                                    value={
                                        s_details ? s_details.startDate : startDate
                                    }
                                    onChange={(e) => setstartDate(e.target.value)}
                                    error={startDateError}
                                    onClick={() => setstartDateError(false)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Siwes End Date"
                                    placeholder="End Date"
                                    type="date"
                                    value={s_details ? s_details.endDate : endDate}
                                    onChange={(e) => setendDate(e.target.value)}
                                    error={endDateError}
                                    onClick={() => setendDateError(false)}
                                />
                            </Form.Field>
                             <Form.Field>
                                <Form.Input
                                    label="Submission Deadline"
                                    placeholder="Deadline"
                                    type="date"
                                    value={s_details ? s_details.deadline : deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    error={deadlineError}
                                    onClick={() => setDeadlineError(false)}
                                />
                            </Form.Field>                   
                        </Form.Group>
                        <Form.Group widths={"equal"}>
                            <Form.Field>
                                <Form.Input
                                    label="Session"
                                    placeholder="Session"
                                    value={session}
                                    error={sessionError}
                                    onClick={() => setSessionError(false)}
                                    
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Department"
                                    placeholder="department"
                                    value={department}
                                    error={departmentError}
                                    onClick={() => setDepartmentError(false)}
                                />
                            </Form.Field>
                             <Form.Field>
                                <Form.Input
                                    label="Faculty"
                                    placeholder="Faculty"
                                    value={faculty}
                                    error={facultyError}
                                    onClick={() => setFacultyError(false)}
                                />
                            </Form.Field>
                                               
                        </Form.Group>
                        <Form.Group widths={'equal'}>
                            <Form.Field>
                                <Form.Select
                                    placeholder="Select Location For SIWES"
                                    options={options}
                                    error={locationError}
                                    onChange={(e, {value}) => chooseLocation(value)}
                                    onClick={() => setsiwes_locationError(false)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    placeholder='Enter company name and address where you are undertaking your SIWES' 
                                    value={s_details ? s_details.siwes_address : siwes_address}
                                    onChange={(e) => setsiwes_address(e.target.value)}
                                    error={siwes_addressError}
                                    onClick = {() => setsiwes_addressError(false)}
                                />
                            </Form.Field>
                        </Form.Group>
                         <Form.Field style={{textAlign: 'center'}}>
                            {
                                s_details ?
                                <Button disabled={true} loading={loading} color="blue" size="small" onClick={siwesBtn}>
                                    Update Details
                                </Button> :
                                 <Button disabled={false} loading={loading} color="blue" size="small" onClick={siwesBtn}>
                                    Update Details
                                </Button>
                            }   
                        </Form.Field> 
                    </Form>
            <Modal
                open={open}
                size={size}
                onClose={() => dispatch({type: 'close'})}
            >
                <Modal.Content style={{textAlign: 'center'}}>
                    <Icon color="green" size="huge" name="check circle outline" />
                    <Header size="huge">Success</Header>
                    <p style={{fontSize: 20}}>SIWES update was done successfully</p>
                </Modal.Content>
            </Modal>
        </>
    )
}
export default DashboardSiwes