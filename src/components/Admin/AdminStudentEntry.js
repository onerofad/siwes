import { useEffect, useReducer, useState } from "react"
import {Grid, Header, Form, Button, Modal, Icon, Search, Divider, Table, Pagination, Segment, Image, ModalContent, ModalHeader } from "semantic-ui-react"
import { useAddStudentsMutation, useGetStudentsQuery } from "../../features/api/apiSlice"
import { useNavigate } from "react-router"
import SearchStudent from "./SearchStudent"
import UploadStudent from "./UploadStudent"
import { getDepartments, getDisciplines, getFaculties } from "../API"

const initialState = {
    open: false,
    size: undefined,
    open_upload: false,
    size_upload: undefined
}

function modalReducer(state, action){

    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'open_upload':
            return {open_upload: true, size_upload: action.size_upload}
        case 'close':
            return {open: false, open_upload: false}
        default:
            new Error('An error has occurred')
    }
}

const AdminStudentEntry = () => {

     const [state, dispatch] = useReducer(modalReducer, initialState)
        
    const {open, size, open_upload, size_upload} = state

    const navigate = useNavigate()

    const genderOptions = [
        {key: '1', text: 'Male', value: 'Male'},
        {key: '2', text: 'Female', value: 'Female'},
    ]

    const levelOptions = [
        {key: '1', text: '200', value: '200 Level'},
        {key: '2', text: '300', value: '300 Level'},
        {key: '3', text: '400', value: '400 Level'},

    ]

    const programmeOptions = [
        {key: '1', text: 'Undegraduate', value: 'Undergraduate'},
    ]

    const sessionsOptions  = [
        {key: '1', text: '2024/2025', value: '2024/2025'},
        {key: '2', text: '2025/2026', value: '2025/2026'},

    ]

    const [loading, setloading] = useState(false)
    const [surname, setsurname] = useState("")
    const [othernames, setothernames] = useState("")
    const [matricno, setmatricno] = useState("")
    const [birthdate, setbirthdate] = useState("")
    const [programme, setprogramme] = useState("")
    const [faculty, setfaculty] = useState("")
    const [department, setdepartment] = useState("")
    const [discipline, setdiscipline] = useState("")
    const [level, setlevel] = useState("")
    const [gender, setgender] = useState("")
    const [phoneno, setphone] = useState("")
    const [email, setemail] = useState("")

    useEffect(() => {
        getAllFaculties()
    },[])

    const [faculties, setFaculties] = useState([])
    const [departments, setdepartments] = useState([])
    const [disciplines, setdisciplines] = useState([])


    const getAllFaculties = () => {
        getFaculties().get('/').then(res => setFaculties(res.data))
        getDepartments().get('/').then(res => setdepartments(res.data))
        getDisciplines().get('/').then(res => setdisciplines(res.data))

    }
    let facultyOptions = []
    faculties.map(m => {
        facultyOptions.push({
            key: m.id, 
            text: m.facultyName, 
            value: m.facultyCode
        })
    })

    let departmentOptions = []
    departments.map(m => {
        departmentOptions.push({
            key: m.id, 
            text: m.departmentName, 
            value: m.departmentCode
        })
    })

    let disciplinesOptions = []
    disciplines.map(m => {
        disciplinesOptions.push({
            key: m.id, 
            text: m.disciplineName, 
            value: m.disciplineName
        })
    }
    ) 
    //const [picture, setpicture] = useState("")
    const [file, setFile] = useState(null)

    let picture

    const [session, setsession] = useState("")
    const [password, setpassword] = useState("")


    const [surnameError, setsurnameError] = useState(false)
    const [othernamesError, setothernamesError] = useState(false)
    const [matricnoError, setmatricnoError] = useState(false)
    const [birthdateError, setbirthdateError] = useState(false)
    const [programmeError, setprogrammeError] = useState(false)
    const [facultyError, setfacultyError] = useState(false)
    const [departmentError, setdepartmentError] = useState(false)
    const [disciplineError, setdisciplineError] = useState(false)
    const [levelError, setlevelError] = useState(false)
    const [genderError, setgenderError] = useState(false)
    const [phoneError, setphoneError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [fileError, setFileError] = useState(false)
    const [sessionError, setsessionError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [title, setTitle] = useState('')

    const {data: students, isSuccess, refetch} = useGetStudentsQuery()
    

    const handleFile = (e) => {
        const f = e.target.files[0]
        setFile(f)

        const reader = new FileReader()
        reader.readAsDataURL(f)

    }

    const [addStudent, {isLoading}] = useAddStudentsMutation()

    const saveStudent = [title, surname, othernames, matricno, birthdate, programme, faculty, department, level, discipline, gender, phoneno, email, session, file, password].every(Boolean) && !isLoading

    const enterStudent = async() => {
        if(surname === ''){
            setsurnameError({content: 'Surname is Required', pointing: 'above'})
        }else if(othernames === ''){
            setothernamesError({content: 'Othernames is Required', pointing: 'above'})

        }else if(matricno === ''){
            setmatricnoError({content: 'Matric No is Required', pointing: 'above'})

        }else if(birthdate === ''){
            setbirthdateError({content: 'Birth date is Required', pointing: 'above'})

        }else if(programme === ''){
            setprogrammeError({content: 'Programme is Required', pointing: 'above'})

        }else if(faculty === ''){
            setfacultyError({content: 'Faculty is Required', pointing: 'above'})

        }else if(department === ''){
            setdepartmentError({content: 'Department is Required', pointing: 'above'})

        }else if(discipline === ''){
            setdisciplineError({content: 'Discipline is Required', pointing: 'above'})

        }else if(level === ''){
            setlevelError({content: 'Level is Required', pointing: 'above'})

        }else if(gender === ''){
            setgenderError({content: 'Gender is Required', pointing: 'above'})

        }else if(phoneno === ''){
            setphoneError({content: 'Phone is Required', pointing: 'above'})
        }else if(email === ''){
            setemailError({content: 'Email is Required', pointing: 'above'})
        }else if(file === null){
            setFileError({content: 'Picture is Required', pointing: 'above'})
        }
        else if(session === ''){
            setsessionError({content: 'Session is Required', pointing: 'above'})

        }else if(password === ''){
            setpasswordError({content: 'Password is Required', pointing: 'above'})
        }else{
            if(saveStudent){
                setloading(true)
                let fileURL
                const data = new FormData()
                data.append('file', file)
                data.append("upload_preset", "slakw5ml");
                data.append("cloud_name", "du3ck2joa");
                data.append("resource_type", "text")
                data.append("folder", "siwes");

                const response = await fetch(
                            `https://api.cloudinary.com/v1_1/du3ck2joa/upload/`,
                            {
                            method: "POST",
                            body: data,
                            }
                        );
                        const res = await response.json();
                        fileURL = res.url.toString()
                        picture = fileURL

                        await addStudent({title, surname, othernames, matricno, birthdate, programme, faculty, department, level, discipline, gender, phoneno, email, session, picture, password}).unwrap()
                        setloading(false)
                        dispatch({type: 'open', size: 'mini'})

                        setsurname('')
                        setothernames('')
                        setbirthdate('')
                        setdepartment('')
                        setdiscipline('')
                        setsession('')
                        setlevel('')
                        setprogramme('')
                        setgender('')
                        setfaculty('')
                        setphone('')
                        setemail('')
                        setpassword('')
                        setmatricno('')
                        setTitle('')
                        setFile(null)
                        refetch()
                        //navigate('/dashboard')
            }
        }


    }
    return(
        <>
        <Header  style={{verticalAlign: 'middle', marginTop: 70, marginBottom: 40}}>
            <Header.Content>Student Entry</Header.Content>
            <span style={{float: 'right'}}><SearchStudent /></span>
        </Header>
        <Divider />
        <Segment raised padded>
            <Form size="large">
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                            label="Surname"
                            placeholder="Surname"
                            value={surname}
                            error={surnameError}
                            onChange={(e) => setsurname(e.target.value)}
                            onClick={() => setsurnameError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Other Names"
                            placeholder="Other Names"
                            value={othernames}
                            error={othernamesError}
                            onChange={(e) => setothernames(e.target.value)}
                            onClick={() => setothernamesError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Matric No"
                            placeholder="Matric No"
                            value={matricno}
                            error={matricnoError}
                            onChange={(e) => {
                                setmatricno(e.target.value)
                                setTitle(e.target.value)
                            }}
                            onClick={() => setmatricnoError(false)}
                        />
                    </Form.Field>
                     <Form.Field>
                        <Form.Input
                            label="Birth Date"
                            placeholder="Birth Date"
                            type="date"
                            value={birthdate}
                            error={birthdateError}
                            onChange={(e) => setbirthdate(e.target.value)}
                            onClick={() => setbirthdateError(false)}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                   
                    <Form.Field>
                        <Form.Select
                        options={programmeOptions}
                            label="Programme"
                            placeholder="Programme"
                               value={programme}
                            error={programmeError}
                            onChange={(e, {value}) => setprogramme(value)}
                            onClick={() => setprogrammeError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            options={facultyOptions}
                            label="Faculty"
                            placeholder="Faculty"
                               value={faculty}
                            error={facultyError}
                            onChange={(e, {value}) => setfaculty(value)}
                            onClick={() => setfacultyError(false)}
                        />
                    </Form.Field>
                     <Form.Field>
                        <Form.Select
                            options={departmentOptions}
                            label="Department"
                            placeholder="Department"
                               value={department}
                            error={departmentError}
                            onChange={(e, {value}) => setdepartment(value)}
                            onClick={() => setdepartmentError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            options={disciplinesOptions}
                            label="Discipline"
                            placeholder="Discipline"
                               value={discipline}
                            error={disciplineError}
                            onChange={(e, {value}) => setdiscipline(value)}
                            onClick={() => setdisciplineError(false)}
                        />
                    </Form.Field>
                   
                </Form.Group>
                
                <Form.Group widths={"equal"}>
                    
                    <Form.Field>
                        <Form.Select
                        options={levelOptions}
                            label="Level"
                            placeholder="Level"
                               value={level}
                            error={levelError}
                            onChange={(e, {value}) => setlevel(value)}
                            onClick={() => setlevelError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                        options={genderOptions}
                            label="Gender"
                            placeholder="Gender"
                               value={gender}
                            error={genderError}
                            onChange={(e, {value}) => setgender(value)}
                            onClick={() => setgenderError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Phone No"
                            placeholder="Phone No"
                            value={phoneno}
                            error={phoneError}
                            onChange={(e) => setphone(e.target.value)}
                            onClick={() => setphoneError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Email"
                            placeholder="Email"
                               value={email}
                            error={emailError}
                            onChange={(e) => setemail(e.target.value)}
                            onClick={() => setemailError(false)}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    
                    <Form.Field>
                        <Form.Input
                            fluid
                            label="Picture"
                            placeholder="Upload File"
                            type="file"
                            error={fileError}
                            onChange={handleFile}
                            onClick={() => setFileError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            options={sessionsOptions}
                            label="Session"
                            placeholder="Session"
                            value={session}
                            error={sessionError}
                            onChange={(e, {value}) => setsession(value)}
                            onClick={() => setsessionError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Password"
                            placeholder="Password"
                               value={password}
                            error={passwordError}
                            onChange={(e) => setpassword(e.target.value)}
                            onClick={() => setpasswordError(false)}
                        />
                    </Form.Field>
                </Form.Group>
                    <Form.Field style={{textAlign: 'center', marginTop: 40}}>
                        <Button loading={loading} size="large" onClick={enterStudent} positive>
                            Enter Student
                        </Button>
                        <Button onClick={() => dispatch({type: 'open_upload', size_upload: 'tiny'})} icon secondary size="large">
                            <Icon name="upload" />
                            Upload Student
                        </Button>
                    </Form.Field>
            </Form>
            </Segment>
            <Divider />
            <Header>Student Details</Header>
            <Segment raised padded >
             <Table striped celled basic>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      Surname
                    </Table.HeaderCell>
                  
                    <Table.HeaderCell>
                      Other Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Matric No
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Programme
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Faculty
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Department
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Level
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Picture
                    </Table.HeaderCell>
                    {/*<Table.HeaderCell>
                      Action
                    </Table.HeaderCell>*/}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    isSuccess ? 
                    students.map(m => {
                        return(
                          <Table.Row>
                            <Table.Cell>{m.surname}</Table.Cell>
                            <Table.Cell>{m.othernames}</Table.Cell>
                            <Table.Cell>{m.matricno}</Table.Cell>
                            <Table.Cell>{m.programme}</Table.Cell>
                            <Table.Cell>{m.faculty}</Table.Cell>
                            <Table.Cell>{m.department}</Table.Cell>
                            <Table.Cell>{m.level}</Table.Cell>
                            <Table.Cell>
                                <Image avatar src={m.picture} />
                            </Table.Cell>
                            {/*<Table.Cell>
                              <Button icon positive size="mini">
                                <Icon name="edit" />
                              </Button>
                              <Button icon negative size="mini">
                                <Icon name="trash" />
                              </Button>
                            </Table.Cell>*/}

                          </Table.Row>
                        )
                    }) : ''
                }
                </Table.Body>
                </Table>
                <Button onClick={() => refetch()} icon positive>
                    <Icon name="refresh" />
                    Refetch
                </Button>
            </Segment>
                <Pagination 
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={4}
                />
             <Modal
                open={open}
                size={size}
                onClose={() => dispatch({type: 'close'})}
            >
                <ModalContent style={{textAlign: 'center'}}>
                <Icon color="green" size="huge" name="check circle outline" />
                <Header size="huge">Success</Header>
                <p style={{fontSize: 20}}>Student added successfully</p>
                </ModalContent>
             </Modal>
             <Modal
                open={open_upload}
                size={size_upload}
             >
                <ModalHeader>
                    Upload Excel File
                    <Icon link onClick={() => dispatch({type: 'close'})} style={{float: 'right'}} name="close" />
                </ModalHeader>
                <ModalContent>
                    <UploadStudent />
                </ModalContent>
             </Modal>
            </>
    )
 }
 export default AdminStudentEntry
 