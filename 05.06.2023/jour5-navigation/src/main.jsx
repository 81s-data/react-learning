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
import AppDashboard from './components/AppDashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/** Le Router */}
        <Route path='/' element={<App />}>
          <Route index element={<Accueil />}/> {/** Va s'insérer dans Outlet de App */}
          <Route path='contacter' element={<NousContacter />}/> {/** Va s'insérer dans Outlet de App */}
          <Route path='produits/'> {/** Va s'insérer dans Outlet de App */}
            <Route index element={<Produits />}/>
            <Route path=':id/:title' element={<ProduitSingle />}/>
          </Route>
          <Route path='login' element={<Login />}/>
          <Route path='admin' element={<AppDashboard />}>
            <Route index element={<Dashboard />}/> {/** Va s'insérer dans Outlet de AppDashboard */}
          </Route>
        </Route>
      </Routes> {/** fin du Router */}
    </BrowserRouter>
  </React.StrictMode>,
)