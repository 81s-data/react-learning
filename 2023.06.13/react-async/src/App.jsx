import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch('https://dummyjson.com/users')
    // .then(response => response.json())
    // .then(data => {
    //   setUsers(data);
    // })
    async function getUsers () {
      const response = await fetch('https://dummyjson.com/users');
      const {users} = await response.json();
      setUsers(users);
    }
    getUsers();
  }, [])

  return (
    <div className='row'>
      <h1>Users - Async Await</h1>
      {/* <pre>{JSON.stringify(users, null, '  ')}</pre> */}
      {users && users.map((item, key) => {
        return <article key={key} className='col-3'>
          <h2>{item.firstName} {item.lastName}</h2>
            <ul>
              <li>{item.email}</li>
              <li>{item.phone}</li>
              <li>{item.bloodGroup}</li>
            </ul>
          </article>
      })}
    </div>
  )
}

export default App