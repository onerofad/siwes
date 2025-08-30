import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminHome from './components/Admin/AdminHome';
import AdminDashboard from './components/Admin/AdminDashboard';
import HomeMobile from './components/mobile/HomeMobile';

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
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeMobile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider> 
   
  )
}

export default App;
