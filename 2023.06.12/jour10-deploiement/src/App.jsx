import React, { useState } from 'react'
import Form from './composants/Form'
import Liste from './composants/Liste'

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <div> 
      <h1>App utilisant Firebase</h1>
      <Form setUpdate={setUpdate}/>
      <Liste update={update}/>
    </div>
  )
}

export default App