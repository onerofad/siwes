import React, { useEffect } from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Divider,
  Button,
  Container,
} from 'semantic-ui-react'
import DesktopHome from './DashboardHome'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import DesktopProfile2 from './DashboardProfile2'
import DashboardSiwes2 from './DashboardSiwes2'
import DashboardLocation from './DashboardLocation'
import DashboardPayment from './DashboardPayment'

const SidebarDesktop = ({info}) => {
  const [visible, setVisible] = React.useState(true)
  const [dimmed, setdimmed] = useState(false)

  const navigate = useNavigate()

  const [activeItem, setactive] = useState(info)

  const handleVisible = () => {
    setVisible(!visible)
  }

  useEffect(() => {

  }, [activeItem])


  return (
    <Grid columns={1}>
      <GridColumn>
        <SidebarPushable as={Segment} vertical style={{ overflow: 'hidden' }}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            vertical
            visible={visible}
            width='thin'
            inverted
            style={{backgroundColor: '#2980b9'}}
            
          >

            <Menu.Item>
            </Menu.Item>
            <MenuItem as='a'
              onClick={() => {
                  navigate("/dashboard")
              }} 
              active={activeItem === "dashboard"}
            >
              <Header inverted as="h5">
                <Icon name='clock outline' />
                <Header.Content>Get Started</Header.Content>
              </Header>
            </MenuItem>
            <MenuItem as='a'
                onClick={() => {
                      navigate("/dashboard/profile")
                }} 
                active={activeItem === "profile"}
            >
              <Header inverted as="h5">
                <Icon name='user outline' />
                <Header.Content>My Profile</Header.Content>
              </Header>
            </MenuItem>
             <MenuItem as='a'
                onClick={() => {
                      navigate("/dashboard/siwes")
                }} 
                active={activeItem === "siwes"}
             >
              <Header inverted as="h5">
                <Icon name='university' />
                <Header.Content>Siwes</Header.Content>
              </Header>
            </MenuItem>
            <MenuItem as='a'
                onClick={() => {
                      navigate("/dashboard/location")
                }} 
                active={activeItem === "location"}
            >
              <Header inverted as="h5">
                <Icon name='map outline' />
                <Header.Content>Location</Header.Content>
              </Header>
            </MenuItem>
            <MenuItem as='a'
                onClick={() => {
                    navigate("/dashboard/payment")
                }} 
                active={activeItem === "payment"}
            >
              <Header inverted as="h5">
                <Icon name='money bill alternate outline' />
                <Header.Content>Payments</Header.Content>
              </Header>
            </MenuItem>
            <MenuItem as='a'
                onClick={() => {
                    navigate("/login")
                }} 
            >
              <Header inverted as="h5">
                <Icon name='sign-out' />
                <Header.Content>Logout</Header.Content>
              </Header>
            </MenuItem>
          </Sidebar>

            <SidebarPusher>
            
              <Grid>
                <Grid.Column width={14}>
                <Button
                    onClick={() => handleVisible()}
                    icon
                    size='mini'
                 >
                  {
                    visible ?   <Icon name='angle left' />
                         :
                         <Icon name='angle right' />
                  }
                 
                 </Button>
                  {
                    (info === "dashboard") && <DesktopHome />
                  }
                  {
                    (info === "profile") &&<DesktopProfile2 />
                  }
                  {
                    (info === 'siwes') &&  <DashboardSiwes2 />
                  }
                  {
                    (info === 'location') &&  <DashboardLocation />
                  }
                  {
                    (info === 'payment') &&  <DashboardPayment />
                  }
                </Grid.Column>
              </Grid>
            </SidebarPusher>
        </SidebarPushable>
      </GridColumn>
    </Grid>
  )
}

export default SidebarDesktop