import { Grid, Form, Image, Header, Segment, Button, Card} from "semantic-ui-react"
import logo from '../../images/icon.png'
import { useState } from "react"
import { useNavigate } from "react-router"
const AdminHome = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const [username, setusername] = useState('admin')
    const [password, setPassword] = useState('password')

    const [usernameError, setusernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const adminLogin = () => {
        if(username === ''){
            setusernameError({content: 'username is required', pointing: 'below'})
        }else if(password === ''){
            setPasswordError({content: 'password is required', pointing: 'below'})
        }else{
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                navigate('/admin/dashboard')

            }, 3000)
        }

    }



    return(
        <Grid textAlign="center" style={{height: '100vh', }} verticalAlign="middle">
            <Grid.Column style={{maxWidth: 450}}>
                <Card fluid raised style={{padding: '40px 40px'}}>
                    <Card.Content>
                        <Header>DELTA STATE UNIVERSITY, ABRAKA</Header>
                        <Image src={logo} />
                        <Header as='h2' color='blue' textAlign='center'>
                             Admin Login
                        </Header>
                        <Form size="large">
                            <Form.Input
                                placeholder="User Name"
                                value={username}
                                type="text"
                                error={usernameError}
                                onChange={e => setusername(e.target.value)}
                                onClick={() => setusernameError(false)}

                            />
                            <Form.Input
                                placeholder="Password"
                                type="password"
                                value={password}
                                error={passwordError}
                                onChange={e => setPassword(e.target.value)}
                                onClick = {() => setPasswordError(false)}
                            />
                            <Button loading={loading} size="large" fluid color="blue" onClick={adminLogin}>
                                Login
                            </Button>
                        </Form>     
                    </Card.Content>

                </Card>
                          
            </Grid.Column>
        </Grid>
    )
}
export default AdminHome