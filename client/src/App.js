import './App.css'
import AboutUs from './website/pages/AboutUs/AboutUs'
import ContactUs from './website/pages/ContactUs/ContactUs'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Page_not_found from './website/pages/page_not_found/page_not_found'
import Home from './website/pages/Home/Home'

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/' element={<Home />} />

          
          <Route path='/*' element={<Page_not_found />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App