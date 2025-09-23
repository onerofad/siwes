import { Grid, Form, Table, Header, Button, Icon, Modal, Segment, Message } from "semantic-ui-react"
import { useReducer, useState } from "react"
import * as XLSX from 'xlsx'
import { getDepartments } from "../API"
import { useDeleteDepartmentMutation, useGetDepartmentsQuery } from "../../features/api/apiSlice"

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


const UploadDepartments = () => {

    const [state, dispatch] = useReducer(modalReducer, initialState)
            
    const {open, size, open_delete, size_delete} = state

    const [file, setFile] = useState(null)

    const [showMsg, setshowMsg] = useState(false)

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const [fileError, setFileError] = useState(false)

    const {data: departments, isSuccess, refetch} = useGetDepartmentsQuery()
       
        let department_details
        let id = 0
        if(isSuccess){
            {
                department_details = departments.map(m => (
                    <Table.Row>
                        <Table.Cell>{++id}</Table.Cell>
                        <Table.Cell>{m.departmentName}</Table.Cell>
                        <Table.Cell>{m.departmentCode}</Table.Cell>
                        <Table.Cell>{m.facultyCode}</Table.Cell>
                        <Table.Cell>
                            <Button onClick={() =>deleteDepartment(m.id, m.departmentName)} basic icon size="mini" color="red">
                                <Icon name="trash" />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))
            }
        }

    const [deptId, setId] = useState('')
    const [deptName, setdeptName] = useState('')

    const deleteDepartment = (id, depName) => {
        setId(id)
        setdeptName(depName)
        dispatch({type: 'open_delete', size_delete: 'mini'})
    }

    const [delete_department, {isLoading}] = useDeleteDepartmentMutation()
    const removeDepartment = async () => {
        await delete_department(deptId).unwrap()
        dispatch({type: 'close'})
        refetch()
    }
        

    const handleFile = (e) => {
        const file = e.target.files[0]
        setFile(file)

        const reader = new FileReader()

        reader.onload = (event) => {
            const workbook = XLSX.read(event.target.result, {type: 'binary'});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);

            setData(sheetData)
        };
        reader.readAsBinaryString(file);

    }

    const btnClick = () => {
        if(file === null){
            setFileError({content: 'File upload is required', pointing: 'above'})
        }else{
            data.map(m => {
                let departmentName = m.DepartmentName
                let departmentCode = m.DepartmentCode
                let facultyCode = m.FacultyCode
                let item = {departmentName, departmentCode, facultyCode}
                getDepartments().post('/', item).catch(error => console.log('An error has occurred' + error))
                if(data.at(-1)){
                    refetch()
                    setshowMsg(!showMsg)

                    //dispatch({type: 'close'})
                }
            })
        }
    }

    return(
        <Grid padded stackable style={{}}>
            <Grid.Column>
            <Header dividing style={{marginTop: 70}}>Upload Departments</Header>
            <Segment raised padded >
            <Table striped celled basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            #
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Department Name
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Department Code
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Faculty Code
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Action
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {department_details}
                </Table.Body>
            </Table>
            </Segment>
            <Button icon positive onClick={() => dispatch({type: 'open', size: 'mini'})}>
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
                    Upload Departments
                    <Icon onClick={() => dispatch({type: 'close'})} link style={{float: 'right'}} name="close" />
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
                                        onClick = {() => setFileError(false)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button loading={loading} onClick={() => btnClick()} color='green' size='large'>
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
                        Would you like to remove department {deptName}
                    </Header>
                    <Button onClick={() => removeDepartment()}  positive>
                        Yes
                    </Button>
                    <Button onClick={() => dispatch({type: 'close'})} negative>
                        No
                    </Button>
                </Modal.Content>
            </Modal>
        </Grid>
    )
        
}
export default UploadDepartments