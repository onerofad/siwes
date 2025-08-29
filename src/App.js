import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Siwes from './components/Siwes';
import MyProfile from './components/MyProfile';
import Location from './components/Location';
import Payment from './components/Payment';
import Setting from './components/Settings';
import AdminHome from './components/Admin/AdminHome';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLocation from './components/Admin/AdminLocation';

const {Media, MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }
})

const App = () => {
  return (
    <MediaContextProvider>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/siwes' element={<Siwes />} />
            <Route path='/dashboard/profile' element={<MyProfile />} />
            <Route path='/dashboard/location' element={<Location /> } />
            <Route path='/dashboard/payment' element={<Payment /> } />
            <Route path='/dashboard/setting' element={<Setting /> } />
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/location' element={<AdminLocation />} />


          </Routes>
        </BrowserRouter>
      </Media>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider> 
   
  )
}

export default App;
