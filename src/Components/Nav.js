import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Nav() {
    const token=useSelector((state)=>state.auth.token)

    const handleLogout=()=>{
       window.location.reload()
    }
  return (
    <div className='navContainer'>
      <Link to="/home">Home</Link>
      {!token?(<Link to="/login">Login</Link>):(<></>)}
      {token?(<button onClick={handleLogout}>Logout</button>):(<></>)}
    </div>
  )
}