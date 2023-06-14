import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import { AuthContextProvider } from './context/AuthContext'
import { LangContextProvider } from './context/LangContext'

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <AuthContextProvider update={update} setUpdate={setUpdate}>
      <LangContextProvider>
        <div>
            <Menu />
            <Outlet />
        </div>
      </LangContextProvider>
    </AuthContextProvider>
  )
}

export default App