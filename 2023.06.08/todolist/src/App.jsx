import React from 'react'
import List from './components/List'
import ListForm from './components/ListForm'

import './App.css'
import { useState } from 'react'

function App() {

  let [updateList, setUpdateList] = useState(false);

  return (
    <div>
      <h1>Todolist</h1>
      <main className='app'>
        <ListForm setUpdateList={setUpdateList} />
        <List updateList={updateList} setUpdateList={setUpdateList}/>
      </main>
    </div>
  )
}

export default App