import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import NousContacter from './pages/NousContacter.jsx'
import Login from './pages/Login.jsx'
import Produits from './pages/Produits.jsx'
import ProduitSingle from './pages/ProduitSingle.jsx'
import Dashboard from './pages/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/** Le Router */}
        <Route path='/' element={<App />}>
          <Route index element={<Accueil />}/>
          <Route path='contacter' element={<NousContacter />}/>
          <Route path='produits/'>
            <Route index element={<Produits />}/>
            <Route path=':id/:title' element={<ProduitSingle />}/>
          </Route>
          <Route path='login' element={<Login />}/>
          <Route path='admin' element={<Dashboard />}/>
        </Route>
      </Routes> {/** fin du Router */}
    </BrowserRouter>
  </React.StrictMode>,
)