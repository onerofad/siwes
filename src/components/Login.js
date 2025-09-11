import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Button, Card, Form, Grid, Header, Message, Segment, Image } from "semantic-ui-react"
import { useGetStudentsQuery } from "../features/api/apiSlice"
import logo from '../images/icon.png'
import getStudents from "./API"

const Login = () => {

     const [msg, setMsg] = useState("")
    
        const navigate = useNavigate()
    
        const [loading, setLoading] = useState(false)
    
        const [matricno, setmatno] = useState("")
        const [password, setpasswd] = useState("")
    
        const [matnoerror, setmatnoerror] = useState(false)
        const [passwderror, setpasswderror] = useState(false)

        const [disabled, setdisabled] = useState(true)
    
        const handlematno = (e) => setmatno(e.target.value)
        const handlepasswd = (e) => setpasswd(e.target.value)

        const [students, setStudents] = useState([])

        useEffect(() => {
            getAllStudents()
        },[])

        const getAllStudents = () => {
            getStudents().get('/').then(res => setStudents(res.data))
        }
    
        const onclickLogin = () => {
    
            if(matricno === ""){
                setmatnoerror({content: 'Enter matric no here', pointing: 'below'})
            }else if(password === ""){
                setpasswderror({content: 'Enter password here', pointing: 'below'})
            }else {
                const student = students.filter(u => u.matricno === matricno)[0]
                if(!student){
                    setmatnoerror({content: 'Matric no does not exist', pointing: 'below'})
                }else{
                    if(student.password !== password){
                        setpasswderror({content: 'Password does not exist', pointing: 'below'})
                    }else{
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                            let surname = student.surname
                            let othernames = student.othernames
                            let matno = student.matricno
    
                            let faculty = student.faculty
                            let session = student.session
                            let department = student.department
                            let email = student.email
                            let phoneno = student.phoneno
    
                            let img = student.picture                     
    
                            localStorage.setItem("surname", surname)
                            localStorage.setItem("othernames", othernames)
                            localStorage.setItem("matricno", matno)
                            localStorage.setItem('email', email)
                            localStorage.setItem('phoneno', phoneno)
    
                            localStorage.setItem("faculty", faculty)
                            localStorage.setItem("session", session)
                            localStorage.setItem("department", department)
                            localStorage.setItem('img', img)
                            localStorage.setItem('token', true)
                            navigate("/dashboard")
                        },3000)
    
    
                    }
                }
    
                
                }
            }
        
    return(
        <Segment vertical secondary>
        <Grid style={{height: '100vh'}} textAlign="center" verticalAlign="middle">
            <Grid.Column style={{maxWidth: 450}}>
                    <Card fluid raised style={{padding: '40px 40px'}}>
                        <Card.Content>
                        <Header>DELTA STATE UNIVERSITY, ABRAKA</Header>
                        <Image src={logo} />
                        <Header as='h2' color='blue' textAlign='center'>
                            Student Login
                        </Header>
                        <Form size="large">
                        
                                {
                                    msg === "" ? "" :
                                    <Message negative>
                                        {msg}
                                    </Message>
                                }
                                <Form.Input
                                    type="text"
                                    placeholder='Mat No'
                                    value={matricno}
                                    error={matnoerror}
                                    onChange={handlematno}
                                    onClick={() => setmatnoerror(false)}
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        fontFamily: 'Prompt'
                                    }}
                                />
                                <Form.Input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    error={passwderror}
                                    onChange={handlepasswd}
                                    onClick={() => setpasswderror(false)}
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        fontFamily: 'Prompt'
                                    }}
                                />
                                <Form.Field style={{textAlign: 'left'}}>
                                    <Form.Checkbox 
                                        style={{
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: 16,
                                            fontFamily: 'Prompt'
                                        }}
                                        label='Remember me'
                                    />
                                </Form.Field>
                                
                                <Button 
                                    fluid 
                                    color="blue"
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        fontFamily: 'Prompt',
                                        backgroundColor: '"#2980b9"'
                                    }}
                                    onClick={onclickLogin}
                                    loading={loading}
                                >
                                    Login
                                </Button>
                        </Form>
                        </Card.Content>
                   </Card>
            </Grid.Column>

        </Grid>
        </Segment>
    )
}
export default Login
