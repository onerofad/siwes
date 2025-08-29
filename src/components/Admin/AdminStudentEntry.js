import { Header, Form, Button } from "semantic-ui-react"
const AdminStudentEntry = () => {
    return(
        <>
        <Header style={{marginTop: 70}}>Student Details</Header>
            <Form size="large">
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                             placeholder="First Name"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            placeholder="Middle Name"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            placeholder="Last Name"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            placeholder="Matric No"
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                            placeholder="Birth Date"
                            type="date"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Programme"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Faculty"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Department"
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Select
                            placeholder="Discipline"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Level"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Gender"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            placeholder="Phone No"
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <Form.Input
                            placeholder="Email"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            fluid
                            placeholder="Picture"
                            type="file"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            placeholder="Session"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            placeholder="Password"
                        />
                    </Form.Field>
                </Form.Group>
                    <Form.Field style={{textAlign: 'center', marginTop: 40}}>
                        <Button size="large" positive>
                            Enter Student
                        </Button>
                    </Form.Field>
            </Form>
            </>
    )
 }
 export default AdminStudentEntry
 