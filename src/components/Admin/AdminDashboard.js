import { Button, Card, Form, Grid, Header, Icon, Image, Menu, } from "semantic-ui-react"
import AdminMenu from "./AdminMenu"
import AdminMenuLeft from "./AdminMenuLeft"
import AdminStudentEntry from "./AdminStudentEntry"

const AdminDashboard = () => {
    return(
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                  <AdminMenu />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <AdminMenuLeft   />
                </Grid.Column>
                <Grid.Column  width={12}>       
                <AdminStudentEntry /> 
                </Grid.Column>
            </Grid.Row>
           
        </Grid>
    )
}
export default AdminDashboard