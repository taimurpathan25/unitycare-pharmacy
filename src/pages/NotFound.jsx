import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col'>
    <img src="/not-found.gif" alt="" className='w-100' />
    <div className='bg-blue-900 p-2 rounded-md hover:bg-blue-950 text-white'>
    <Link to='/'>Back To Home</Link>
    </div>
    </div>
    
    </>
  )
}

export default NotFound