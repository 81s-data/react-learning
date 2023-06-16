import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About'
import MovieDetails from './pages/MovieDetails.jsx'
import LegalNotices from './pages/LegalNotices.jsx'

import './index.css'
import ContactUs from './pages/ContactUs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='about' element={<About />}/>
          <Route path='movie/:id/:title' element={<MovieDetails />} />
          <Route path='legalnotices' element={<LegalNotices />} />
          <Route path='contactus' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
