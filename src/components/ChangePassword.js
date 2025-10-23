import { useReducer, useState } from "react"
import { Button, Form, Label, Message, Modal, Header, Icon } from "semantic-ui-react"
import { useEditStudentsMutation, useGetStudentsQuery } from "../features/api/apiSlice";
import { useNavigate } from "react-router";

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

const ChangePassword = ({mobile}) => {

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size} = state

    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [id, setId] = useState(localStorage.getItem("studentId"));
 
    const [passwordError, setPasswordError] = useState(false)
    const [confirmpasswordError, setconfirmpasswordError] = useState(false)

    const [editPassword, {isLoading}] = useEditStudentsMutation();

    const updatePassword = [password].every(Boolean) && !isLoading

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const btnClick = async () => {
        if(password == ""){
            setPasswordError({content: 'Enter Password', pointing: 'above'})
        }else if(confirmpassword == ""){
            setconfirmpasswordError({content: "Enter Password Again", pointing: 'above'})
        }else if(password !== confirmpassword){
            setconfirmpasswordError({content: "Passwords do not match", pointing: 'above'})
        }else{
            if(updatePassword){
                try{
                    setLoading(true);
                    await editPassword({id: id, password}).unwrap()
                    setPassword('')
                    setconfirmPassword('')
                    setLoading(false)
                    dispatch({type: 'open', size: 'mini'})
                }catch(error){
                    console.log('An error has occurred' + error)
                }

            }

        }
    }

    return(
       <div style={{padding: '10px 15px',}}>
        <Label style={{marginTop: mobile ? 20 : 70, marginLeft: 30, marginBottom: 20}} size="large" ribbon color="blue">UPDATE SIWES DETAILS</Label>                         
                <Message size={mobile ? 'small' : 'large'} style={{marginBottom: 40, color: '#000'}}  negative>
                    <Message.Content>
                        Enter Your new Password. 

                    </Message.Content>
                </Message>
                    <Form>
                            <Form.Field>
                                <Form.Input
                                    label="Enter Password"
                                    placeholder="Password"
                                    type="password"
                                    name={password}
                                    error={passwordError}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onClick={() => setPasswordError(false)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    type="password"
                                    name={confirmpassword}
                                    error={confirmpasswordError}
                                    onChange={(e) => setconfirmPassword(e.target.value)}
                                    onClick={() => setconfirmpasswordError(false)}
                                />
                            </Form.Field>
                            <Button 
                                positive
                                onClick={btnClick}
                                loading={loading}
                            >
                                Change password
                            </Button>
                    </Form>
            <Modal
                open={open}
                size={size}
            >
                <Modal.Content style={{textAlign: 'center'}}>
                    <Icon color="green" size="huge" name="check circle outline" />
                    <Header size="huge">Success</Header>
                    <p style={{fontSize: 20}}>Password Changed</p>
                    <Button secondary onClick={() => {
                        dispatch({type: 'close'})
                        navigate('/login')
                    }
                    }>
                        Close
                    </Button>
                </Modal.Content>
            </Modal>
        </div>
    )
}
export default ChangePassword