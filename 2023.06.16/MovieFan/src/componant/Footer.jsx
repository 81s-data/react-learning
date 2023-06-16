import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black bottom-0' style={{height: '200px'}}>
        <Link to='/legalnotices' className='text-light text-decoration-none display-5'>Mentions légales</Link>
    </div>
  )
}

export default Footer