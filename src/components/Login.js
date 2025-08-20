import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import Navbar2 from "./Navbar2.js"
import '../css/style.css'
import Footer from "./Footer.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const users = [
    {
        id: '1',
        matno: 'CEF/2025/12345',
        passwd: '123456'
    },
    {
        id: '2',
        matno: 'CEF/2025/12346',
        passwd: '1234567'
    },

]

const Login = () => {

    const [msg, setMsg] = useState("")

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [matno, setmatno] = useState("")
    const [passwd, setpasswd] = useState("")

    const [matnoerror, setmatnoerror] = useState(false)
    const [passwderror, setpasswderror] = useState(false)

    const handlematno = (e) => setmatno(e.target.value)
    const handlepasswd = (e) => setpasswd(e.target.value)


    const onclickLogin = () => {
        if(matno === ""){
            setmatnoerror({content: 'Enter matric no here', pointing: 'below'})
        }else if(passwd === ""){
            setpasswderror({content: 'Enter password here', pointing: 'below'})
        }else {
            setLoading(true)
            setTimeout(() => {
                const user = users.filter(u => u.matno === matno && u.passwd == passwd)[0]
                if(user){
                    setLoading(false)
                    navigate("/dashboard")
                }else if(!user){
                    setLoading(false)
                    setMsg("Invalid matric number or password")
                }

            }, 3000)
        }
    }

    return(
        <>
        <div style={{ height: '100vh', backgroundColor: ''}} >
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
            <Grid.Column style={{maxWidth: 500}}>
                    
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
                                value={matno}
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
                                value={passwd}
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