import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import { AuthContextProvider } from './context/AuthContext'

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <AuthContextProvider update={update} setUpdate={setUpdate}>
      <div>
          <Menu />
          <Outlet />
      </div>
    </AuthContextProvider>
  )
}

export default App