import { Grid, Form, Table, Header, Button, Icon, Modal, Segment, Message } from "semantic-ui-react"
import { useState, useReducer } from "react"
import { useDeleteDisciplinesMutation, useDeleteFacultyMutation, useGetDisciplinesQuery, useGetFacultiesQuery } from "../../features/api/apiSlice"
import * as XLSX from 'xlsx'
import { getDisciplines, getFaculties } from '../API'

const initialState = {
    open: false,
    size: undefined,
    open_delete: false,
    size_delete: undefined

}

function modalReducer(state, action){

    switch(action.type){
        case 'open':
            return {open: true, size: action.size}  
       
        case 'open_delete':
            return {open_delete: true, size_delete: action.size_delete}
        case 'close':
            return {open: false, open_delete: false}
        default:
            new Error('An error has occurred')
    }
}

const UploadDisciplines = () => {

    
    const [state, dispatch] = useReducer(modalReducer, initialState)
        
    const {open, size, open_delete, size_delete} = state

    const {data: disciplines, isSuccess, refetch} = useGetDisciplinesQuery()
   
    let disciplines_details
    let id = 0
    if(isSuccess){
        {
            disciplines_details = disciplines.map(m => (
                <Table.Row>
                    <Table.Cell>{++id}</Table.Cell>
                    <Table.Cell>{m.disciplineName}</Table.Cell>
                    <Table.Cell>
                        <Button icon onClick={() => deleteDiscipline(m.id, m.disciplineName)} basic size="mini" negative>
                            <Icon  name="trash" />
                        </Button>
                    </Table.Cell>
                </Table.Row>
            ))
        }

    }

    const [msg, setMsg] = useState('')

    const [showMsg, setshowMsg] = useState(false)
    
    const [data, setData] = useState([])
    
    const [file, setFile] = useState(null)
    
    const [fileError, setfileError] = useState(false)
    
    const [loading, setLoading] = useState(false)
    
    const handleFile = (e) => {
            const file = e.target.files[0]
            setFile(file)
            const reader = new FileReader()
    
            reader.onload = (event) => {
            const workbook = XLSX.read(event.target.result, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);
    
            setData(sheetData);
            };
    
            reader.readAsBinaryString(file);
        }
    
        let content = []
        const upload = () => {
            if(file === null){
                setfileError({content: 'Upload file is required'})
            }else{
                data.map((m) => {
                    let disciplineName = m.DisciplineName
                    let item = {disciplineName}
                    getDisciplines().post('/', item)
                    if(data.at(-1)){
                        refetch()
                        setshowMsg(!showMsg)

                       // dispatch({type: 'close'})

                    }
                })
            }
        }

        const [disciplineName, setDisciplineName] = useState('')
        const [disciplineId, setId] = useState('')

        const [removeDiscipline, {isLoading}] = useDeleteDisciplinesMutation()
        
        const deleteDiscipline = (id, disName) => {
            setDisciplineName(disName)
            setId(id)
            dispatch({type: 'open_delete', size_delete: 'mini'})
          
        }
        const removeTheDiscipline = async () => {
            await removeDiscipline(disciplineId).unwrap()
            dispatch({type: 'close'})
            refetch()
        }

    return(
        <Grid padded stackable style={{}}>
            <Grid.Column>
            <Header dividing style={{marginTop: 70}}>Upload Discipline</Header>
            <Segment raised padded >
            <Table striped celled basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            #
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Discipline Name
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Action
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                 {disciplines_details}
                </Table.Body>
            </Table>
            </Segment>
            <Button icon positive size="large" onClick={() => dispatch({type: 'open', size: 'tiny'})}>
                <Icon name="upload" />
                Upload
            </Button>
            <Button icon size="large" color="blue" onClick={() => refetch()}>
                <Icon name="refresh" />
                Refresh
            </Button>
            </Grid.Column>  
            <Modal
                open={open}
                size={size}
            >
            
            <Modal.Header>
                    Upload Discipline
                    <Icon link onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close" />
                </Modal.Header>
                <Modal.Content>
                    {
            showMsg ? 
                <Message positive>
                    <Message.Content>
                        Upload was successfull
                    </Message.Content>
                </Message> : ''
            }
                      <Form>
                                <Form.Field>
                                    <Form.Input
                                        placeholder='Upload File'
                                        type='file'
                                        onChange={handleFile}
                                        error={fileError}
                                        onClick = {() => setfileError(false)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button loading={loading} onClick={upload} color='green' size='large'>
                                        Upload
                                    </Button>
                                
                                </Form.Field>
                            </Form>
                </Modal.Content>
            </Modal>
            <Modal
                open={open_delete}
                size={size_delete}
            >
                <Modal.Header>
                    Delete
                </Modal.Header>
                <Modal.Content style={{textAlign: 'center'}}>
                    <Header disabled>
                        Would you like to remove discipline {disciplineName}
                    </Header>
                    <Button onClick={() => removeTheDiscipline()}  positive>
                        Yes
                    </Button>
                    <Button onClick={() => dispatch({type:'close'})} negative>
                        No
                    </Button>
                </Modal.Content>
            </Modal>
        </Grid>
    )
        
}
export default UploadDisciplines