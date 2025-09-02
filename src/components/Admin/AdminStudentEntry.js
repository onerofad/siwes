import { useReducer, useState } from "react"
import { Header, Form, Button, Modal, Icon, Search, Divider } from "semantic-ui-react"
import { useAddStudentsMutation } from "../../features/api/apiSlice"
import { useNavigate } from "react-router"
import SearchStudent from "./SearchStudent"

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

const AdminStudentEntry = () => {

     const [state, dispatch] = useReducer(modalReducer, initialState)
        
    const {open, size} = state

    const navigate = useNavigate()

    const genderOptions = [
        {key: '1', text: 'Male', value: 'Male'},
        {key: '2', text: 'Female', value: 'Female'},
    ]

    const levelOptions = [
        {key: '1', text: '200 Level', value: '200 Level'},
        {key: '2', text: '300 Level', value: '300 Level'},
    ]

    const facultyOptions = [
        {key: '1', text: 'Clinical Medcine', value: 'Clinical Medcine'},
        {key: '2', text: 'Basic Medical Sciences', value: 'Basic Medical Sciences'},        
    ]

    const programmeOptions = [
        {key: '1', text: 'Undegraduate', value: 'Undergraduate'},
    ]

    const sessionsOptions  = [
        {key: '1', text: '2024/2025', value: '2024/2025'},
    ]

    const departmentOptions = [
        {key: '1', text: 'Medcine', value: 'Medcine'},
        {key: '2', text: 'Medcical Laboratory Science', value: 'Medcical Laboratory Science'},
    ]

     const disciplineOptions = [
        {key: '1', text: 'Medcine', value: 'Medcine'},
        {key: '2', text: 'Medcical Laboratory Science', value: 'Medcical Laboratory Science'},
    ]

    const [loading, setloading] = useState(false)
    const [firstname, setfirstname] = useState("")
    const [middlename, setmiddlename] = useState("")
    const [lastname, setlastname] = useState("")
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

    //const [picture, setpicture] = useState("")
    const [file, setFile] = useState(null)

    let picture


    const [session, setsession] = useState("")
    const [password, setpassword] = useState("")


    const [firstnameError, setfirstnameError] = useState(false)
    const [middlenameError, setmiddlenameError] = useState(false)
    const [lastnameError, setlastnameError] = useState(false)
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

    const handleFile = (e) => {
        const f = e.target.files[0]
        setFile(f)

        const reader = new FileReader()
        reader.readAsDataURL(f)

    }

    const [addStudent, {isLoading}] = useAddStudentsMutation()

    const saveStudent = [title, firstname, lastname, matricno, birthdate, programme, faculty, department, level, discipline, gender, phoneno, email, session, file, password].every(Boolean) && !isLoading

    const enterStudent = async() => {
        if(firstname === ''){
            setfirstnameError({content: 'Firstname is Required', pointing: 'above'})
        }else if(lastname === ''){
            setlastnameError({content: 'Lastname is Required', pointing: 'above'})

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
            setphone({content: 'Phone is Required', pointing: 'above'})
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

                        await addStudent({title, firstname, middlename, lastname, matricno, birthdate, programme, faculty, department, level, discipline, gender, phoneno, email, session, picture, password}).unwrap()
                        setloading(false)
                        dispatch({type: 'open', size: 'mini'})

                        setfirstname('')
                        setlastname('')
                        setmiddlename('')
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
                        //navigate('/dashboard')
            }
        }


    }
    return(
        <>
        <Header  style={{verticalAlign: 'middle', marginTop: 70, marginBottom: 40}}>
            Student Details
            <span style={{float: 'right'}}><SearchStudent /></span>
        </Header>
        <Divider />
            <Form size="large">
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                            label="First Name"
                            placeholder="First Name"
                            value={firstname}
                            error={firstnameError}
                            onChange={(e) => setfirstname(e.target.value)}
                            onClick={() => setfirstnameError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Middle Name"
                            placeholder="Middle Name"
                            value={middlename}
                            error={middlenameError}
                            onChange={(e) => setmiddlename(e.target.value)}
                            onClick={() => setmiddlenameError(false)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            label="Last Name"
                            placeholder="Last Name"
                            value={lastname}
                            error={lastnameError}
                            onChange={(e) => setlastname(e.target.value)}
                            onClick={() => setlastnameError(false)}
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
                </Form.Group>
                <Form.Group widths={"equal"}>
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
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Select
                            options={disciplineOptions}
                            label="Discipline"
                            placeholder="Discipline"
                               value={discipline}
                            error={disciplineError}
                            onChange={(e, {value}) => setdiscipline(value)}
                            onClick={() => setdisciplineError(false)}
                        />
                    </Form.Field>
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
                </Form.Group>
                <Form.Group widths={"equal"}>
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
                <p style={{fontSize: 20}}>Student added successfully</p>
                </Modal.Content>
             </Modal>
            </>
    )
 }
 export default AdminStudentEntry
 