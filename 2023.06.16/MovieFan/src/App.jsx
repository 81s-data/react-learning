import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

import Menu from './componant/Menu';
import { AuthContextProvider } from './context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import { MoviesContextProvider } from './context/MoviesContext';


function App() {

  const [update, setUpdate] = useState(false);

  return (
    <div>
      <AuthContextProvider>
        <MoviesContextProvider update={update} setUpdate={setUpdate}>
          <Menu />
          <Outlet />
        </MoviesContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App