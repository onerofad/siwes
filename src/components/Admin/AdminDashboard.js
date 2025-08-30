import { Grid, Header, Icon, Image, Menu, } from "semantic-ui-react"
import AdminMenu from "./AdminMenu"
import AdminStudentEntry from "./AdminStudentEntry"
import logo from '../../images/icon.png'
import { useState } from "react"
import AdminLocationDetails from "./AdminLocationDetails"
import { useNavigate } from "react-router"
import AdminUsers from "./AdminUsers"
import AdminReports from "./AdminReports"


const AdminDashboard = () => {

    const [activeItem, setactiveItem] = useState("studententry")
    
    const navigate = useNavigate()

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                  <AdminMenu />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Menu fixed="left" style={{marginTop: 70}} vertical inverted pointing >
                        <Menu.Item as='a'>
                            <Image circular centered src={logo} />
                            <Header inverted textAlign="center">Admin Menu</Header>
                        </Menu.Item>
                        <Menu.Item active={activeItem === "studententry"} as='a' onClick={() => setactiveItem("studententry")} >
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="student" />
                                    <Header.Content>Student Entry</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item as='a' active={activeItem === "siweslocations"}  onClick={() => setactiveItem("siweslocations")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="map outline" />
                                    <Header.Content>Siwes Locations</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item as='a' active={activeItem === "users"}  onClick={() => setactiveItem("users")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="user outline" />
                                    <Header.Content>Users</Header.Content>
                            </Header>
                        </Menu.Item>
                         <Menu.Item as='a' active={activeItem === "reports"}  onClick={() => setactiveItem("reports")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="file excel outline" />
                                    <Header.Content>Reports</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item as='a' onClick={() => navigate("/admin")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="sign-out" />
                                    <Header.Content>Log out</Header.Content>
                            </Header>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
                <Grid.Column  width={12}>       
                {activeItem === "studententry" && <AdminStudentEntry />}
                {activeItem === "siweslocations" && <AdminLocationDetails />}
                {activeItem === "users" && <AdminUsers />}
                {activeItem === "reports" && <AdminReports />}

                </Grid.Column>
            </Grid.Row>
           
        </Grid>
    )
}
export default AdminDashboard