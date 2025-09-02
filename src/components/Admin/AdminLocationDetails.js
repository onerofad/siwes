import { useReducer, useState } from "react"
import { Header, Form, Button, Icon, Modal, Grid, Table } from "semantic-ui-react"
import { useAddLocationsMutation, useDeleteLocationsMutation, useEditLocationsMutation, useGetlocationsQuery } from "../../features/api/apiSlice"

const initialState = {
    open: false,
    size: undefined,

    open_edit: false,
    size_edit: undefined,
}

function modalReducer(state, action){

    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'open_edit':
            return {open_edit: true, size_edit: action.size_edit}
        case 'close':
            return {open: false, open_edit: false}

        default:
            new Error('An error has occurred')
    }
}


const AdminLocationDetails = () => {

    const {data: locations, isSuccess, refetch} = useGetlocationsQuery()

    let locationDetails
    if(isSuccess){
        locationDetails = locations.map(m => (
            <Table.Row>
                <Table.Cell>{m.location_id}</Table.Cell>
                <Table.Cell>{m.location}</Table.Cell>
                <Table.Cell>&#8358;{Intl.NumberFormat().format(m.amount, 2)}</Table.Cell>
                <Table.Cell>
                    <Button 
                        icon
                        positive
                        size="mini"
                        onClick={() => editLocation(m.id)}
                    >
                        <Icon name="edit" />
                    </Button>
                    <Button  
                        icon
                        size="mini"
                        negative 
                        onClick={() => deleteLocation(m.id)}
                    >
                        <Icon name="trash" />
                    </Button>
                </Table.Cell>
            </Table.Row>
        ))
    }

    const [delete_Location] = useDeleteLocationsMutation()

    const deleteLocation = async (id) => {
        try{
            await delete_Location(id).unwrap()
            refetch()
        }catch(error){
            console.log(error => 'An error has occurred ' + error)
        }
    }

    
    const [state, dispatch] = useReducer(modalReducer, initialState)
            
    const {open, size, open_edit, size_edit} = state

    const [location_id, setlocation_id] = useState('')
    const [location, setlocation] = useState('')
    const [amount, setamount] = useState('')

    const [location_idError, setlocation_idError] = useState(false)
    const [locationError, setlocationError] = useState(false)
    const [amountError, setamountError] = useState(false)

    const [loading, setLoading] = useState(false)

    const [editLoc] = useEditLocationsMutation()

    const saveEdit = [location, amount].every(Boolean) 
    const editLocationBtn = async() => {
        try{
            if(saveEdit){
                setLoading(true)
                await editLoc({id: loc_id, location, amount}).unwrap()
                setLoading(false)
                dispatch({type: 'close'})
                refetch()
            }
        }catch(error){
            console.log('An error has occurred ' + error)
        }
    }


    const [addLocation, {isLoading}] = useAddLocationsMutation()

    const saveLocation = [location_id, location, amount].every(Boolean) && !isLoading

    const locationBtn = async() => {
        if(location_id === ''){
            setlocation_idError({content: 'Location Id is required', pointing: 'above'})
        }else if(amount === ''){
            setamountError({content: 'Amount Id is required', pointing: 'above'})
        }else if(location === ''){
            setlocationError({content: 'Location is required', pointing: 'above'})
        }else{
            if(saveLocation){
                try{
                    setLoading(true)
                    await addLocation({location_id, location, amount}).unwrap()
                    setLoading(false)
                    setlocation_id('')
                    setamount('')
                    setlocation('')
                    dispatch({type: 'open', size: 'mini'})
                    refetch()
                }catch(error){
                    console.log('An error has occurred ' + error)
                }
                
            }
        }
    }

     const [loc_id, setloc_id] = useState()
    const editLocation = (id) => {
        try{
            const loc = locations.filter(l => l.id === id)[0]
            setlocation(loc.location)
            setloc_id(loc.id)
            setamount(loc.amount)
            dispatch({type: 'open_edit', size_edit: 'tiny'})
        }catch(error){
            console.log('An error has occurred ' + error)
        }
    }

    return(
        <Grid padded stackable divided >
        <Grid.Column width={8}>
        <Header style={{marginTop: 70}}>Enter Location</Header>
            <Form size="large">
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                            placeholder="Location ID"
                            value={location_id}
                            error={location_idError}
                            onChange={e => setlocation_id(e.target.value)}
                            onClick = {() => setlocation_idError(false)}
                        />
                    </Form.Field>
                     <Form.Field>
                        <Form.Input
                            placeholder="Amount"
                            value={amount}
                            error={amountError}
                            onChange={e => setamount(e.target.value)}
                            onClick = {() => setamountError(false)}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                     <Form.Field>
                        <Form.TextArea
                            placeholder="SIWES Location"
                              value={location}
                            error={locationError}
                            onChange={e => setlocation(e.target.value)}
                            onClick = {() => setlocationError(false)}
                        />
                    </Form.Field>
                </Form.Field>
                <Form.Field style={{textAlign: 'center', marginTop: 40}}>
                    <Button loading={loading} onClick={locationBtn} size="large" positive>
                        Enter Location
                    </Button>
                </Form.Field>
            </Form>
            </Grid.Column>
            <Grid.Column width={8}>
            <Header style={{marginTop: 70}}>Location Details</Header>
            <Table size="small" basic celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {locationDetails}
                </Table.Body>
            </Table>
            </Grid.Column>
            <Modal
                open={open}
                size={size}
                onClose={() => dispatch({type: 'close'})}
            >
                    <Modal.Content style={{textAlign: 'center'}}>
                        <Icon color="green" size="huge" name="check circle outline" />
                        <Header size="huge">Success</Header>
                        <p style={{fontSize: 20}}>Location added successfully</p>
                    </Modal.Content>
            </Modal>
            <Modal
                open={open_edit}
                size={size_edit}
            >
                <Modal.Header>
                    Edit Location
                    <Icon link onClick={() => dispatch({type: 'close'})} name='close' style={{float: 'right'}} />
                </Modal.Header>
                <Modal.Content>
                    <Form size="large">
                        <Form.Group widths={"equal"}>
                            <Form.Field>
                                <Form.Input
                                    placeholder="Amount"
                                    value={amount}
                                    error={amountError}
                                    onChange={e => setamount(e.target.value)}
                                    onClick = {() => setamountError(false)}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <Form.TextArea
                                placeholder="SIWES Location"
                                value={location}
                                error={locationError}
                                onChange={e => setlocation(e.target.value)}
                                onClick = {() => setlocationError(false)}
                            />
                        </Form.Field>
                        <Form.Field style={{textAlign: 'center', marginTop: 40}}>
                            <Button loading={loading} onClick={editLocationBtn} size="large" positive>
                                Edit Location
                            </Button>
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
        </Grid>
    )
 }
 export default AdminLocationDetails
 