import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';

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
          </Routes>
        </BrowserRouter>
      </Media>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider>
   
  )
}

export default App;
