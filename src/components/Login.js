import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import Navbar2 from "./Navbar2.js"
import '../css/style.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetStudentsQuery } from "../features/api/apiSlice.js"


const Login = () => {

    const [msg, setMsg] = useState("")

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [matricno, setmatno] = useState("")
    const [password, setpasswd] = useState("")

    const [matnoerror, setmatnoerror] = useState(false)
    const [passwderror, setpasswderror] = useState(false)

    const handlematno = (e) => setmatno(e.target.value)
    const handlepasswd = (e) => setpasswd(e.target.value)

    const {data: students, isSuccess} = useGetStudentsQuery()

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
                        let firstname = student.firstname
                        let middlename = student.middlename
                        let lastname = student.lastname
                        let matno = student.matricno

                        let faculty = student.faculty
                        let session = student.session
                        let department = student.department
                        let email = student.email
                        let phoneno = student.phoneno

                        let img = student.picture                     

                        localStorage.setItem("firstname", firstname)
                        localStorage.setItem("middlename", middlename)
                        localStorage.setItem("lastname", lastname)
                        localStorage.setItem("matricno", matno)
                        localStorage.setItem('email', email)
                        localStorage.setItem('phoneno', phoneno)

                        localStorage.setItem("faculty", faculty)
                        localStorage.setItem("session", session)
                        localStorage.setItem("department", department)
                        localStorage.setItem('img', img)
                        navigate("/dashboard")
                    },3000)


                }
            }

            
            }
        }
    

    return(
        <>
        <div style={{ height: '100vh', backgroundColor: '', }} >
        <Grid 
            textAlign="center" 
            verticalAlign="middle" 
        >
            <Grid.Row>
                <Grid.Column>
                    <Navbar2 />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column style={{maxWidth: 500, marginTop: 40}}>
                    
                    <Form size="huge">
                     
                        <Segment padded raised>
                            {
                                msg === "" ? "" :
                                <Message negative>
                                    {msg}
                                </Message>
                            }
                                <Header 
                                    as='h1' 
                                    textAlign="left"
                                    style={{
                                        fontFamily: "Montserrat",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                        fontSize: 24,
                                        display: 'block',
                                        marginBottom: 40
                                    }} 
                                    
                                >
                                    Log in to Siwes
                                </Header>
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
                        </Segment>
                    </Form>
                   {/* <Message 
                        style={{
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 16,
                            fontFamily: 'Prompt'

                        }}
                    >
                        <Message.Header>
                            USAGE INSTRUCTIONS
                        </Message.Header>
                        <Message.List>
                            <Message.Item>Enter your matric number and password to login</Message.Item>
                            <Message.Item>Edit your profile</Message.Item>
                            <Message.Item>Make payment amd complete the process</Message.Item>
                        </Message.List>
                    </Message>*/}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
        </>

    )
}
export default Login