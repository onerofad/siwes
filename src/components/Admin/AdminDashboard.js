import { Grid, GridColumn, GridRow, Header, Icon, Image, Menu, Segment, Sidebar, } from "semantic-ui-react"
import AdminMenu from "./AdminMenu"
import AdminStudentEntry from "./AdminStudentEntry"
import logo from '../../images/icon.png'
import { useState } from "react"
import AdminLocationDetails from "./AdminLocationDetails"
import { useNavigate } from "react-router"
import AdminUsers from "./AdminUsers"
import AdminPaymentReports from "./AdminPaymentReports"
import UploadFaculties from "./UploadFaculties"
import UploadDepartments from "./UploadDepartments"
import UploadDisciplines from "./UploadDisciplines"
import AdminSiwesReport from "./AdminSiwesReport"


const AdminDashboard = ({mobile}) => {

    const [activeItem, setactiveItem] = useState("studententry")
    const [visible, setVisible] = useState(false)

    const navigate = useNavigate()

    if(mobile){
        return(
           <>
           <Menu
                inverted
                color="blue"
           >
            <Menu.Item>
                <Header as="h2" inverted>
                        ADMIN DELSU SIWES
                </Header>
            </Menu.Item>
            <Menu.Item position="right">
                <Icon onClick={() => setVisible(!visible)} link size="large" name= {visible ? "close" : "sidebar"} />
            </Menu.Item>
           </Menu>
            <Sidebar animation="overlay" width="tiny" visible={visible} as={Menu}>
                <Menu 
                    vertical
                    inverted
                    size="large"
                    pointing
                 >
                    <Menu.Item as='a'>
                           <Image size="tiny" circular centered src={logo} />
                            <Header as="h5" inverted textAlign="center">
                                Admin Menu
                            </Header>
                        </Menu.Item>
                        <Menu.Item active={activeItem === "faculties"} as='a' onClick={() => setactiveItem("faculties")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="upload" />
                                <Header.Content>Upload Faculties</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item active={activeItem === "departments"} as='a' onClick={() => setactiveItem("departments")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="upload" />
                                        <Header.Content>Upload Departments</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item active={activeItem === "disciplines"} as='a' onClick={() => setactiveItem("disciplines")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="upload" />
                                        <Header.Content>Upload Disciplines</Header.Content>
                                </Header>
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
                            {/*<Menu.Item as='a' active={activeItem === "users"}  onClick={() => setactiveItem("users")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="user outline" />
                                        <Header.Content>Users</Header.Content>
                                </Header>
                            </Menu.Item>*/}
                            <Menu.Item as='a' active={activeItem === "reports"}  onClick={() => setactiveItem("reports")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="file excel outline" />
                                        <Header.Content>Payment Reports</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item as='a' active={activeItem === "siwes_reports"}  onClick={() => setactiveItem("siwes_reports")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="file excel outline" />
                                        <Header.Content>SIWES Reports</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item as='a' onClick={() => navigate("/admin")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="sign-out" />
                                        <Header.Content>Log out</Header.Content>
                                </Header>
                            </Menu.Item>
                    
                </Menu>
            </Sidebar>
             {activeItem === "faculties" && <UploadFaculties mobile />}
             {activeItem === "departments" && <UploadDepartments mobile />}
             {activeItem === "disciplines" && <UploadDisciplines mobile />}
             {activeItem === "studententry" && <AdminStudentEntry mobile />}
             {activeItem === "siweslocations" && <AdminLocationDetails mobile />}
             {activeItem === "users" && <AdminUsers  mobile />}
             {activeItem === "reports" && <AdminPaymentReports mobile />}
             {activeItem === "siwes_reports" && <AdminSiwesReport mobile />}
           </>
        )

    }else{
    return(
        <Grid>
            <GridRow>
                <GridColumn width={16}>
                    <AdminMenu />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={3}>
                    <Menu fixed="left" style={{marginTop: 70}} vertical inverted pointing>
                        <Menu.Item as='a'>
                            <Image circular centered src={logo} />
                            <Header inverted textAlign="center">Admin Menu</Header>
                        </Menu.Item>
                        <Menu.Item active={activeItem === "faculties"} as='a' onClick={() => setactiveItem("faculties")}>
                            <Header textAlign="center" as='h5' inverted>
                                <Icon name="upload" />
                                <Header.Content>Upload Faculties</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Item active={activeItem === "departments"} as='a' onClick={() => setactiveItem("departments")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="upload" />
                                        <Header.Content>Upload Departments</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item active={activeItem === "disciplines"} as='a' onClick={() => setactiveItem("disciplines")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="upload" />
                                        <Header.Content>Upload Disciplines</Header.Content>
                                </Header>
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
                            {/*<Menu.Item as='a' active={activeItem === "users"}  onClick={() => setactiveItem("users")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="user outline" />
                                        <Header.Content>Users</Header.Content>
                                </Header>
                            </Menu.Item>*/}
                            <Menu.Item as='a' active={activeItem === "reports"}  onClick={() => setactiveItem("reports")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="file excel outline" />
                                        <Header.Content>Payment Reports</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item as='a' active={activeItem === "siwes_reports"}  onClick={() => setactiveItem("siwes_reports")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="file excel outline" />
                                        <Header.Content>SIWES Reports</Header.Content>
                                </Header>
                            </Menu.Item>
                            <Menu.Item as='a' onClick={() => navigate("/admin")}>
                                <Header textAlign="center" as='h5' inverted>
                                    <Icon name="sign-out" />
                                        <Header.Content>Log out</Header.Content>
                                </Header>
                            </Menu.Item>
                    </Menu>
                </GridColumn>
                <GridColumn width={12}>
                    {activeItem === "faculties" && <UploadFaculties />}
                    {activeItem === "departments" && <UploadDepartments />}
                    {activeItem === "disciplines" && <UploadDisciplines />}
                    {activeItem === "studententry" && <AdminStudentEntry />}
                    {activeItem === "siweslocations" && <AdminLocationDetails />}
                    {activeItem === "users" && <AdminUsers />}
                    {activeItem === "reports" && <AdminPaymentReports />}
                    {activeItem === "siwes_reports" && <AdminSiwesReport />}
                </GridColumn>
            </GridRow>
        </Grid>
        )
    }

}
export default AdminDashboard